let formulario = document.querySelector("#formRegister");
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;
let confirmPassword = document.querySelector("#rePassword").value;

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

    }
    
    if (password.value == "") {
        errorPassword.style.display = "block";
        errorPassword.innerText = "El campo password es obligatorio";
        error = true;
    } else if (password.value.length <= 5) {
    errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres.";
    errorPassword.style.display = "block";
    error = true;
    }

    if (confirmPassword == "") {
        errorConfirmPassword.style.display = "block";
        errorConfirmPassword.innerText = "El campo confirmar password es obligatorio";
        error = true;
    } else if (password !== confirmPassword) {
    errorConfirmPassword.innerText = "Las contraseñas no coinciden.";
    errorConfirmPassword.style.display = "block";
    error = true;
    }

    if (error == false) {
        let datos = {
            nombre: nombre.value,
            email: email.value,
            telefono: telefono.value,
            password: password.value,
        }
    
    formulario.submit();
    }
})
