package ocapi

import (
	"crypto/tls"
	"fmt"
	"net"
	"net/http"
	"spkvpenergy/ocapi/client/operations"
	"spkvpenergy/ocapi/models"
	"time"

	"github.com/go-openapi/runtime"
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	"spkvpenergy/ocapi/client"
)

// Timeout - interface for net.OpError, url.Error
type Timeout interface {
	Timeout() bool
}

// Temporary - interface for net.OpError, url.Error
type Temporary interface {
	Temporary() bool
}

// CodeReader Read Code from default response
type CodeReader interface {
	Code() int
	Error() string
}

// CustomAuth - Custom Auth Info for request
type CustomAuth struct {
	Token string
}

// TransportWraper -
type TransportWraper interface {
	RoundTrip(rt http.RoundTripper, req *http.Request) (*http.Response, error)
}

// RoundTrip -
//func (w *TransportWraper) RoundTrip(rt *http.RoundTripper, req *http.Request) (*http.Response, error) {
//}

// TransportWrap -
type TransportWrap struct {
	tw TransportWraper
	t  http.RoundTripper
}

// RoundTrip -
func (tw *TransportWrap) RoundTrip(req *http.Request) (*http.Response, error) {
	return tw.tw.RoundTrip(tw.t, req)
}

// AuthenticateRequest - write AuthInfo into request
func (a *CustomAuth) AuthenticateRequest(req runtime.ClientRequest, reg strfmt.Registry) error {
	if a.Token != "" {
		req.SetHeaderParam("Authorization", fmt.Sprintf("Bearer %s", a.Token))
	}

	return nil
}

type Client struct {
	owencloud *client.OwenCloudAPI
	conf *RESTAPIConf
	auth *CustomAuth
}

func NewClient(conf *RESTAPIConf, rt ...TransportWraper) *Client {
	dtm := time.Duration(conf.DialTimeout) * time.Second
	if dtm == 0 {
		dtm = time.Duration(60) * time.Second
	}

	rtm := time.Duration(conf.RequestTimeout) * time.Second
	if rtm == 0 {
		rtm = time.Duration(60) * time.Second
	}

	httpTransport := &http.Transport{
		Proxy: http.ProxyFromEnvironment,
		DialContext: (&net.Dialer{
			Timeout:   dtm,
			KeepAlive: 30 * time.Second,
			DualStack: true,
		}).DialContext,
		MaxConnsPerHost:       conf.MaxConn,
		MaxIdleConns:          100,
		IdleConnTimeout:       90 * time.Second,
		TLSHandshakeTimeout:   10 * time.Second,
		TLSClientConfig:       &tls.Config{InsecureSkipVerify: true},
		ExpectContinueTimeout: 1 * time.Second,
	}

	var rtt http.RoundTripper
	if len(rt) == 1 {
		rtt = &TransportWrap{rt[0], httpTransport}
	} else {
		rtt = httpTransport
	}

	// https, disable cert validation
	// httpTransport.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}

	httpClient := &http.Client{
		Transport: rtt,
		Jar:       nil,
		Timeout:   rtm,
	}

	// set open-api default Timeout
	httptransport.DefaultTimeout = rtm

	t := httptransport.NewWithClient(conf.API.Host, conf.API.BasePath, conf.API.Schemes, httpClient)
	if conf.Debug {
		t.SetDebug(true)
	}

	return &Client{
		conf:  conf,
		owencloud: client.New(t, strfmt.Default),
	}
}
func (c *Client) checkAuth() error {
	p := operations.NewDeviceTypesInfoParams();
	p.Body = make([]int64, 0)
	_, err := c.owencloud.Operations.DeviceTypesInfo(p, c.auth)
	if err != nil {
		return err
	}
	return nil
}

func (c *Client) GetClientAndAuth() (*client.OwenCloudAPI, *CustomAuth) {
	if c.auth == nil || c.checkAuth() != nil {
		body := &models.AuthOpen{
			Login:    &c.conf.Login,
			Password: &c.conf.Password,
		}

		param := operations.NewAuthParams().WithBody(body)
		r, err := c.owencloud.Operations.Auth(param, nil)
		if err != nil {
			return nil, nil
		}

		c.auth = &CustomAuth{
			Token: r.Payload.Token,
		}
	}

	return c.owencloud, c.auth
}

