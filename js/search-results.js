let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let textoBusqueda = queryStringObj.get("busqueda");

let tituloResultados = document.querySelector(".tituloResultados");
let tituloNoResultados = document.querySelector(".tituloNoResultados");
let contenedorProductos = document.querySelector(".productos");

tituloResultados.style.display = "none";
tituloNoResultados.style.display = "none";
contenedorProductos.innerHTML = "";

fetch("https://dummyjson.com/products/search?q=" + textoBusqueda)
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {

        if (textoBusqueda && data.products.length > 0) {

            tituloResultados.style.display = "block";
            tituloResultados.innerText = "Se encontraron resultados para: " + textoBusqueda;

        } else if (textoBusqueda && data.products.length === 0) {

            tituloNoResultados.style.display = "block";
            tituloNoResultados.innerText = "No se encontraron resultados para: " + textoBusqueda;

        } else {

            tituloResultados.innerText = "";
        }

        let productosHTML = "";

        for (let i = 0; i < data.products.length; i++) {

            let producto = data.products[i];

            productosHTML += `
                <article class="producto">
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <h3>${producto.title}</h3>
                    <p class="precio">$${producto.price}</p>
                    <p>${producto.description}</p>
                    <div class="btnVerMas">
                        <a href="./product.html?id=${producto.id}">Ver detalle</a>
                    </div>
                </article>
            `;
        }

        contenedorProductos.innerHTML = productosHTML;
    })
    .catch(function(error) {
        console.log(error);
    });