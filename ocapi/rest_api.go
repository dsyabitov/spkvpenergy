package ocapi

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"spkvpenergy/ocapi/client"
)

// AuthResp - Auth response
type AuthResp struct {
	Token             string
	Name              string
	Surname           string
	CompanyName       string `json:"company_name"`
	CanManageCommands bool
	SmsConfirmation   bool
}

// RESTAPIConf - API configuration
type RESTAPIConf struct {
	API            client.TransportConfig
	DialTimeout    int
	RequestTimeout int
	MaxConn        int
	Debug          bool
	Login          string
	Password       string
}

// RESTCloudAPI - RESTCloudAPI
type RESTCloudAPI struct {
	conf *RESTAPIConf
	auth *AuthResp
}

// CreateRESTCloudAPI - create new API
func CreateRESTCloudAPI(conf *RESTAPIConf) (*RESTCloudAPI, error) {
	return &RESTCloudAPI{
		conf: conf,
	}, nil
}

// DoRequest - Do request to API
func (a *RESTCloudAPI) DoRequest(req *http.Request) (resp *http.Response, err error) {
	for i := 0; i < 3; i++ {
		// check auth present
		if a.auth == nil {
			err = a.Auth()
			if err != nil {
				return
			}
		}

		// set Authorization tag
		req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", a.auth.Token))

		// do request
		resp, err = http.DefaultClient.Do(req)
		if err != nil {
			return
		}

		// check status code http.StatusUnauthorized
		// token expired, do auth, do request
		if resp.StatusCode == http.StatusUnauthorized {
			err = fmt.Errorf("StatusUnauthorized")
			a.auth = nil

			continue
		}

		return
	}

	return
}

// Auth - Get auth token from API
func (a *RESTCloudAPI) Auth() error {
	requestBody := `{"login":"v.matytsin@owen.ru","password":"123456"}`
	bodyReader := bytes.NewBufferString(requestBody)
	req, err := http.NewRequest("POST", "http://api:80/v1/auth/open", bodyReader)
	if err != nil {
		return err
	}
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}

	dec := json.NewDecoder(resp.Body)
	authResp := AuthResp{}
	err = dec.Decode(&authResp)
	if err != nil {
		return err
	}

	a.auth = &authResp
	return nil
}

// GetDeviceInfo - Find device by Number
// func (a *RESTCloudAPI) GetDeviceInfo(identifier string) (*Device, error) {
// 	deviceID := 43273
// 	req, err := http.NewRequest("GET", fmt.Sprintf("http://api/v1/device/%d", deviceID), nil)
// 	if err != nil {
// 		return nil, err
// 	}

// 	resp, err := a.DoRequest(req)
// 	if err != nil {
// 		return nil, err
// 	}

// 	if resp.StatusCode != http.StatusOK {
// 		return nil, fmt.Errorf(resp.Status)
// 	}

// 	device := Device{}
// 	dec := json.NewDecoder(resp.Body)
// 	err = dec.Decode(&device)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &device, nil
// }
