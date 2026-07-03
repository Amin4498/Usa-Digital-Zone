// CART SYSTEM
let cart = [];

function addToCart(){
cart.push("item");
alert("Added to cart!");
console.log(cart);
}

// SEARCH FILTER (basic)
document.addEventListener("input", function(e){
let value = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let text = card.innerText.toLowerCase();
card.style.display = text.includes(value) ? "block" : "none";
});
});
