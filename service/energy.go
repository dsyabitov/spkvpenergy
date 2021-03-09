package service

import (
	"context"
	"errors"
	"go.uber.org/zap"
	"spkvpenergy/ocapi"
	"spkvpenergy/ocapi/client"
	"spkvpenergy/ocapi/client/operations"
	"spkvpenergy/ocapi/models"
	"strconv"
	"sync"
	"time"
)

const (
	DATETIME_FORMAT = "2006-01-02 15:04:05"
)

type EnergyImpl struct{
	UnimplementedEnergyServer
	Api *ocapi.Client
	DeviceId int32
	OperativeParamCodes []string
	params []*models.DeviceParam
	paramIds []int64
	paramIdToPlace map [int64]int
	paramIdToName map[int64]string
	paramsLock sync.Mutex
	operativeParamIds []int64
}

func (e *EnergyImpl) Ping(ctx context.Context, request *StringRequest) (response *StringResponse, err error) {
	zap.S().Info("Ping request - message %s", request.Message)
	response = new(StringResponse)
	response.Message = "Pong"
	return response, nil
}

func (e *EnergyImpl) ChartData (ctx context.Context, request *ChartDataRequest) (response *ChartDataResponse, err error) {
	zap.S().Infof("ChartData: %v-%v, %v", request.Start, request.End, request.Step)
	response = new (ChartDataResponse)
	cli, auth := e.Api.GetClientAndAuth()
	if cli == nil || auth == nil {
		zap.S().Errorf("owencloud api failed")
		return nil, errors.New("owencloud api failed");
	}

	err = e.loadParams(cli, auth)
	if err != nil {
		zap.S().Error(err)
		return nil, err
	}

	op := operations.NewParametersDataParams().WithBody(&models.ParametersDataReq{
		Start: time.Unix(request.Start, 0).Format(DATETIME_FORMAT),
		End:   time.Unix(request.End, 0).Format(DATETIME_FORMAT),
		Ids:   e.paramIds,
		Step:  request.Step,
	})

	r, err := cli.Operations.ParametersData(op, auth)

	if err != nil {
		zap.S().Error(err)
		return nil, err
	}

	for _, d := range r.Payload {
		ser := ChartSeriesData{
			Name: e.paramIdToName[d.ID],
		}
		ser.Values = make([]*SeriesValues, len(d.Values))
		for i, v := range d.Values {
			val, err := strconv.ParseFloat(v.V, 32)
			if err != nil {
				zap.S().Warn("Can't parse float value from parameters/data response: %v - %v", v.V, err)
			}
			ser.Values[i] =  &SeriesValues{
				X:                    v.D * 1000,
				Y:                    val,
			}
		}
		response.Series = append(response.Series, &ser)
	}

	return response, nil
}

func (e *EnergyImpl) Events (ctx context.Context, request *EventsRequest) (response *EventsResponse, err error) {
	if request.Backward > 0 && request.Forward > 0 {
		return nil, errors.New("only one of backward of forward must be set")
	}

	cli, auth := e.Api.GetClientAndAuth()
	if cli == nil || auth == nil {
		zap.S().Errorf("owencloud api failed")
		return nil, errors.New("owencloud api failed");
	}

	limit := request.Count + 1
	logResp := models.EventLogResp{}
	if request.Forward > 0 {
		start := time.Unix(request.Forward, 0).Format(DATETIME_FORMAT)
		p := operations.NewEventLogForwardParams().WithID(e.DeviceId).WithBody(&models.EventLogForwardReq{
			Start: &start,
			Limit: &limit,
		})
		var r *operations.EventLogForwardOK
		r, err = cli.Operations.EventLogForward(p, auth)
		if err ==nil {
				logResp = r.Payload
		}
	} else {
		end := time.Unix(request.Backward, 0).Format(DATETIME_FORMAT)
		p := operations.NewEventLogBackwardParams().WithID(e.DeviceId).WithBody(&models.EventLogBackwardReq{
			End: &end,
			Limit: &limit,
		})
		var r *operations.EventLogBackwardOK
		r, err = cli.Operations.EventLogBackward(p, auth)
		if err == nil {
			logResp = r.Payload
		}
	}

	if err != nil {
		zap.S().Error(err)
		return nil, err
	}

	response = new(EventsResponse)

	for i, el := range logResp {
		params := ""
		for _, p := range el.Data {
			params = params + e.paramIdToName[p.ID] + "=" + p.V + "; "
		}

		r := Event{
			Start:                el.StartDt,
			End:                  el.EndDt,
			Name:                 el.Message,
			Params:               params,
		}

		if i == 0 {
			response.FirstDate = r.Start
		}

		if i == (int(request.Count) - 1) || i == len(logResp) - 1 {
			response.LastDate = r.Start
		}
		response.Events = append(response.Events, &r)
	}

	if len(logResp) > int(request.Count) {
		response.HaveMore = true
	}

	return response, nil
}

func (e *EnergyImpl) LastData(request *StringRequest, response Energy_LastDataServer) error {
	cli, auth := e.Api.GetClientAndAuth()
	if cli == nil || auth == nil {
		zap.S().Errorf("owencloud api failed")
		return errors.New("owencloud api failed");
	}

	err := e.loadParams(cli, auth)
	if err != nil {
		zap.S().Error(err)
		return err
	}

	r := operations.NewGetLastParametersDataParams().WithBody(&models.IDList{Ids: e.operativeParamIds})

	for ;; {
		alarm, online, err := e.getDeviceStatus(cli, auth)
		if err != nil {
			zap.S().Error(err)
			return err
		}

		p, err := cli.Operations.GetLastParametersData(r, auth)
		if err != nil {
			zap.S().Error(err)
			return err
		}

		resp := LastDataResponse{
			DataTime: time.Now().Unix(),
			Online: online,
			Alarm: alarm,
		}

		sorted := make([]*models.ParameterValues, len(e.operativeParamIds))
		for _, par := range p.Payload {
			if place, ok := e.paramIdToPlace[par.ID]; ok {
				sorted[place] = par
			}
		}

		for _, par := range sorted {
			value := ""
			for _, val := range par.Values {
				if val.F != "" {
					value = val.F
				} else {
					value = val.V
				}
				resp.DataTime = time.Unix(val.D, 0).Unix()
			}

			data := LastData{
				ParamName:            e.paramIdToName[par.ID],
				Value:                value,
			}
			resp.LastData = append(resp.LastData, &data)
		}

		err = response.Send(&resp)
		if err != nil {
			zap.S().Error(err)
			return err
		}

		time.Sleep(time.Second * 10)
	}
}

func (e *EnergyImpl) getDeviceStatus(cli *client.OwenCloudAPI, auth *ocapi.CustomAuth) (hasAlarm, online bool, err error) {
	p := operations.NewDeviceIndexParams().WithBody(&models.DeviceIndexRequest{DeviceIds: []int64{int64(e.DeviceId)}})
	r, err := cli.Operations.DeviceIndex(p, auth)
	if err != nil {
		return
	}

	for _, d := range r.Payload {
		return d.HasAlarm, d.IsOnline, nil
	}
	return false, false, errors.New("empty response from owencloud")
}

func (e *EnergyImpl) loadParams(cli *client.OwenCloudAPI, auth *ocapi.CustomAuth) error {
	e.paramsLock.Lock()
	defer e.paramsLock.Unlock()

	if len(e.params) > 0 {
		return nil
	}

	p := operations.NewFindDeviceByIDParams().WithID(e.DeviceId)
	r, err := cli.Operations.FindDeviceByID(p, auth)
	if err != nil {
		zap.S().Error(err)
		return err
	}

	e.paramIdToName = make(map[int64]string)
	e.paramIdToPlace = make(map[int64]int)

	paramCodesToPlace := make(map[string]int)

	for i, code := range e.OperativeParamCodes {
		paramCodesToPlace[code] = i
	}


	e.params = r.Payload.Parameters
	for _, p := range e.params {
		if p.InGraphs != 1 {
			continue
		}
		e.paramIds = append(e.paramIds, int64(*p.ID))
		e.paramIdToName[int64(*p.ID)] = *p.Name

		if _, ok := paramCodesToPlace[*p.Code]; ok {
			e.operativeParamIds = append(e.operativeParamIds, int64(*p.ID))
			e.paramIdToPlace[int64(*p.ID)] = paramCodesToPlace[*p.Code]
		}
	}
	return nil
}

