let formularioHeader = document.querySelector("#formBusqueda");
let busqueda = document.querySelector("#busqueda");

let errorBusqueda = document.querySelector(".error");


formularioHeader.addEventListener("submit", function (event) {
    event.preventDefault();

    error2 = false;

if (busqueda.value == "") {
        errorBusqueda.style.display = "block";
        errorBusqueda.innerText = "El campo búsqueda esta vacio";
        error2 = true;
    } else if (busqueda.value.length < 3) {
        errorBusqueda.style.display = "block";
        errorBusqueda.innerText = "La búsqueda debe tener al menos 3 caracteres.";
        error2 = true;
    }
    else if (busqueda.value != "") {
        errorBusqueda.style.display = "none";
        error2 = false;
    }

    if (error2 == false) {
    formularioHeader.submit();
    }
})