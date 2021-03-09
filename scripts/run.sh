#!/bin/sh
cd /opt
while true; do
  if [ "$DEBUG_PORT" = "" ]
  then
    ./spkvpenergy -c config.json
  else
    ./dlv --listen=0.0.0.0:$DEBUG_PORT --headless=true --accept-multiclient --api-version=2 --check-go-version=false exec -- ./spkvpenergy -c conf.json
  fi
  sleep 1
done
