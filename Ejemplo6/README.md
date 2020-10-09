## Uso de los Dockerfile
Primero debemos construir nuestra imagenes docker con lo necesario para que posteriormente funcionen, para ello vamos a realizar lo siguiente:

```
>>> cd FrontendContainer
>>> sudo docker build -t goweb:v1 .

>>> cd BackendContainer
>>> sudo docker build -t nodeweb:v1 .
```

## Uso de docker-compose
Una vez creadas las imagenes de docker ya configuradas vamos a levantar una red de contenedores con los servicios descritos de la siguiente manera:

```
>>> cd Ejemplo6
>>> sudo docker-compose up
```

## Uso de network
Para ver las redes que hemos creado en docker podemos utilizar el comando:

```
>>> sudo docker network ls
>>> sudo docker network rm net_id
```

## Aceder a un contenedor corriendo

```
>>> sudo docker exec -it container_name bash
>>> sudo docker exec -it container_name sh
```