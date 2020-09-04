
function operar(){
    var operacion = document.getElementById("Operacion").value;

    var data = {
        "operacion": operacion
    }

    fetch("http://localhost:8000/Calcular/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"  }
        }).then(res => res.json())
        .catch(error => resultado(error))
        .then(response => resultado(response));
}


function resultado(response){
    var operacion = document.getElementById("Operacion");
    var resultado = document.getElementById("resultado");

    operacion.innerText = "";
    resultado.innerText = "El resultado es: " + response;
}
