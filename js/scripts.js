//Back-End Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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
} else {
  alert("Please select a size.")
}
}
Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings);
}
Pizza.prototype.priceForToppings = function() {
    if (this.toppings.includes("pepperoni")) {
      this.toppingsCost += 1;
    } if (this.toppings === "sausage") {
      this.toppingsCost += 2;
    } if (this.toppings === "pineapple") {
      this.toppingsCost += 3;
    } if (this.toppings === "mushrooms") {
      this.toppingsCost += 2;
    } if (this.toppings === "spinach") {
      this.toppingscost += 1;
    } if (this.toppings === "redonions") {
      this.toppingsCost += 1;
    } if (this.toppings === "bananapeppers") {
      this.toppingsCost += 2
    }
    console.log(this.toppingsCost);
}
Pizza.prototype.priceForPie = function() {
  this.totalCost = this.sizeCost + this.toppingsCost
}
//Front-End Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var toppingsArray = [];
    var newPizza = new Pizza (inputtedSize, toppingsArray)

    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      newPizza.addToppings(inputtedToppings);
    });
    
    newPizza.priceForSize();
    newPizza.priceForToppings();
    newPizza.priceForPie();
    console.log(newPizza);
  });
});