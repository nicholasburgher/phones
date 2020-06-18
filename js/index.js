//alert("this is a test");
var deviceGrid = document.querySelector(".device-grid");
function flip(targetID) {
  var cards = document.querySelectorAll(".device-grid .card");
  cards[targetID].classList.toggle("flipped");
  deviceGrid.classList.toggle("off");
}

window.onload = function() {
  document.querySelector(".container-fluid").classList.add("show");
}

function validateForm(form) {
  console.log(form);
  var color = document.forms[form]["colors"].value;
  var capacity = document.forms[form]["capacity"].value;
  var carrier = document.forms[form]["carrier"].value;
  if (color == "") {
    alert("You must select a color");
    return false;
  }
  if (capacity == "") {
    alert("You must select a capacity");
    return false;
  }
  if (carrier == "") {
    alert("You must select a carrier");
    return false;
  }
  document.forms[form].setAttribute("action","index.html?color=" + color + "&capacity=" + capacity + "&carrier=" + carrier );
}
