import { Instruccion } from "../Instruccion";
import { Expresion } from "../Expresion";
import { Entorno } from "../Entorno/Entorno";

class Print implements Instruccion{
    
    private linea:number;
    private exp:Expresion;

    constructor(exp:Expresion,linea:number){
        this.exp=exp;
        this.linea=linea;
    }

    ejecutar(ent:Entorno): Object {
        var exp1 = (this.exp==null)?null:this.exp.operar(ent);

        if(exp1 != null){
            return exp1.toString();
        }

        return "";
    }

    getlinea(): number {
        return this.linea;
    }
}
export{Print};