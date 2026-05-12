console.log("Juan")


let respuestaIniciar = confirm("Queres iniciar?")
let integrantes = []

if (respuestaIniciar) {

    let cantidadIntegrantes = Number(prompt("Cuantos integrantes son?"));
    let cantidadMinima = 2
    
    
    if (cantidadIntegrantes > cantidadMinima) {

        for (let i = 1; i <= cantidadIntegrantes; i++) {

            let nombre = prompt("Nombre del integrante " + i + "?")
            let gastosdelDia = Number(prompt("Gastos del dia de " + nombre + "?"))

            if (nombre == "" || nombre == null) {
                alert ("Nombre incorrecto")
                window.location.reload()
            }
            
            if (gastosdelDia == "" || gastosdelDia == null) {
                alert ("Gasto incorrecto")
                window.location.reload()
            }

            integrantes.push({ nombre, gastosdelDia })
            
        }
        let sumaGastos = 0
        for (let i = 0; i < integrantes.length; i++) {
            sumaGastos += integrantes[i].gastosdelDia
        }

        let promedio = sumaGastos / cantidadIntegrantes
        if (sumaGastos > 1000) {
                alert ("Debemos pedir un préstamo")
            }

            console.log(promedio)
            if (promedio < 500) {
                alert ("Festejamos")
            }
        console.log(integrantes)

        }
        else {
            window.location.reload()
        }

}   


else {
    alert ("Gracias por la visita")
    window.location.href = "https://netflix.com"
}



