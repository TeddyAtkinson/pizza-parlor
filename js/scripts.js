

//------------------------------------------------------------------------------

function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

const pepperoniPizza = new Pizza("Large", "Pepperoni");

console.log(pepperoniPizza);