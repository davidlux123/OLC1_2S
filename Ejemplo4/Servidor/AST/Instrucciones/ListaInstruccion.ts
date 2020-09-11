import { Entorno } from "../Entorno/Entorno";
import { Instruccion } from "../Instruccion";

class ListaInstruccion implements Instruccion{

    private lista:Array<Instruccion>;
    private linea:number;

    constructor(lista:Array<Instruccion>,linea:number){
        this.linea = linea;
        this.lista = lista;
    }

    ejecutar(ent:Entorno):Object{
        var salida:String = "";
        var i;
        for (i=0; i<this.lista.length; i++) {
            salida += this.lista[i].ejecutar(ent) + "\n";
        }

        return salida;
    }

    getlinea(): number {
        return this.linea;
    }
}
export{ListaInstruccion};