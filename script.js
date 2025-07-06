// ☕ Cafe K Cart Script by Jwaria
let cartCount = 0;

// Reset cart on each new page load
localStorage.removeItem("cartCount");

function addToCart(item) {
  cartCount++;
  localStorage.setItem("cartCount", cartCount);
  updateCartDisplay();
  alert(`${item} added to cart! 🛒`);
}

function updateCartDisplay() {
  let cartBadge = document.getElementById("cart-counter");
  if (!cartBadge) {
    cartBadge = document.createElement("div");
    cartBadge.id = "cart-counter";
    document.body.appendChild(cartBadge);
  }
  cartBadge.textContent = `Cart 🛍️: ${cartCount}`;
}

// Initialize display with 0
updateCartDisplay();
