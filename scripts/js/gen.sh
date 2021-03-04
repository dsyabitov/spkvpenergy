#!/bin/sh
PATH=$PATH:./ protoc --proto_path=../../service --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./ energy.proto
