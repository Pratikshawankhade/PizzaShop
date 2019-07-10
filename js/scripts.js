





$(document).ready(function(){
  $("form#order_pizza").submit(function(event){
    event.preventDefault();
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
    $('#orde_pizza').hide();
  });
});
