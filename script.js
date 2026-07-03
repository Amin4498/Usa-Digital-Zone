let cart = [];

function addToCart(){
cart.push("product");
alert("Product added to cart!");
console.log(cart);
}

// SEARCH FILTER
document.addEventListener("input", function(){
let value = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
let text = card.innerText.toLowerCase();
card.style.display = text.includes(value) ? "block" : "none";
});
});
