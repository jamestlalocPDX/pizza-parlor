//Back-End Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizeCost = 0;
  this.toppingsCost = 0;
  this.totalCost = 0;
}
Pizza.prototype.priceForSize = function() {
  if (this.size === "Small") {
    this.sizeCost = 6;
} else if (this.size === "Medium") {
    this.sizeCost = 8;
} else if (this.size ==="Large") {
    this.sizeCost = 10;
} else if (this.size === "Family") {
    this.sizeCost = 15;
} else {
  alert("Please select a size.")
}
}
Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings);
}
Pizza.prototype.priceForToppings = function() {
    if (this.toppings.includes("Pepperoni")) {
      this.toppingsCost += 1;
    } if (this.toppings.includes("Sausage")) {
      this.toppingsCost += 2;
    } if (this.toppings.includes("Bacon")) {
      this.toppingsCost += 2;
    } if (this.toppings.includes("Pineapple")) {
      this.toppingsCost += 3;
    } if (this.toppings.includes("Mushrooms")) {
      this.toppingsCost += 2;
    } if (this.toppings.includes("Spinach")) {
      this.toppingscost += 1;
    } if (this.toppings.includes("Red Onions")) {
      this.toppingsCost += 1;
    } if (this.toppings.includes("Banana Peppers")) {
      this.toppingsCost += 2;
    }
}
Pizza.prototype.priceForPie = function() {
  this.totalCost = this.sizeCost + this.toppingsCost
  // return this.totalCost
}
//Front-End Logic
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var toppingsArray = [];
    var newPizza = new Pizza (inputtedSize, toppingsArray);
    $("input:checkbox[name=toppings]:checked").each(function() {
      var inputtedToppings = $(this).val();
      newPizza.addToppings(inputtedToppings);
    });
    
    newPizza.priceForSize();
    newPizza.priceForToppings();
    newPizza.priceForPie();

    $(".order-display").show();
    $(".showSize").text(inputtedSize);
    $(".showToppings").text(toppingsArray.join(", "));
    $(".showTotal").text(newPizza.priceForPie());
  });
});