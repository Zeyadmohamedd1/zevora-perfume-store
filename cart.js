let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cartCount").textContent = cart.length;
let container = document.getElementById("cartContainer");
let template = document.getElementById("cartTemplate");
let total=0
    cart.forEach((product ,index) => {
    let card = template.content.cloneNode(true);
    card.querySelector(".cart-img").src = product.thumbnail;
    card.querySelector(".cart-name").textContent = product.title;
    card.querySelector(".cart-brand").textContent = product.brand;
    card.querySelector(".cart-rating").textContent = "⭐ " + product.rating;
    card.querySelector(".cart-price").textContent = "$" + product.price;
    total += product.price;
    let removeBtn = card.querySelector(".remove-cart");
        removeBtn.addEventListener("click", function () {
         cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
});
    container.appendChild(card);
});

let offerMessage = document.getElementById("offerMessage");
let subTotal = document.getElementById("subTotal");
let discountElement = document.getElementById("discount");
let totalPrice = document.getElementById("totalPrice");
let discount = 0;

if (total > 500) {
    discount = total * 0.10;
    offerMessage.classList.remove("d-none");
} else {
    offerMessage.classList.add("d-none");
}
let finalTotal = total - discount;
subTotal.textContent = total.toFixed(2);
discountElement.textContent = discount.toFixed(2);
totalPrice.textContent = finalTotal.toFixed(2);
// tost
let toastElement = document.getElementById("offerToast");
let toast = new bootstrap.Toast(toastElement);
toast.show();

// empty
let emptyCart = document.getElementById("emptyCart");
if (cart.length === 0) {
    emptyCart.classList.remove("d-none");
}

let cartSummary = document.getElementById("cartSummary");
if (cart.length === 0) {
    emptyCart.classList.remove("d-none");
    cartSummary.classList.add("d-none");

}