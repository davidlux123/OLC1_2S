import { Expresion } from "../Expresion";
import { Entorno } from "../Entorno/Entorno";

class Variable implements Expresion{

    private id:Object;
    private linea:number;

    constructor(id:Object,linea:number){
        this.id=id;
        this.linea=linea;
    }

    operar(ent:Entorno):Object{
        var value = ent.getTabla().getvalor(String(this.id));
        return Number(value);
    }

    getlinea():number{
        return this.linea;
    }
}
export{Variable};