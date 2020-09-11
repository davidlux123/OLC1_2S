"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
var Print = /** @class */ (function () {
    function Print(exp, linea) {
        this.exp = exp;
        this.linea = linea;
    }
    Print.prototype.ejecutar = function (ent) {
        var exp1 = (this.exp == null) ? null : this.exp.operar(ent);
        if (exp1 != null) {
            return exp1.toString();
        }
        return "";
    };
    Print.prototype.getlinea = function () {
        return this.linea;
    };
    return Print;
}());
exports.Print = Print;
