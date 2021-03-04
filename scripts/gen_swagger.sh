#!/bin/sh
#docker run -it -v ~/documents/0000_Git/0004_Learn/go_react_220_spkvp/src/ru.spkvp.energy/ocapi:/owencloud --name swag swaggerapi/swagger-codegen-cli generate -i /owencloud/api.yaml -o /owencloud/swagger -l go 
#docker rm swag
cd ../ocapi/
~/go/bin/swagger generate client -f api.yaml
cd -
