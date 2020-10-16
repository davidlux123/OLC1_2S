## Volumenes en docker-compose
Para utilizar volumenes en docker-compose, vamos a crear inicialmente una imagen por cada servicio:

```
>>> sudo docker build -t name:tag .
# Ejemplo
>>> sudo docker build -t nodeweb:v1 .
>>> sudo docker build -t goweb:v1 .
```

Luego ejecutaremos el docker-compose con los volumenes definidos, esto agregara el codigo dentro del contenedor unicamente en el instante en el que realicemos el up.

```
>>> sudo docker-compose up -d
>>> sudo docker-compose down
```

Dado que ejecutaremos el docker-compose como un deamon, no podremos observar el log que el contenedor provea, por lo tanto utilizaremos el siguiente comando para que logremos ver el log.

```
>>> sudo docker logs -f container_name
# Ejemplo
>>> sudo docker logs -f nodeserver
>>> sudo docker logs -f goserver
```