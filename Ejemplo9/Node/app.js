var express = require('express');
var app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const ip   = process.env.NODEIP || "182.18.7.7";
const port = process.env.NODEPORT || 3000;

app.post('/Curso/', function (req, res) {
    console.log("Entro una peticion REST Ejemplo 9");
    res.send(JSON.stringify( {Saludo: "Bienvenidos a " + req.body.Nombre.toString()} ));
});

app.listen(port,ip, async () => {
    console.log('IP: %s PORT: %d', ip, port);
});