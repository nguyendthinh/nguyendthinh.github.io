$(document).ready(function(){

  // $("#home").click(function(){
  //   $('main:not(#homepage)').css("display", "none");
  //   $("#homepage").attr('style', "display: -webkit-flex; display: -moz-flex; display: flex;");
  // })
  //
  // $("#coding").click(function(){
  //   $('main:not(#codingpage)').css("display", "none");
  //   $("#codingpage").css("display", "block");
  // })
  //
  // $("#design").click(function(){
  //   $('main:not(#designpage)').css("display", "none");
  //   $("#designpage").css("display", "block");
  // })
  //
  // $("#about").click(function(){
  //   $('main:not(#aboutpage)').css("display", "none");
  //   $("#aboutpage").css("display", "block");
  // })

  //Close any section that were opened in the a previous sectoin

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

        //Close any active section aside from the one that was clicked

        $(".active").next().slideToggle();
        $(".active").toggleClass("active")

        //Bring current active section up to the top of the screen

        $(this).toggleClass("active");
        $(this).next().slideToggle(function(){
          $('html, body').animate({
            scrollTop: $a.offset().top
          }, 'fast');
        });
      }
  })

  $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
});

$('#mainNav').affix({
        offset: {
            top: 100
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
