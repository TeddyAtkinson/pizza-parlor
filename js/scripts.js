

//------------------------------------------------------------------------------

function Pizza (toppings, size) {
  this.toppings = toppings
  this.size = size
}

// //console.log(pepperoniPizza);

Pizza.prototype.getCost = function () {
  console.log(this.toppings) 
  
  return cost
}

const newOrder = new Pizza("Large", ["Mushrooms", "Pepperoni"])
console.log(newOrder)
console.log(newOrder.getCost())