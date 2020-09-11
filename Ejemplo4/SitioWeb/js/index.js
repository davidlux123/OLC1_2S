
function operar(){
    var operacion = document.getElementById("Operacion").value;

    var data = {
        "texto": operacion
    }

    fetch("http://localhost:8000/Calcular/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"  }
        }).then(res => res.json())
        .catch(error => console.log(error))
        .then(response => resultado(response));
}


function resultado(response){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Salida: \r\n" + response.result.replace(/\n/g, "\r\n");
}
