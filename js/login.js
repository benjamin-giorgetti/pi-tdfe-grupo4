let formulario = document.querySelector("form");
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;


let errorEmail = document.querySelector(".invalid-feedback email");
let errorPassword = document.querySelector(".invalid-feedback password");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
   
    emailError.innerText = "";
    passwordError.innerText = "";

    error = false;


    if (email == "") {
        errorEmail.style.display = "block";
        errorEmail.innerText = "El campo email es obligatorio";
        error = true;

    }
    
    if (password == "") {
        errorPassword.style.display = "block";
        errorPassword.innerText = "El campo password es obligatorio";
        error = true;
    } else if (password.value.length <= 5) {
    errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres.";
    errorPassword.style.display = "block";
    error = true;
    }

    if (error == false) {
        let datos = {
            nombre: nombre.value,
            email: email.value,
            telefono: telefono.value,
            password: password.value,
        }
    let datosJson = JSON.stringify(datos);
    localStorage.setItem("datosGuardados", datosJson);
    formulario.submit();
    }
})
