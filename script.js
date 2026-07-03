let cart = [];
let wish = [];

// CART
function addCart(name){
cart.push(name);
updateCart();
}

// WISHLIST
function addWish(name){
wish.push(name);
updateWish();
}

function updateCart(){
document.getElementById("cartList").innerHTML =
cart.map(item => `<li>${item}</li>`).join("");
}

function updateWish(){
document.getElementById("wishList").innerHTML =
wish.map(item => `<li>${item}</li>`).join("");
}

// TOGGLES
function toggleCart(){
document.getElementById("cartBox").style.display =
document.getElementById("cartBox").style.display === "block" ? "none" : "block";
}

function toggleWishlist(){
document.getElementById("wishBox").style.display =
document.getElementById("wishBox").style.display === "block" ? "none" : "block";
}

function toggleDark(){
document.body.classList.toggle("dark");
}

function showContact(){
document.getElementById("contactBox").style.display =
document.getElementById("contactBox").style.display === "block" ? "none" : "block";
}

// SEARCH
document.addEventListener("input", function(){
let val = document.getElementById("search").value.toLowerCase();
document.querySelectorAll(".card").forEach(card=>{
card.style.display = card.innerText.toLowerCase().includes(val) ? "block" : "none";
});
});

// MOBILE MENU (simple)
function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}
