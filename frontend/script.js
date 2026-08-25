const buttons = document.querySelectorAll(".product button");
const cartCount = document.getElementById("cart-count");
const backendTest = document.getElementById("backend-test");
const backendResult = document.getElementById("backend-result");

let count = 0;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        count++;
        cartCount.textContent = count;
    });
});

backendTest.addEventListener("click", function() {
    fetch("http://127.0.0.1:5000/api/health")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            backendResult.textContent = data;
        })
        .catch(function(error) {
            backendResult.textContent = "Backend connection failed.";
        });
});