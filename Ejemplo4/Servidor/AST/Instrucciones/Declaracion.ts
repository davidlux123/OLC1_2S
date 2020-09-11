import { Instruccion } from "../Instruccion";
import { Expresion } from "../Expresion";
import { Entorno } from "../Entorno/Entorno";
import { Simbolo } from "../Entorno/Simbolo";

class Declaracion implements Instruccion{
    
    private linea:number;
    private id:Object;
    private exp:Expresion;

    constructor(id:Object, exp:Expresion, linea:number){
        this.id=id;
        this.exp=exp;
        this.linea=linea;
    }

    ejecutar(ent:Entorno): Object {
        var exp1 = (this.exp==null)?null:this.exp.operar(ent);
        ent.getTabla().push(new Simbolo(String(this.id),Object(exp1)));
        return "";
    }    

    getlinea(): number {
        return this.linea;
    }
}
export{Declaracion};