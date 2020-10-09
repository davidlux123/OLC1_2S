const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const ip   = process.env.NODEIP || "182.18.7.7";
const port = process.env.NODEPORT || 3000;

app.get('/getCurso/', function (req, res) {
    console.log("Entro una peticion REST");
    res.send(JSON.stringify( {Nombre: "Compiladores 1 seccion A"} ));
});

app.listen(port,ip, () => {
    console.log('IP: %s PORT: %d', ip, port);
});