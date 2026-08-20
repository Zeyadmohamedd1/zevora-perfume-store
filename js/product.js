let params = new URLSearchParams(window.location.search);
let id = params.get("id");

fetch("https://dummyjson.com/products/" + id)
    .then(response => response.json())
    .then(product => {

        document.getElementById("productImage").src = product.thumbnail;

        document.getElementById("productName").textContent = product.title;

        document.getElementById("productBrand").textContent = product.brand;

        document.getElementById("productDescription").textContent =
            product.description;

        document.getElementById("productRating").textContent =
            "⭐ " + product.rating;

        document.getElementById("productPrice").textContent =
            "$" + product.price;


        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        document.getElementById("cartCount").textContent = cart.length;
        let button = document.querySelector(".add-cart");

        button.addEventListener("click", function () {

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));
            document.getElementById("cartCount").textContent = cart.length;

        });

    })

    .catch(error => {
        console.log(error);
    });