$(document).ready(function(){

  $("#home").click(function(){
    $('main:not(#homepage)').css("display", "none");
    $("#homepage").css("display", "flex");
  })

  $("#coding").click(function(){
    $('main:not(#codingpage)').css("display", "none");
    $("#codingpage").css("display", "block");
  })

  $("#design").click(function(){
    $('main:not(#designpage)').css("display", "none");
    $("#designpage").css("display", "block");
  })

  $("#about").click(function(){
    $('main:not(#aboutpage)').css("display", "none");
    $("#aboutpage").css("display", "block");
  })

  $("#project1").click(function(){
    $("#isimonsays").slideToggle();
  })

  $("#project2").click(function(){
    $("#decadefootwear").slideToggle();
  })

  $("#project3").click(function(){
    $("#heyimbored").slideToggle();
  })

  $("#project4").click(function(){
    $("#project4content").slideToggle();
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
