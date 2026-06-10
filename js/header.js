let formulario = document.querySelector("#formBusqueda");
let busqueda = document.querySelector("#busqueda");

let errorBusqueda = document.querySelector(".error");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    error = false;

if (busqueda.value == "") {
        errorBusqueda.style.display = "block";
        errorBusqueda.innerText = "El campo búsqueda esta vacio";
        error = true;
    } else if (busqueda.value.length < 3) {
        errorBusqueda.style.display = "block";
        errorBusqueda.innerText = "La búsqueda debe tener al menos 3 caracteres.";
        error = true;
    }
    else if (busqueda.value != "") {
        errorBusqueda.style.display = "none";
    }

    if (error == false) {
    formulario.submit();
    }
})