var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Gramatica = require("./Analizador/Gramatica");
import { Response, Request } from "express";
import { Errores } from "./AST/Errores";


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/Calcular/', function (req:Request, res:Response) {

    var entrada = req.body.texto;
    var resultado = parser(entrada);

    if(Errores.verificarerror()){
        resultado = Errores.geterror() + resultado;
    }
    Errores.clear();
    res.send(JSON.stringify({"result":resultado.toString()}));
});


app.listen(8000, function () {
    console.log('Servidor escuchando en puerto 8000');
});


function parser(texto:string) {
    try {
        return Gramatica.parse(texto);
    } catch (e) {
        return e.toString();
    }
}
