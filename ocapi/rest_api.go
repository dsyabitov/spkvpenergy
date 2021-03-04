package ocapi

import (
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

