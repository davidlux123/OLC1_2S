const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const ip   = process.env.NODEIP || "182.18.7.7";
const port = process.env.NODEPORT || 3000;

app.get('/getCurso/', function (req, res) {
    console.log("Entro una peticion REST Ejemplo 7");
    res.send(JSON.stringify( {Nombre: "Compiladores 1 seccion A Jueves"} ));
});

app.listen(port,ip, async () => {
    console.log('IP: %s PORT: %d', ip, port);
});