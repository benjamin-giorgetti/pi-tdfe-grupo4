let formulario = document.querySelector("#formLogin");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


let errorEmail = document.querySelector(".email");
let errorPassword = document.querySelector(".password");


formulario.addEventListener("submit", function(e) {
    e.preventDefault();

   

    error = false;


    if (email.value == "") {
        errorEmail.style.display = "block";
        errorEmail.innerText = "El campo email es obligatorio";
        error = true;
    } else if (email.value != "") {
        errorEmail.style.display = "none";
    }

    if (password.value == "") {
        errorPassword.style.display = "block";
        errorPassword.innerText = "El campo password es obligatorio";
        error = true;
    } else if (password.value.length <= 5) {
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres.";
        errorPassword.style.display = "block";
        error = true;
    } else if (password.value.length >= 6) {
        errorPassword.style.display = "none";
    }

    if (error == false) {
        let datos = {
            email: email.value,
        }
    let datosJson = JSON.stringify(datos);
    localStorage.setItem("datosGuardados", datosJson);
    formulario.submit();
    }
})
