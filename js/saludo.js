let headerUsuario = document.querySelector(".headerUsuario");
let logout = document.querySelector(".logout");

let datosUsuario = localStorage.getItem("datosGuardados");

if (datosUsuario !== null) {
    let datosUsuarioParseados = JSON.parse(datosUsuario);
    headerUsuario.style.display = "none";

    logout.innerHTML = `
        <p>Bienvenido: ${datosUsuarioParseados.email}</p>
        <button id="botonLogout">Logout</button>
    `;

    let botonLogout = document.querySelector("#botonLogout");

    botonLogout.addEventListener("click", function() {
        localStorage.removeItem("datosGuardados");
        headerUsuario.style.display = "block";
        logout.innerHTML = "";
    });
}