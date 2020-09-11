"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Gramatica = require("./Analizador/Gramatica");
var Errores_1 = require("./AST/Errores");
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/Calcular/', function (req, res) {
    var entrada = req.body.texto;
    var resultado = parser(entrada);
    if (Errores_1.Errores.verificarerror()) {
        resultado = Errores_1.Errores.geterror() + resultado;
    }
    Errores_1.Errores.clear();
    res.send(JSON.stringify({ "result": resultado.toString() }));
});
app.listen(8000, function () {
    console.log('Servidor escuchando en puerto 8000');
});
function parser(texto) {
    try {
        return Gramatica.parse(texto);
    }
    catch (e) {
        return e.toString();
    }
}
