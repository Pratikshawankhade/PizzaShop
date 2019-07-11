//Business logic for Pizza Order----------
function OrderList(){
  this.orders = [],
  this.orderId = 0
}

OrderList.prototype.addOrder = function(order){
  order.orderId +=1;
  return this.orderId;
}

function Order(pizzaToppings, pizzaSize){
  this.pizzaToppings = pizzaToppings,
  this.pizzaSize = pizzaSize

}
Order.prototype.pizzaOrder = function(){
  return this.pizzaToppings + " " + this.pizzaSize;
}
function checkTotal(){

}




var orderList = new OrderList();

$(document).ready(function(){
  $("form#order_pizza").submit(function(event){
    event.preventDefault();
    var userResponces = [];
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var pizzaToppingResquest = $(this).val();
      userResponces.push(pizzaToppingResquest);
    });
    $("#topping-responses").show();
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var pizzaToppingResquest = $(this).val();
      $('#topping-responses').append(pizzaToppingResquest + "<br>");
    });
    $("#size-responses").show();
    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var pizzaSizeRequest = $(this).val();
      $('#size-responses').append(pizzaSizeRequest + "<br>");
    });

    $('#order_pizza').hide();
  });
});
