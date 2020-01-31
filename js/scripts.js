//Back-End Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.sizeCost = 0;
  this.toppingsCost = 0;
  this.totalCost = 0;
}
Pizza.prototype.pricesForSize = function() {
  if (this.size === "Small") {
  return this.sizeCost = 6;
} else if (this.size === "Medium") {
  return this.sizeCost =  8;
} else if (this.size ==="Large") {
  return this.sizeCost = 10;
} else if (this.size === "Family") {
  return this.sizeCost = 15;
}
}
Pizza.prototype.pricesForToppings = function() {
  
}

Pizza.prototype.totalPrice = function() {
return pricesForSize() + pricesForToppings();
}

function Toppings() {
  this.pepperoni = 1;
  this.sausage = 2;
  this.pineapple = 3;
  this.mushrooms = 1;
  this.spinach = 1;
  this.redonions = 1;
  this.bananapeppers = 2;
}