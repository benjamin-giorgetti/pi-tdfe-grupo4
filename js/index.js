let productosCategoriaUno = document.querySelector(".productosCategoriaUno");
let productosCategoriaDos = document.querySelector(".productosCategoriaDos");

fetch("https://dummyjson.com/products?limit=0")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        let productos = data.products;
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];

            if (producto.category == "mens-watches") {
                productosCategoriaUno.innerHTML += `
                    <article class="producto">
                        <img src="${producto.thumbnail}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p class="precio">$${producto.price}</p>
                        <p>${producto.description}</p>
                        <div class="btnVerMas"><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                    </article>
                `;
            }

            if (producto.category == "womens-watches") {
                productosCategoriaDos.innerHTML += `
                    <article class="producto">
                        <img src="${producto.thumbnail}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                        <p class="precio">$${producto.price}</p>
                        <p>${producto.description}</p>
                        <div class="btnVerMas"><a href="./product.html?id=${producto.id}">Ver detalle</a></div>
                    </article>
                `;
            }
        }
    });
