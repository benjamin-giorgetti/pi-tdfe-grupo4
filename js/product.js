let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let imagenProducto = document.querySelector(".productoDetalleImg");
let nombreProducto = document.querySelector(".productoDetalleNombre");
let marcaProducto = document.querySelector(".productoMarca");
let categoriaProducto = document.querySelector(".productoCategoria");
let precioProducto = document.querySelector(".precio");
let stockProducto = document.querySelector(".productoStock");
let descripcionProducto = document.querySelector(".productoDescripcion");
let tagsProducto = document.querySelector(".productoTags");
let reviewsLista = document.querySelector(".reviewsLista");

fetch("https://dummyjson.com/products?limit=0")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        let productos = data.products;
        let productoEncontrado = false;

        for (let i = 0; i < productos.length && productoEncontrado == false; i++) {
            let producto = productos[i];

            if (producto.id == id && (producto.category == "mens-watches" || producto.category == "womens-watches")) {
                productoEncontrado = true;

                imagenProducto.src = producto.thumbnail;
                imagenProducto.alt = producto.title;
                nombreProducto.innerHTML = producto.title;

                if (producto.brand == undefined) {
                    marcaProducto.innerHTML = "Marca: Sin marca";
                } else {
                    marcaProducto.innerHTML = "Marca: " + producto.brand;
                }

                categoriaProducto.innerHTML = 'Categoría: <a href="./category.html?category=' + producto.category + '">' + producto.category + '</a>';
                precioProducto.innerHTML = "$" + producto.price;
                stockProducto.innerHTML = "Stock: " + producto.stock + " unidades";
                descripcionProducto.innerHTML = producto.description;

                tagsProducto.innerHTML = "";

                for (let j = 0; j < producto.tags.length && j < 3; j++) {
                    tagsProducto.innerHTML += `
                        <li class="productoTag">${producto.tags[j]}</li>
                    `;
                }

                reviewsLista.innerHTML = "";

                for (let k = 0; k < producto.reviews.length; k++) {
                    let review = producto.reviews[k];

                    reviewsLista.innerHTML += `
                        <article class="review">
                            <p class="reviewUsuario">${review.reviewerName}</p>
                            <p class="reviewRating">Rating: ${review.rating}</p>
                            <p class="reviewTexto">${review.comment}</p>
                            <p class="reviewFecha">${review.date}</p>
                        </article>
                    `;
                }
            }
        }

        if (productoEncontrado == false) {
            nombreProducto.innerHTML = "Producto no encontrado";
            marcaProducto.innerHTML = "";
            categoriaProducto.innerHTML = "";
            precioProducto.innerHTML = "";
            stockProducto.innerHTML = "";
            descripcionProducto.innerHTML = "No hay datos para el producto seleccionado.";
            tagsProducto.innerHTML = "";
            reviewsLista.innerHTML = "";
        }
    });
