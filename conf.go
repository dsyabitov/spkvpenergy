package main

import (
	"encoding/json"
	"io/ioutil"
	"os"
)

type Conf struct {
	Login string `json:"login"`
	Password string `json:"password"`
	MaxConn int `json:"max_connections"`
	LogLevel string `json:"log_level"`
	OperativeParams []string `json:"operative_params"`
	DeviceId int32 `json:"device_id"`
}

func NewConfig(filename string) (res Conf, err error) {
	b, err := ioutil.ReadFile(filename)
	if err != nil {
		return
	}

	err = json.Unmarshal(b, &res)

	if err != nil {
		return
	}

	envLogin := os.Getenv("LOGIN")
	envPassword := os.Getenv("PASSWORD")

	if envLogin != "" {
		res.Login = envLogin
	}

	if envPassword != "" {
		res.Password = envPassword
	}
	return
}

