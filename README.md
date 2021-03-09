This site was wrote for my village in order to other residents may to see mains voltage state. The main idea is to get data from OwenCloud service and show it in simple view without any authorization and other user actions. You can visit this site by this link: https://220.spkvp.ru

This code shows how to use react + go + grpc together. I've used gRPC streams instead of traditional websockets. Also, here i've used builtin HTTP->gRPC proxy to avoid using external proxies, like Envoy.

To build this code from sources you need some tools, like swagger client generator, protobuf generators, npm and etc. Another way to build the site - is to use docker. Just type docker build -t spkvpenergy-img .  && docker run -dt --name spkvpenergy spkvpenergy-img. How to install needed tools you can see in the Dockerfile - there is a couple of simple bash commands.

**Warn!** If you want to proxy requests via nginx - you should turn off proxy buffering. Without this streaming will not work.
