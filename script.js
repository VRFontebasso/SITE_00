const products = [
    { id: 1, name: "Produto 1", price: 100, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Produto 2", price: 200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Produto 3", price: 300, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Produto 4", price: 400, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Produto 5", price: 500, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Produto 6", price: 600, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Produto 7", price: 700, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Produto 8", price: 800, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Produto 9", price: 900, image: "https://via.placeholder.com/150" }
];

let cart = [];

function displayProducts(productList) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productContainer.appendChild(productCard);
    });
}

function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        totalPrice += product.price;
    });

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}

function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});
