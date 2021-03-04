package ocapi

import (
	"spkvpenergy/ocapi/client"
	"spkvpenergy/ocapi/client/operations"
	"spkvpenergy/ocapi/models"
	"testing"
)

var apiConf = &RESTAPIConf{
	API: client.TransportConfig{
	 Host:     "api.owencloud.ru",
		BasePath: "/v1",
		Schemes:  []string{"https"},
	},
	Login:          "demo@owen.ru",
	Password:       "demo123",
	MaxConn:        2,
	DialTimeout:    60,
	RequestTimeout: 60,
}

func getClientAndAuth() (*client.OwenCloud, *CustomAuth) {
	a := client.NewHTTPClientWithConfig(nil, &apiConf.API)
	body := &models.AuthOpen{
		Login:    &apiConf.Login,
		Password: &apiConf.Password,
	}

	param := operations.NewAuthParams().WithBody(body)
	r, err := a.Operations.Auth(param, nil)
	if err != nil {
		return nil, nil
	}

	return a, &CustomAuth{Token: r.Payload.Token}
}

func TestFindDeiceByID(t *testing.T) {
	c := NewClient(apiConf)
	cli, auth := c.GetClientAndAuth()

	if (cli == nil || auth == nil) {
		t.Logf("%v", "Error")
		return
	}

	param := operations.NewFindDeviceByIDParams()
	param.ID = 43539

	r, err := cli.Operations.FindDeviceByID(param, auth)
	if err != nil {
		cr, ok := err.(CodeReader)
		if ok {
			t.Logf("StatusCode:%d", cr.Code())
		}
		t.Logf("%#v\n", err)
		return
	}

	for _, cat := range r.Payload.ParameterCategories {
		t.Logf("%#v\n", cat)
	}
	for _, par := range r.Payload.Parameters {
		t.Logf("%#v\n", par)
	}


	cli, auth = c.GetClientAndAuth()
	if cli == nil {
		t.Error("cli is nil")
	}
}

