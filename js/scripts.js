window.addEventListener("load", function (event) {
  event.preventDefault();
  document.getElementById("order").setAttribute("class", "hidden");
  const survey = document.getElementById("create");
  survey.addEventListener("submit", getCost);
});

//------------------------------------------------------------------------------

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.currentPrice = 0
}

Pizza.prototype.sizePrice = function () {
  if (this.size === "small") {
    this.currentPrice = 4
  }
  else if (this.size === "medium") {
    this.currentPrice = 6
  }
  else if (this.size === "large") {
    this.currentPrice = 8
  }

  return this.currentPrice
}

Pizza.prototype.toppingPrice = function () {
  this.currentPrice += (this.toppings.length * 2.5);

  return this.currentPrice
}


function getCost(event) {
  event.preventDefault();
  let toppings = [];
  const toppingsSelected = document.querySelectorAll('input[type=checkbox]:checked');
  const size = document.querySelector('input[type=radio]:checked').value;
  let newOrder = new Pizza(toppings, size);

  for (let i = 0; i < toppingsSelected.length; i++) {
    newOrder.toppings.push(toppingsSelected[i].value)
  }
  console.log(toppings);
  newOrder.sizePrice();
  newOrder.toppingPrice();

  document.getElementById("orderInfo").innerText = '$' + newOrder.currentPrice;
  document.getElementById("order").removeAttribute("class");
}