//device factory
function Device (brand, name, capacities, prices, colors, sizeClass, imgSrc, submitGTMTag) {
  this.brand = brand;
  this.name = name;
  this.capacities = capacities;
  this.prices = prices;
  this.colors = colors;
  this.sizeClass = sizeClass;
  this.imgSrc = imgSrc;
  this.submitGTMTag = submitGTMTag;
}

//Create New Devices
var devices = [];

//example device creation
//var device0 = new Device("Google", "Pixel 4", [64, 128], [249, 350], ["white", "black", "red"], "small", "https://static.toiimg.com/thumb/msid-69219502,width-220,resizemode-4,imgv-5/Google-Pixel-4-XL.jpg", "GP4");

var device1 = new Device("Google", "Pixel 4", [64], [999], ["black"], "small", "images/devices/Pixel4.png", "GP4");
devices.push(device1);
var device2 = new Device("Samsung", "Galaxy A20", [32], [349], ["black"], "large", "images/devices/GalaxyA20.png", "SGA20");
devices.push(device2);
var device3 = new Device("Samsung", "Galaxy A01", [16], [249], ["black", "red", "blue"], "small", "images/devices/GalaxyA01.png", "SGA01");
devices.push(device3);
var device4 = new Device("Nick's Brand","Super Phone",[8, 256],[100,699],["white","black"],"large","images/devices/demo.png","demo");
devices.push(device4);

//load page content

function loadPage() {
  console.log("running loader");
  var deviceGrid = document.querySelector(".device-grid");
  for (var i = 0; i < devices.length; i++) {
    var cardDivElem = document.createElement("div");
    cardDivElem.setAttribute("class","card d-flex flex-row align-items-center");
    var imgColElem = document.createElement("div");
    imgColElem.setAttribute("class","col-5 p-0 img-column");
    var imgElem = document.createElement("img");
    imgElem.src = devices[i].imgSrc;
    imgElem.setAttribute("alt",devices[i].name);
    imgElem.classList.add("card-img");
    imgColElem.appendChild(imgElem);
    cardDivElem.appendChild(imgColElem);
    var contentColElem = document.createElement("div");
    contentColElem.classList.add("col");
    var contentBodyElem = document.createElement("div");
    contentBodyElem.setAttribute("class","card-body text-left p-0");
    var brandElem = document.createElement("p");
    brandElem.classList.add("card-subhead");
    brandElem.innerText = devices[i].brand;
    contentBodyElem.appendChild(brandElem);
    var titleElem = document.createElement("h5");
    titleElem.classList.add("card-title");
    titleElem.innerText = devices[i].name;
    contentBodyElem.appendChild(titleElem);
    var sizeClassElem = document.createElement("span");
    sizeClassElem.setAttribute("class","ml-1 badge badge-pill badge-primary");
    sizeClassElem.innerText = devices[i].sizeClass;
    contentBodyElem.appendChild(sizeClassElem);
    var priceElem = document.createElement("p");
    priceElem.classList.add("card-price");
    priceElem.innerText = "Starting $" + Math.ceil(devices[i].prices[0]/12);
    contentBodyElem.appendChild(priceElem);
    //card text script can go here <div class="card-text"></div>
    var subTextElem = document.createElement("div");
    subTextElem.classList.add("card-subtext");
    var subTextDivElem = document.createElement("div");
    subTextDivElem.innerText = "Includes 1yr Subscription to WiseOS / a $99 value";
    subTextElem.appendChild(subTextDivElem);
    contentBodyElem.appendChild(subTextElem);
    var btnElem = document.createElement("button");
    btnElem.setAttribute("class","btn btn-sm btn-primary btn-block");
    btnElem.setAttribute("onclick","loadModal('" + i + "');");
    btnElem.setAttribute("data-toggle","modal");
    btnElem.setAttribute("data-target","#deviceModal1");
    btnElem.setAttribute("data-backdrop","static");
    btnElem.setAttribute("data-keyboard","false");
    btnElem.innerText = "Select";
    contentBodyElem.appendChild(btnElem);
    contentColElem.appendChild(contentBodyElem);
    cardDivElem.appendChild(contentColElem);
    var dgLength = deviceGrid.childNodes.length;
    console.log("device grid length=" + dgLength);
    deviceGrid.insertBefore(cardDivElem, deviceGrid.childNodes[dgLength - 7]);
  }
};

//fade in
window.onload = function() {
  console.log("adding show");
  document.querySelector(".container-fluid").classList.add("show");
  loadPage();
};

//Flip Function CODE
var deviceGrid = document.querySelector(".device-grid");

function flip(targetID) {
  var cards = document.querySelectorAll(".device-grid .card");
  var images = document.querySelectorAll(".device-grid .img-column img");
  cards[targetID].classList.toggle("flipped");
  images[targetID].classList.toggle("flipped");
  deviceGrid.classList.toggle("off");
  setTimeout(function(){document.querySelector("#deviceModal1 .card-img").classList.toggle("off");}, 500);
}

//load modal CODE
function loadModal(i) {
  flip(i);
  //name and images
  document.querySelector("#deviceModal1 .modal-title h3").innerText = devices[i].brand + " " + devices[i].name;
  document.querySelector("#deviceModal1 #deviceName").value = devices[i].name;
  document.querySelector("#deviceModal1 .card-img").src = devices[i].imgSrc;
  //build color options
  var colorOptions = document.querySelector("#deviceModal1 .color-options");
  colorOptions.innerHTML = "";
  for (var j = 0; j < devices[i].colors.length; j++) {
    var currentColor = devices[i].colors[j];
    var divElem = document.createElement("div");
    divElem.classList.add("col");
    var inputElem = document.createElement("input");
    inputElem.classList.add("form-check-input");
    inputElem.setAttribute("type","radio");
    inputElem.setAttribute("name","colors");
    inputElem.setAttribute("id","colors" + currentColor.charAt(0).toUpperCase() + currentColor.slice(1));
    inputElem.value = currentColor;
    divElem.appendChild(inputElem);
    var labelElem = document.createElement("label");
    labelElem.classList.add("form-check-label");
    labelElem.setAttribute("for","colors" + currentColor.charAt(0).toUpperCase() + currentColor.slice(1));
    labelElem.innerText = currentColor;
    divElem.appendChild(labelElem);
    colorOptions.appendChild(divElem);
  }
  //build capacity Options
  var capacityOptions = document.querySelector("#deviceModal1 .capacity-options");
  capacityOptions.innerHTML = "";
  for (var j = 0; j < devices[i].capacities.length; j++) {
    var currentCapacity = devices[i].capacities[j];
    var currentPrice = devices[i].prices[j];
    var divElem = document.createElement("div");
    divElem.classList.add("col");
    var inputElem = document.createElement("input");
    inputElem.classList.add("form-check-input");
    inputElem.setAttribute("type","radio");
    inputElem.setAttribute("name","capacity");
    inputElem.setAttribute("id","gb" + currentCapacity);
    inputElem.value = currentCapacity + " GB";
    if (j == 0) {
      inputElem.checked = true;
    }
    divElem.appendChild(inputElem);
    var labelElem = document.createElement("label");
    labelElem.classList.add("form-check-label");
    labelElem.setAttribute("for","gb" + currentCapacity);
    labelElem.setAttribute("onclick","updatePaymentText('" + currentPrice + "');");
    var capacityLabel = document.createElement("div");
    capacityLabel.classList.add("capacity-size");
    capacityLabel.innerText = currentCapacity;
    labelElem.appendChild(capacityLabel);
    var priceLabel = document.createElement("div");
    priceLabel.classList.add("capacity-price");
    priceLabel.innerText = "$" + currentPrice;
    labelElem.appendChild(priceLabel);
    divElem.appendChild(labelElem);
    capacityOptions.appendChild(divElem);
  }
  //build payment Options
  var plans = document.querySelectorAll("#deviceModal1 .plan-options .plan-price");
  var installmentPrice = plans[0];
  var upFrontPrice = plans[1];
  installmentPrice.innerText = "$" + Math.ceil(devices[i].prices[0]/12) + " for 12 months";
  upFrontPrice.innerText = "Pay once $" + devices[i].prices[0];
  //update GTM tag
  var continueButton = document.querySelector("#deviceModal1 .modal-footer input[type='submit']");
  continueButton.setAttribute("id","submit" + devices[i].submitGTMTag);

  document.querySelector("#deviceModal1 button.close").setAttribute("onclick","flip('" + i + "');");
}

//update payment options subText
function updatePaymentText(price) {
  var plans = document.querySelectorAll("#deviceModal1 .plan-options .plan-price");
  var installmentPrice = plans[0];
  var upFrontPrice = plans[1];
  installmentPrice.innerText = "$" + Math.ceil(price/12) + " for 12 months";
  upFrontPrice.innerText = "Pay once $" + price;
}

//form validation CODE
function validateForm(form) {
  console.log(form);
  var device = document.forms[form]["device"].value;
  var color = document.forms[form]["colors"].value;
  var capacity = document.forms[form]["capacity"].value;
  var plan = document.forms[form]["pplan"].value;
  if (color == "") {
    alert("You must select a color");
    return false;
  }
  if (capacity == "") {
    alert("You must select a capacity");
    return false;
  }
  if (plan == "") {
    alert("You must select a Payment Plan");
    return false;
  }
  document.forms[form].setAttribute("action","index.html?device=" + device + "&color=" + color + "&capacity=" + capacity + "&pplan=" + plan );
}

//version 1.2
