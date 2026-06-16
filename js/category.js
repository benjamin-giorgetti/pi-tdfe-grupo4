let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");

let categoriaTitulo = document.querySelector(".categoriaTitulo");
let productosCategoria = document.querySelector(".productosCategoria");

if (categoria == null) {
    categoriaTitulo.innerHTML = "Seleccioná una categoría";
    productosCategoria.innerHTML = "<p>Elegí una categoría del menú para ver sus productos.</p>";
} else {
    categoriaTitulo.innerHTML = categoria;

    fetch("https://dummyjson.com/products?limit=0")
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {
            let productos = data.products;
            let cantidadProductos = 0;

            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];

                if (producto.category == categoria) {
                    productosCategoria.innerHTML += `
                        <article class="producto">
                            <img src="${producto.thumbnail}" alt="${producto.title}">
                            <h3>${producto.title}</h3>
                            <p class="precio">$${producto.price}</p>
                            <p>${producto.description}</p>
                            <div class="btnVerMas"><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                        </article>
                    `;

                    cantidadProductos++;
                }
            }

            if (cantidadProductos == 0) {
                productosCategoria.innerHTML = "<p>No hay productos para la categoría seleccionada.</p>";
            }
        });
}
