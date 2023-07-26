let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const totalAmount = document.getElementById('totalAmount');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartItems.appendChild(listItem);
  });
  totalAmount.textContent = total;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}
