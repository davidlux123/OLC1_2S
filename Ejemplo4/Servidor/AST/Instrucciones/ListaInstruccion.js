"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaInstruccion = void 0;
var ListaInstruccion = /** @class */ (function () {
    function ListaInstruccion(lista, linea) {
        this.linea = linea;
        this.lista = lista;
    }
    ListaInstruccion.prototype.ejecutar = function (ent) {
        var salida = "";
        var i;
        for (i = 0; i < this.lista.length; i++) {
            salida += this.lista[i].ejecutar(ent) + "\n";
        }
        return salida;
    };
    ListaInstruccion.prototype.getlinea = function () {
        return this.linea;
    };
    return ListaInstruccion;
}());
exports.ListaInstruccion = ListaInstruccion;
