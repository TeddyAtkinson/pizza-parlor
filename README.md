# Pizza Parlor

### Authored-by: Teddy Atkinson

## General Info:
Select your pizza size and toppings. Hit place order and see your cost of the pizza.
## Technologies Used:
* HTML
* CSS
* JavaScript

## Instalation:
1. Clone Repository to a place on your machine
2. Open the index.html file to view project

## Known Bugs:
None

## Link to Repository
[Pizza Parlor](https://github.com/TeddyAtkinson/pizza-parlor)

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