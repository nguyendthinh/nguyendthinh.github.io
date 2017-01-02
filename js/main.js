$(document).ready(function(){

  $("#home").click(function(){
    $('main:not(#homepage)').css("display", "none");
    $("#homepage").attr('style', "display: -webkit-flex; display: -moz-flex; display: flex;");
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

  $("li").click(function(){
    $(".active").next().slideToggle();
    $(".active").toggleClass("active");
  })

  $(".portfolioproject").click(function(event){
    event.preventDefault();
    $a = $(this);

      if ($(this).hasClass('active')) {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
      }
      else {
        $(".active").next().slideToggle();
        $(".active").toggleClass("active")
        $(this).toggleClass("active");
        $(this).next().slideToggle(function(){
          $('html, body').animate({
            scrollTop: $a.offset().top
          }, 'fast');
        });
      }
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
