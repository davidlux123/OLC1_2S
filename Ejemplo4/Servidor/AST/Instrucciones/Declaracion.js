"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
var Simbolo_1 = require("../Entorno/Simbolo");
var Declaracion = /** @class */ (function () {
    function Declaracion(id, exp, linea) {
        this.id = id;
        this.exp = exp;
        this.linea = linea;
    }
    Declaracion.prototype.ejecutar = function (ent) {
        var exp1 = (this.exp == null) ? null : this.exp.operar(ent);
        ent.getTabla().push(new Simbolo_1.Simbolo(String(this.id), Object(exp1)));
        return "";
    };
    Declaracion.prototype.getlinea = function () {
        return this.linea;
    };
    return Declaracion;
}());
exports.Declaracion = Declaracion;
