let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartContainer");
let template = document.getElementById("cartTemplate");
    cart.forEach((product ,index) => {
    let card = template.content.cloneNode(true);
    card.querySelector(".cart-img").src = product.thumbnail;
    card.querySelector(".cart-name").textContent = product.title;
    card.querySelector(".cart-brand").textContent = product.brand;
    card.querySelector(".cart-rating").textContent = "⭐ " + product.rating;
    card.querySelector(".cart-price").textContent = "$" + product.price;
    let removeBtn = card.querySelector(".remove-cart");
        removeBtn.addEventListener("click", function () {
         cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
});
    container.appendChild(card);
});

