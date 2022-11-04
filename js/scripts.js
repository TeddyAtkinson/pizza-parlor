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
  let toppings = document.querySelector("input[name=toppings]:checked");
    toppings.push(toppings);

  let newOrder = new Pizza(toppings, size);
  newOrder.sizePrice();
  newOrder.toppingPrice();

  document.getElementById("orderInfo").innerText = newOrder.currentPrice;
  document.getElementById("order").removeAttribute("class");
}