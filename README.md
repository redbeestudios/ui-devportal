## Para crear una version de docker

docker build --add-host=nexus.ci.rfsc.cl:172.26.230.184 -t registryrfsc.azurecr.io/ui-landing:{version} .

docker push registryrfsc.azurecr.io/ui-landing:{version}

## Ejecucion

docker run ui-landing:{version}

si estas en la vpn poner --network=host
