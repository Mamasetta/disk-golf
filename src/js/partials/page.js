$(document).ready(function(){

  $(".registration-button").on('click', function(event) {
    $(".page-popup").addClass("showed");
    return false;
  });

  $(".popup-bg").on('click', function(event) {
    $(".page-popup").removeClass("showed");
    return false;
  });

  $('html').keydown(function(event){
    if (event.keyCode == 27) {
      $(".page-popup").removeClass("showed");
      return false;
    }
  });

  $("#main-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#main').offset().top}, 800);
      return false;
  })

  $("#about-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#about').offset().top}, 800);
      return false;
  })

  $("#conditions-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#conditions').offset().top}, 800);
      return false;
  })

  $("#feedback-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#feedback').offset().top}, 800);
      return false;
  })

  $("#place-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#place').offset().top}, 800);
      return false;
  })

  $("#partners-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#partners').offset().top}, 800);
      return false;
  })

  $("#registration-link").on("click", function() {
      $("html, body").animate({scrollTop: $('#registration').offset().top}, 800);
      return false;
  })
});
