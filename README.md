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

Description: Calculate cost of pizza and output to UI
Test: Check boxed and radio buttion in html live page and hit submit to see price of pizza calculation

Code:
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

<form id="create">
    <h3>Select Your Size:</h3>
    <label>
      <input type="radio" name="size" value="small">
      Small Pizza - 4$
    </label>
    <label>
      <input type="radio" name="size" value="medium">
      Medium Pizza - 6$
    </label>
    <label>
      <input type="radio" name="size" value="large">
      Large Pizza - 8$
    </label><br><br><br>
    <h3>Select Your Toppings:
      <br> (2.50 each)
    </h3>
    <label>
      <input type="checkbox" name="toppings" value="redSauce">
      Red Sauce
    </label>
    <label>
      <input type="checkbox" name="toppings" value="whiteSauce">
      White Sauce
    </label><br>
    <label>
      <input type="checkbox" name="toppings" value="cheese">
      Cheese
    </label>
    <label>
      <input type="checkbox" name="toppings" value="pepperoni">
      Pepperoni
    </label><br>
    <label>
      <input type="checkbox" name="toppings" value="pineapple">
      Pineapple
    </label>
    <label>
      <input type="checkbox" name="toppings" value="sausage">
      Sausage
    </label><br>
    <label>
      <input type="checkbox" name="toppings" value="peppers">
      Peppers
    </label>
    <label>
      <input type="checkbox" name="toppings" value="onions">
      Onions
    </label><br><br><br>
    <button type="submit">Place Order</button>
  </form>
  <div id="order" class="hidden">
    <h2>Your Order:</h2>
    <p id="orderInfo"></p>
  </div>
  
Expected Output: 9$
