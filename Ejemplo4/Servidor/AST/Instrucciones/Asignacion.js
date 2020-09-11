"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
var Asignacion = /** @class */ (function () {
    function Asignacion(id, exp, linea) {
        this.id = id;
        this.exp = exp;
        this.linea = linea;
    }
    Asignacion.prototype.ejecutar = function (ent) {
        var exp1 = (this.exp == null) ? null : this.exp.operar(ent);
        ent.getTabla().setvalor(String(this.id), Object(exp1));
        return "";
    };
    Asignacion.prototype.getlinea = function () {
        return this.linea;
    };
    return Asignacion;
}());
exports.Asignacion = Asignacion;
