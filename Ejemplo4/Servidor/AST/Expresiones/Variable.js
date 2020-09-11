"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = void 0;
var Variable = /** @class */ (function () {
    function Variable(id, linea) {
        this.id = id;
        this.linea = linea;
    }
    Variable.prototype.operar = function (ent) {
        var value = ent.getTabla().getvalor(String(this.id));
        return Number(value);
    };
    Variable.prototype.getlinea = function () {
        return this.linea;
    };
    return Variable;
}());
exports.Variable = Variable;
