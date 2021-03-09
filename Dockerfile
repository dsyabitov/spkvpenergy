FROM golang

COPY  ./ /go/src/github.com/dsyabitov/spkvpenergy/

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
&& apt-get update \
&& apt-get install -y protobuf-compiler nodejs \
&& ln -s /go /root/go \
&& cd /go \
&& go get github.com/go-swagger/go-swagger \
&& cd /go/src/github.com/go-swagger/go-swagger/cmd/swagger \
&& go install \
&& go get google.golang.org/protobuf/cmd/protoc-gen-go google.golang.org/grpc/cmd/protoc-gen-go-grpc \
&& go get github.com/go-delve/delve/cmd/dlv \
&& cp /go/bin/dlv /opt/ \
&& cd ~/go/src/github.com/dsyabitov/spkvpenergy/scripts/js/ \
&& wget https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64 \
&& mv protoc-gen-grpc-web-1.2.1-linux-x86_64 protoc-gen-grpc-web \
&& cd ../ \
&& ./gen_protobuf.sh \
&& ./gen_swagger.sh \
&& cd ../site/ \
&& npm install -u \
&& npm run build:prod \
&& cd ../ \
&& go build \
&& mkdir /opt/site \
&& cp -r site/static /opt/site/ \
&& cp spkvpenergy /opt/ \
&& cp config.json /opt/ \
&& cp scripts/run.sh /opt/ \
&& apt-get clean \
&& rm -fr site/node-modules

ENTRYPOINT ["/opt/run.sh"]
