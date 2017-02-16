$(document).ready(function(){
  $("#questions").submit(function(){
    debugger;
    var name = $("#name").val();
    var dino = $("input:radio[name=dinosaur]:checked").val();
    var favColor = $("#color").val();
    var date = $("#birthday").val();
    var attackChoice = $("#attack").val();

    $(".name").text(name);
    $(".dino").text(dino);
    $(".color").text(favColor);
    $(".color").css("color", favColor);
    $(".birthday").text(date);
    $(".attack").text(attackChoice);

    $("form").toggle();
    $(".confirmation").toggle();
    event.preventDefault();
  });

});
