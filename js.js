 fetch("https://dummyjson.com/products/category/fragrances")
        .then(response => response.json())
        .then(data => {

        let perfumes = data.products;
        let cards = document.querySelectorAll(".product-card");

        for (let i = 0; i < perfumes.length && i < cards.length; i++) {

            cards[i].querySelector(".product-img").src =
                perfumes[i].thumbnail;

            cards[i].querySelector(".product-name").textContent =
                perfumes[i].title;

            cards[i].querySelector(".product-brand").textContent =
                perfumes[i].brand;

            cards[i].querySelector(".product-rating").textContent =
                "⭐ " + perfumes[i].rating;
            cards[i].querySelector(".product-price").textContent =
                 "$"+perfumes[i].price;
            cards[i].querySelector(".show-details").href =
            "product.html?id=" + perfumes[i].id;     
        }
        
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        document.getElementById("cartCount").textContent = cart.length;
            let buttons = document.querySelectorAll(".add-cart");
            buttons.forEach((button, i) => {
                button.addEventListener("click", function () {
                    cart.push(perfumes[i]);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    document.getElementById("cartCount").textContent = cart.length;
                });

            });

    })
    .catch(error => {
        console.log(error);
 });




let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i]
            .querySelector(".product-name")
            .textContent
            .toLowerCase();

        if (name.includes(searchValue)) {
            cards[i].style.display = "block";
        }
        else {
            cards[i].style.display = "none";
        }
    }
});