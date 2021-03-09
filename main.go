package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"net/http"
	"os"
	"os/signal"
	"spkvpenergy/ocapi"
	"spkvpenergy/ocapi/client"
	"spkvpenergy/service"
	"syscall"
	"time"
)

var (
	wrapped *grpcweb.WrappedGrpcServer
	apiConf = &ocapi.RESTAPIConf{
		API: client.TransportConfig{
			Host:     "api.owencloud.ru",
			BasePath: "/v1",
			Schemes:  []string{"https"},
		},
		DialTimeout:    60,
		RequestTimeout: 60,
	}
)

func main() {
	confFile := flag.String("c", "./config.json", "Config file")
	flag.Parse()
	conf, err := NewConfig(*confFile)
	if err != nil {
		panic(err)
	}

	err = configureLogger(conf)
	if err != nil {
		panic(err)
	}
	apiConf.Login = conf.Login
	apiConf.Password = conf.Password
	apiConf.MaxConn = conf.MaxConn

	s := make(chan os.Signal, 1)
	signal.Notify(s, os.Interrupt, syscall.SIGTERM, syscall.SIGQUIT)
	appCtx, cancel := context.WithCancel(context.Background())

	router := mux.NewRouter()

	wrapped = grpcweb.WrapHandler(router)
	grpcServer := grpc.NewServer()

	service.RegisterEnergyServer(grpcServer, &service.EnergyImpl{
		Api:                 ocapi.NewClient(apiConf),
		DeviceId:            conf.DeviceId,
		OperativeParamCodes: conf.OperativeParams,
	})

	wrappedGrpc := grpcweb.WrapServer(grpcServer)

	reactHandler := ReactHandler{staticPath: "site/static", indexPath: "index.html"}
	router.PathPrefix("/").HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
		if wrappedGrpc.IsGrpcWebRequest(req) {
			wrappedGrpc.ServeHTTP(resp, req)
		} else {
			reactHandler.ServeHTTP(resp, req)
		}
	})
	router.Use(RequestLogger)

	srv := &http.Server{
		Handler: handlers.CompressHandler(router),
		Addr:    fmt.Sprintf(":%d", conf.Port),
		// Disable because of grpc streams fails
		//WriteTimeout: 60 * time.Second,
		//ReadTimeout:  60 * time.Second,
		IdleTimeout: 15 * time.Second,
	}

	go srv.ListenAndServe()

	<-s
	zap.S().Info("Got os.Interrupt signal, shutdown app")
	srv.Shutdown(appCtx)
	cancel()
}

