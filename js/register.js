let formulario = document.querySelector("form");
let nombre = document.querySelector("#fullName").value;
let email = document.querySelector("#email").value;
let telefono = document.querySelector("#phone").value;
let password = document.querySelector("#password").value;
let confirmPassword = document.querySelector("#rePassword").value;
let valores = document.querySelector(".class-form").value;

let errorNombre = document.querySelector(".invalid-feedback fullName");
let errorEmail = document.querySelector(".invalid-feedback email");
let errorTelefono = document.querySelector(".invalid-feedback phone");
let errorPassword = document.querySelector(".invalid-feedback password");
let errorConfirmPassword = document.querySelector(".invalid-feedback rePassword");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
   
    fullNameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    passwordError.innerText = "";
    rePasswordError.innerText = "";

    error = false;


    if (valores == "") {
    }
    if (nombre == "") {
        errorNombre.style.display = "block";
        errorNombre.innerText = "El campo nombre es obligatorio";
        error = true;

    }
    if (email == "") {
        errorEmail.style.display = "block";
        errorEmail.innerText = "El campo email es obligatorio";
        error = true;

    }
    if (telefono == "") {
        errorTelefono.style.display = "block";
        errorTelefono.innerText = "El campo teléfono es obligatorio";
        error = true;
    } else if (telefono.value.length < 8) {
        errorTelefono.style.display = "block";
        errorTelefono.innerText = "El campo teléfono debe tener al menos 8 caracteres";
        error = true;
    }
    if (password == "") {
        errorPassword.style.display = "block";
        errorPassword.innerText = "El campo password es obligatorio";
        error = true;
    } else if (password.value.length <= 3) {
    errorPassword.innerText = "La contraseña debe tener más de 3 caracteres.";
    errorPassword.style.display = "block";
    error = true;
    }

    if (confirmPassword == "") {
        errorConfirmPassword.style.display = "block";
        errorConfirmPassword.innerText = "El campo confirmar password es obligatorio";
        error = true;
    } else if (password.value !== confirmPassword.value) {
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
    let datosJson = JSON.stringify(datos);
    localStorage.setItem("datosGuardados", datosJson);
    formulario.submit();
    }
})
