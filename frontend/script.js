const buttons = document.querySelectorAll(".product button");
const cartCount = document.getElementById("cart-count");

let count = 0;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        count++;
        cartCount.textContent = count;
    });
});