//Back-End Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = {};
}
Pizza.prototype.calculateCost = function() {

}

//Front-End Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppings = [];
      var inputtedToppings = $(this).val();
      toppings.push(inputtedToppings);
    });
    var newPizza = new Pizza(inputtedSize, inputtedToppings)
    console.log(newPizza);
  })
})