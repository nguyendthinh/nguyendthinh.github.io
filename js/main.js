$(document).ready(function(){

  $("#home").click(function(){
    $('main:not(#homepage)').css("display", "none");
    $("html").css("background", "");
    $("#homepage").css("display", "flex");
  })

  $("#coding").click(function(){
    $('main:not(#codingpage)').css("display", "none");
    $("html").css("background", "black");
    $("#codingpage").css("display", "block");
  })

  $("#design").click(function(){
    $('main:not(#designpage)').css("display", "none");
    $("html").css("background", "black");
    $("#designpage").css("display", "block");
  })

  $("#about").click(function(){
    $('main:not(#aboutpage)').css("display", "none");
    $("html").css("background", "");
    $("#aboutpage").css("display", "block");
  })

  $(".portfolioproject").click(function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  })

});

function navBar() {
  var x = document.getElementById("myTopnav");
  if (x.className == "topnav") {
    x.className += " mobile";
  } else {
    x.className = "topnav";
  }
}
