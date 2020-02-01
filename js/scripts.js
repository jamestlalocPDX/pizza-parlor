//Back-End Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizeCost = 0;
  this.toppingsCost = 0;
  this.totalCost = 0;
}
Pizza.prototype.pricesForSize = function() {
  if (this.size === "small") {
  return this.sizeCost += 6;
} else if (this.size === "medium") {
  return this.sizeCost =  8;
} else if (this.size ==="large") {
  return this.sizeCost = 10;
} else if (this.size === "family") {
  return this.sizeCost = 15;
}
}
Pizza.prototype.totalPrice = function() {
return pricesForSize() + pricesForToppings();
}
function Toppings() {
  this.pepperoni = pepperoni;
  this.sausage = sausage;
  this.pineapple = pineapple;
  this.mushrooms = mushrooms;
  this.spinach = spinach;
  this.redonions = redonions;
  this.bananapeppers = bananapeppers;
}
Toppings.prototype.pricesForToppings = function() {
  if (this.pepperoni === "pepperoni") {
    return this.pepperoni = 1;
  } else if (this.sausage === "sausage") {
    return this.sausage = 2;
  } else if (this.pineapple === "pineapple") {
    return this.pineapple = 3;
  } else if (this.mushrooms === "mushrooms") {
    return this.mushrooms = 2;
  } else if (this.spinach === "spinach") {
    return this.spinach = 1;
  } else if (this.redonions === "redonions") {
    return this.redonions = 1;
  } else if (this.bananapeppers === "bananapeppers") {
    return this.bananapeppers = 2
  }
}
//Front-End Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#pizza").val();
    newPizza = new Pizza (inputtedSize)
  });
});