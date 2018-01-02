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

  //Close any section that were opened in the a previous section

  // $("li").click(function(){
  //   $(".active").next().slideToggle();
  //   $(".active").toggleClass("active");
  // })

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
            scrollTop: $a.offset().top-50
          }, 'fast');
        });
      }
  })

  $("#dropbox").click(function(event){
    event.preventDefault();
    $("#slideMenu").slideToggle();
  })


});
