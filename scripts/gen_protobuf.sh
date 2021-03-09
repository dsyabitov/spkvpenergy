#!/bin/sh
GOPATH=~/go
PATH=$PATH:~/go/bin/
cd ../../
#protoc --proto_path=$GOPATH/src:. --micro_out=../ --go_out=../ service/energy.proto
protoc --go_out=./ --go-grpc_out=./ ./spkvpenergy/service/energy.proto
cd spkvpenergy/scripts/js
./gen.sh
./cp.sh

