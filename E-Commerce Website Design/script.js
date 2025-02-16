document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    loadCart();
});

// Product Data
const products = [
    { id: 1, name: "Laptop", price: 800, image: "https://smartbd.com/wp-content/uploads/2024/07/HP-15s-eq2326AU-Laptop.jpg" },
    { id: 2, name: "Phone", price: 500, image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg" },
    { id: 3, name: "Headphones", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0sP0tUUTbMSaDSg-negeqg6jdgDq4XAksA&s" },
    { id: 4, name: "Smartwatch", price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFAaFdQ_LJWXGPCmmcWIwb9gWttMqcR5Twg&s" },
    { id: 5, name: "Camera", price: 600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWe7eU_ZKk1_0eZO6DS6imrgfeaZpGVzXOQ&s" },
    { id: 6, name: "Tablet", price: 400, image: "https://assets.mofoprod.net/network/images/Samsung-GalaxyTablets_ec3qtp_BHsqtaH.width-250.jpg" },
    { id: 7, name: "Gaming Mouse", price: 50, image: "https://www.ultratech.com.bd/image/cache/catalog/products_2024/razer-cobra-pro-wireless-gaming-mouse-1-1000x1000.jpg.webp" },
    { id: 8, name: "Mechanical Keyboard", price: 120, image: "https://vibegaming.com.bd/wp-content/uploads/2023/06/bloody21.webp" },
    { id: 9, name: "Wireless Earbuds", price: 80, image: "https://images-cdn.ubuy.co.in/636e5231bbadec17c37f2dd4-wireless-ear-buds-bluetooth-headphones.jpg" },
    { id: 10, name: "Power Bank", price: 40, image: "https://www.shopz.com.bd/wp-content/uploads/2022/01/Usams-65W-30000mAh-Fast-Charging-Power-Bank.jpg" },
    { id: 11, name: "Bluetooth Speaker", price: 90, image: "https://gadgetnmusic.com/wp-content/uploads/2023/06/Untitled-design-2023-06-03T135643.468.jpg" },
    { id: 12, name: "VR Headset", price: 250, image: "https://i5.walmartimages.com/asr/229e3a4d-a08a-46ac-bccf-a82bddd4eb6d.c1246e6e3fcd20cb82219e58ad694cf0.jpeg" }
];

// Load Products
function loadProducts() {
    let productList = document.getElementById("product-list");
    productList.innerHTML = products.map(product => `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <button class="btn btn-success mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>`).join('');
}

// Cart Functions
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some(item => item.id === productId)) {
        cart.push(products.find(p => p.id === productId));
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    } else {
        alert("Item already in cart");
    }
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Product Search
function searchProducts() {
    let searchText = document.getElementById("search-box").value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    
    let productList = document.getElementById("product-list");
    productList.innerHTML = filteredProducts.map(product => `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top img-fluid" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: $${product.price}</p>
                    <button class="btn btn-success mt-auto" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>`).join('');
}
