# Ejemplo 4

## Comandos a utilizar
Para iniciar un proyecto utilizando nodejs debemos instalar tanto nodejs como npm. Ademas debemos instalar los siguientes modulos para crear un API REST. Tomar en cuenta que el parametro -g es para instalarlo en el ambiente global de nodejs, pero podemos cambiarlo por --save-dev para instalarlo unicamente en el proyecto actual.

- npm install typescript -g
- npm install express -g
- npm install cors -g
- npm install body-parser -g
- npm install jison -g
- npm install typescript-require

Si la instalacion de alguno da error debemos utilizar permisos de super usuario con sudo. Luego tenemos los comandos para compilar el archivo .jison de la gramatica.

- jison Gramatica.jison

Debido a que estamos utilizando typescript debemos transpilar el archivo a lenguaje javascript por lo cual debemos utilizar los siguientes comandos:

- tsc --init
- tsc --watch

Por ultimo para levantar la API debemos utilizar el comando:

- node app.js
