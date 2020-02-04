//Back-End Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.sizeCost = 0;
  this.toppingsCost = 0;
  this.totalCost = 0;
}
Pizza.prototype.priceForSize = function() {
  if (this.size === "small") {
    this.sizeCost = 6;
} else if (this.size === "medium") {
    this.sizeCost = 8;
} else if (this.size ==="large") {
    this.sizeCost = 10;
} else if (this.size === "family") {
    this.sizeCost = 15;
} 
}
Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.priceForToppings = function() {
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings === "pepperoni") {
      this.toppingsCost = 1;
    } else if (this.toppings === "sausage") {
      this.toppingsCost = 2;
    } else if (this.toppings === "pineapple") {
      this.toppingsCost = 3;
    } else if (this.toppings === "mushrooms") {
      this.toppingsCost = 2;
    } else if (this.toppings === "spinach") {
      this.toppingscost = 1;
    } else if (this.toppings === "redonions") {
      this.toppingsCost = 1;
    } else if (this.toppings === "bananapeppers") {
      this.toppingsCost = 2
    }
  }
}
Pizza.prototype.priceForPie = function() {
  this.totalCost = this.sizeCost + this.toppingsCost
  return this.totalCost
}

//Front-End Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      Pizza.addToppings.push(inputtedToppings);
    });
    
    newPizza = new Pizza (inputtedSize)
    newPizza.push(inputtedToppings);
    newPizza.priceForSize();
    newPizza.priceForToppings();
    newPizza.priceForPie();
    console.log(newPizza);
  });
});