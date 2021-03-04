// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"
)

// New creates a new operations API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) *Client {
	return &Client{transport: transport, formats: formats}
}

/*
Client for operations API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

/*
Auth Auth users
*/
func (a *Client) Auth(params *AuthParams, authInfo runtime.ClientAuthInfoWriter) (*AuthOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewAuthParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "auth",
		Method:             "POST",
		PathPattern:        "/auth/open",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &AuthReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*AuthOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*AuthDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
DeviceIndex Device index
*/
func (a *Client) DeviceIndex(params *DeviceIndexParams, authInfo runtime.ClientAuthInfoWriter) (*DeviceIndexOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeviceIndexParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "deviceIndex",
		Method:             "POST",
		PathPattern:        "/device/index",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &DeviceIndexReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*DeviceIndexOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeviceIndexDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
DeviceTypesInfo Get device types
*/
func (a *Client) DeviceTypesInfo(params *DeviceTypesInfoParams, authInfo runtime.ClientAuthInfoWriter) (*DeviceTypesInfoOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeviceTypesInfoParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "deviceTypesInfo",
		Method:             "POST",
		PathPattern:        "/device-management/types-info",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &DeviceTypesInfoReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*DeviceTypesInfoOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeviceTypesInfoDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
EventList Get company events
*/
func (a *Client) EventList(params *EventListParams, authInfo runtime.ClientAuthInfoWriter) (*EventListOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEventListParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "eventList",
		Method:             "POST",
		PathPattern:        "/event/list",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &EventListReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*EventListOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*EventListDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
EventListByDevice Get events list by device
*/
func (a *Client) EventListByDevice(params *EventListByDeviceParams, authInfo runtime.ClientAuthInfoWriter) (*EventListByDeviceOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEventListByDeviceParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "eventListByDevice",
		Method:             "POST",
		PathPattern:        "/event/list-by-device",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &EventListByDeviceReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*EventListByDeviceOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*EventListByDeviceDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
EventLog Get device events log
*/
func (a *Client) EventLog(params *EventLogParams, authInfo runtime.ClientAuthInfoWriter) (*EventLogOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEventLogParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "eventLog",
		Method:             "POST",
		PathPattern:        "/device/events-log/{id}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &EventLogReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*EventLogOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*EventLogDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
EventLogBackward Get device events log backward
*/
func (a *Client) EventLogBackward(params *EventLogBackwardParams, authInfo runtime.ClientAuthInfoWriter) (*EventLogBackwardOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEventLogBackwardParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "eventLogBackward",
		Method:             "POST",
		PathPattern:        "/device/events-log-backward/{id}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &EventLogBackwardReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*EventLogBackwardOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*EventLogBackwardDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
EventLogForward Get device events log forward
*/
func (a *Client) EventLogForward(params *EventLogForwardParams, authInfo runtime.ClientAuthInfoWriter) (*EventLogForwardOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewEventLogForwardParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "eventLogForward",
		Method:             "POST",
		PathPattern:        "/device/events-log-forward/{id}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &EventLogForwardReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*EventLogForwardOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*EventLogForwardDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
FindDeviceByID Return Device
*/
func (a *Client) FindDeviceByID(params *FindDeviceByIDParams, authInfo runtime.ClientAuthInfoWriter) (*FindDeviceByIDOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewFindDeviceByIDParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "findDeviceById",
		Method:             "GET",
		PathPattern:        "/device/{id}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &FindDeviceByIDReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*FindDeviceByIDOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*FindDeviceByIDDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
GetCompanyEvents Return events data by Company
*/
func (a *Client) GetCompanyEvents(params *GetCompanyEventsParams, authInfo runtime.ClientAuthInfoWriter) (*GetCompanyEventsOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetCompanyEventsParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "getCompanyEvents",
		Method:             "GET",
		PathPattern:        "/company/events-list",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &GetCompanyEventsReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*GetCompanyEventsOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetCompanyEventsDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
GetLastParametersData Return last parameters data
*/
func (a *Client) GetLastParametersData(params *GetLastParametersDataParams, authInfo runtime.ClientAuthInfoWriter) (*GetLastParametersDataOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetLastParametersDataParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "getLastParametersData",
		Method:             "GET",
		PathPattern:        "/parameters/last-data",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &GetLastParametersDataReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*GetLastParametersDataOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetLastParametersDataDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
ParametersData Get parameter values
*/
func (a *Client) ParametersData(params *ParametersDataParams, authInfo runtime.ClientAuthInfoWriter) (*ParametersDataOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewParametersDataParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "parametersData",
		Method:             "POST",
		PathPattern:        "/parameters/data",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{""},
		Schemes:            []string{"https"},
		Params:             params,
		Reader:             &ParametersDataReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, err
	}
	success, ok := result.(*ParametersDataOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ParametersDataDefault)
	return nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}