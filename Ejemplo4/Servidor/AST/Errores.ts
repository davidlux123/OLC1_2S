import { NodoError } from "./NodoError";

class Errores extends Array<NodoError>{

    constructor(){
        super();
    }

    public static add(err:NodoError){
        this.prototype.push(err);
    }

    public static verificarerror():boolean{
        if(this.prototype.length>0){
            return true;
        }
        return false;
    }

    public static geterror():string{
        var cad:string="";

        for(var i=0; i<this.prototype.length;i++){
            cad += "Tipo: " + this.prototype[i].gettipo() + " ";
            cad += "Descripcion: " + this.prototype[i].getdescripcion() + " ";
            cad += "Linea: " + this.prototype[i].getlinea() + "\n";
        }
        return cad;
    }

    public static clear(){
        while(this.prototype.length>0){
            this.prototype.pop();
        }
    }
}
export{Errores};