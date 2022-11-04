## Tests:

Description: Create constructor for pizza
Test: Create a new pizza using Pizza constructor

Code:
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

const pepperoniPizza = new Pizza("Large", "Pepperoni");

console.log(pepperoniPizza);

Output: 
Pizza {size: 'Large', toppings: 'Pepperoni'}
size: "Large"
toppings: "Pepperoni"
[[Prototype]]: Object