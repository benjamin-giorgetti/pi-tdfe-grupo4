let params = new URLSearchParams(window.location.search);
let textoBusqueda = params.get("busqueda") || "";

let tituloResultados = document.querySelector(".seccion h2:first-of-type");
let tituloNoResultados = document.querySelector(".tituloNoResultados");
let contenedorProductos = document.querySelector(".productos");

tituloResultados.textContent = `Se encontraron resultados para: "${textoBusqueda}"`;
tituloNoResultados.textContent = `No se encontraron resultados para: "${textoBusqueda}"`;

tituloResultados.style.display = "none";
tituloNoResultados.style.display = "none";
contenedorProductos.innerHTML = "";

fetch("https://dummyjson.com/products?limit=0")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        let productos = data.products;
        let busquedaLower = textoBusqueda.toLowerCase();

        let resultados = productos.filter(function(p) {
            return (
                p.title.toLowerCase().includes(busquedaLower) ||
                p.description.toLowerCase().includes(busquedaLower) ||
                p.category.toLowerCase().includes(busquedaLower)
            );
        });

        if (resultados.length > 0) {
            tituloResultados.style.display = "block";
            for (let i = 0; i < resultados.length; i++) {
                let producto = resultados[i];
                contenedorProductos.innerHTML += `
                    <article class="producto">
                        <img src="${producto.thumbnail}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p class="precio">$${producto.price}</p>
                        <p>${producto.description}</p>
                        <div class="btnVerMas"><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                    </article>
                `;
            }
        } else {
            tituloNoResultados.style.display = "block";
        }
    });