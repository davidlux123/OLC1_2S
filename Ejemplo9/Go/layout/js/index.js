
function obtenerSaludo(){
    var curso = document.getElementById("curso").value;

    fetch('../getInfo', {
        method: 'POST',
        body: JSON.stringify({"Nombre":curso}),
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => view(response));
}

function view(response){
    document.getElementById("saludo").innerHTML = response.Saludo;
    document.getElementById("curso").value = '';
}