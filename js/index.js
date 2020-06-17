//alert("this is a test");
var deviceGrid = document.querySelector(".device-grid");
function flip(targetID) {
  var cards = document.querySelectorAll(".device-grid .card");
  cards[targetID].classList.toggle("flipped");
  deviceGrid.classList.toggle("off");
}
