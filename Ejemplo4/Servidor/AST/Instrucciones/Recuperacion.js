"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recuperacion = void 0;
var Errores_1 = require("../Errores");
var NodoError_1 = require("../NodoError");
var Recuperacion = /** @class */ (function () {
    function Recuperacion(linea) {
        this.linea = linea;
    }
    Recuperacion.prototype.ejecutar = function (ent) {
        Errores_1.Errores.add(new NodoError_1.NodoError("Sintactico", "Se detecto error en una instruccion.", this.linea));
        return "";
    };
    Recuperacion.prototype.getlinea = function () {
        return this.linea;
    };
    return Recuperacion;
}());
exports.Recuperacion = Recuperacion;
