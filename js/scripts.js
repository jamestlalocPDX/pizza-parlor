//Back-End Logic
function Pizza () {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var toppings = $(".toppings").val();
    console.log(size);
    console.log(toppings)
  })
})