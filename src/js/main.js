var addToCart = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

function confirmationAddToCart() {
  confirmation.classList.add("is-active");
  setTimeout(function () {
    confirmation.classList.remove("is-active");
  }, 2000);
}

addToCart.forEach(function (button) {
  button.addEventListener("click", confirmationAddToCart);
});
