import { Expresion } from "../Expresion";
import { Instruccion } from "../Instruccion";
import { Entorno } from "../Entorno/Entorno";

class Asignacion implements Instruccion{
    
    private linea:number;
    private id:Object;
    private exp:Expresion;

    constructor(id:Object,exp:Expresion,linea:number){
        this.id=id;
        this.exp=exp;
        this.linea=linea;
    }

    ejecutar(ent:Entorno):Object{
        var exp1 = (this.exp==null)?null:this.exp.operar(ent);
        ent.getTabla().setvalor(String(this.id),Object(exp1));
        return "";
    }

    getlinea(): number {
        return this.linea;
    }
}
export{Asignacion};