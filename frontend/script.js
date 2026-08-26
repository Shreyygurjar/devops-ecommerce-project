const productsContainer = document.querySelector(".products");
const cartCount = document.getElementById("cart-count");
const backendTest = document.getElementById("backend-test");
const backendResult = document.getElementById("backend-result");
const viewCart = document.getElementById("view-cart");
const cartItems = document.getElementById("cart-items");
let cart = [];
viewCart.addEventListener("click", function() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.textContent = "Your cart is empty.";
        return;
    }

    cart.forEach(function(product) {

        const item = document.createElement("p");

        item.textContent = `${product.name} - ₹${product.price}`;

        cartItems.appendChild(item);
    });
});

// Test backend connection
backendTest.addEventListener("click", function() {
    fetch("http://127.0.0.1:5000/api/health")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            backendResult.textContent = data;
        })
        .catch(function() {
            backendResult.textContent = "Backend connection failed.";
        });
});


// Load products from backend
fetch("http://127.0.0.1:5000/api/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {

        productsContainer.innerHTML = "";

        products.forEach(function(product) {

            const productCard = document.createElement("div");

            productCard.classList.add("product");

            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <p>${product.description}</p>
                <button>Add to Cart</button>
            `;

            productsContainer.appendChild(productCard);

            const button = productCard.querySelector("button");

            button.addEventListener("click", function() {
                cart.push(product);
                cartCount.textContent = cart.length;
            });

        });

    })
    .catch(function(error) {
        console.error("Error loading products:", error);
    });