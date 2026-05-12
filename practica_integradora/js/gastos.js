console.log("Juan")


let respuestaIniciar = confirm("Queres iniciar?")
let integrantes = []

if (respuestaIniciar) {

    let cantidadIntegrantes = Number(prompt("Cuantos integrantes son?"));
    let cantidadMinima = 2
    
    
    if (cantidadIntegrantes > cantidadMinima) {

        for (let i = 1; i <= cantidadIntegrantes; i++) {

            let nombre = prompt("Nombre del integrante {i}?")
            let gastosdelDia = Number(prompt("Gastos del dia de {nombre}?"))

            if (nombre == "" || nombre == null) {
                alert ("Nombre incorrecto")
                window.location.reload()
            }
            
            if (gastosdelDia == "" || gastosdelDia == null) {
                alert ("Gasto incorrecto")
                window.location.reload()
            }

            integrantes.push(nombre = "nombre", gastosdelDia = "gastosdelDia")
        }


        }
        else {
            window.location.reload()
        }

}   

else {
    alert ("Gracias por la visita")
    window.location.href = "https://netflix.com"
}



