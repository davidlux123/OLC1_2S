import { Instruccion } from "../Instruccion";
import { Entorno } from "../Entorno/Entorno";
import { Errores } from "../Errores";
import { NodoError } from "../NodoError";

class Recuperacion implements Instruccion{
    
    private linea:number;

    constructor(linea:number){
        this.linea=linea;
    }

    ejecutar(ent:Entorno): Object {
        Errores.add(new NodoError("Sintactico","Se detecto error en una instruccion.",this.linea));
        return "";
    }    

    getlinea(): number {
        return this.linea;
    }
}
export{Recuperacion};