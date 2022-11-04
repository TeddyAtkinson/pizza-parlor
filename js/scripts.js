window.addEventListener("load", function() {
  const survey = document.getElementById("create");
  survey.addEventListener("submit", result);
});

//------------------------------------------------------------------------------

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

const pepperoniPizza = new Pizza("pepperoni", "Small")

console.log(pepperoniPizza);

// Pizza.prototype.getCost = function () {
//   console.log(this.toppings);
  
//   return cost;
// }

const newOrder = new Pizza(["Mushrooms", "Pepperoni"], "Large")
console.log(newOrder);
// console.log(newOrder.getCost());