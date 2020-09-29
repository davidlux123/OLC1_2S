# Como instalar docker
Pasos para la instalacion de docker en manjaro:

- sudo pacman -Syu
- sudo pacman -S docker
- sudo systemctl start docker.service
- sudo systemctl enable docker.service

Si el systemctl lanza un error debemos reiniciar y volver a correr los dos comandos anteriores. Una vez instalado podemos valizar la version instalada.

- sudo docker version
- sudo docker info

Un comando importante para buscar imagenes de contenedores es:

- sudo docker search nombre_imagen_docker

Una vez encontrada la imagen ya sea por consola o buscando en dockerhub, podemos descargarla con el comando:

- sudo docker pull nombre_imagen_docker

Hasta este punto tenemos una imagen de docker descargada en nuestro host, podemos ver las imagenes mediante el comando:

- sudo docker images

# Como levantar contenedores docker

Para levantar contenedores docker es necesario tener la imagen a utilizar descargada para ahorrar tiempo, si la imagen no se encuentra en el repositorio local docker procedera a buscar en dockerhub, descargando la imagen y luego creando el contenedor.

Para este ejemplo en particular estaremos utilizando la imagen de ubuntu. Para crear un contenedor en ubuntu vamos a utilizar el siguiente comando:

- sudo docker run --name nombre_container -it imagen:tag bash

Explicando lo anterior:
1. nombre_container sera el nombre que le queremos dar a nuestro contenedor.
2. imagen:tag sera la imagen y la version de la imagen de docker que usaremos como base.
3. bash esto es necesario, en el caso de las imagenes de linux ya que con este estamos diciendo que se muestre una consola linux para poder interactuar con el contenedor.


Ya reando nuestro contenedores podemos verificar cuales esta corriendo o que se muestren todos:

- sudo docker ps
- sudo docker ps -a

Si apagamos nuestro contenedor podemos iniciarlo nuevamente con el comando:
- sudo docker start nombre_contenedor
- sudo docker attach nombre_contenedor

Para terminar la ejecucion del contenedor utilizamos el comando:

- sudo docker stop nombre_contenedor


# Como eliminar contenedores e imagenes docker
Para eliminar los contemedores podemos utilizar el comando

- sudo docker rm nombre_contenedor
- sudo docker rmi imagen:tag


# Como crear un entorno de trabajo
Trabajar el desarrollo dentro de un contenedor es complicado ya que no tenemos el conjunto de herramientas que utilizamos en nuestro entorno, para ello podemos compartir directorios entre la maquina host y el contenedor.

Para ello debemos agregar el parametro v referente a volumen, es como conectar una usb al puerto para verlo de vorma sencilla.

- sudo docker run -v path_host:path_cont --name nombre_container -it imagen:tag bash


Podemos identificar el puerto que utilizara el contenedor y realizar un mapeo a algun puerto del host. Esto define primero el puerto del host y luego el puerto del contenedor.

- sudo docker run -v path_host:path_cont -p 8080:8000 --name nombre_container -it imagen:tag bash


Ejemplo de como quedaria el comando:

'''
>>> sudo docker run -v /home/hp/Escritorio/app/:/app/ -p 7000:8000 --name ejemplo5_ent -it ubuntu:latest bash
'''

Para terminar, podemos salir del contenedor utilizando el comando exit.


# Uso de Dockerfile para crear imagenes docker
Para crear una imagen docker podemos utilizar un conjunto de instrucciones que se encuentran dentro de un archivo Dockerfile, dentro de el especificamos el conjunto de acciones que quedemos realizar. Una vez realizo dentro de la carpeta que contiene el dockerfile debemos correr el comando:

- sudo docker build -t myimage:v1 .

'''
>>> sudo docker run -p 9000:8000 --name ejemplo5_df -it myimage:v1
'''

# Como instalar golang en Manjaro
Para la instalacion seguir los pasos:
- sudo pacman -Syu
- sudo pacman -S go
- go version