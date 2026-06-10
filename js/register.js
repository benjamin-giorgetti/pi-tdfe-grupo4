let formulario = document.querySelector("#formRegister");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#rePassword");

let errorEmail = document.querySelector(".email");
let errorPassword = document.querySelector(".password");
let errorConfirmPassword = document.querySelector(".rePassword");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

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
    } else if (password.value.length > 5) {
        errorPassword.style.display = "none";
    }

    if (confirmPassword.value == "") {
        errorConfirmPassword.style.display = "block";
        errorConfirmPassword.innerText = "El campo confirmar password es obligatorio";
        error = true;
    } else if (password.value !== confirmPassword.value) {
        errorConfirmPassword.innerText = "Las contraseñas no coinciden.";
        errorConfirmPassword.style.display = "block";
        error = true;
    } else if (password.value === confirmPassword.value) {
        errorConfirmPassword.style.display = "none";
    }

    if (error == false) {
        let datos = {
            email: email.value,
            password: password.value,
        }
    let datosJson = JSON.stringify(datos);
    localStorage.setItem("datosGuardados", datosJson);
    formulario.submit();
    }
})
