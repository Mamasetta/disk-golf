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

  $(".cross").on("click", function() {
      $(".page-popup").removeClass("showed");
      return false;
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
  });


  var COUNT = $(".slides .slider__item").length - 1;
  var index = 0;


  var myClosure = (function outerFunction() {
   
    var hidden = 0;
    var max = COUNT;
   
    return {
      inc: function incFunction() {
      if (hidden < max) {
        return ++hidden;  
      } else {
        hidden = 0;
        return 0;
      }
      },
      dec: function decFunction() {
      if (hidden > 0) {
        return --hidden;
      } else {
        hidden = max;
        return hidden;
      }
      },
      set: function setFunction(index) {
        hidden = index;
        return hidden;
      },
      cur: function curFunction() {
        return hidden;
      }
    };
   
  }());



  function rightClick() {
    var inc = myClosure.inc();
    $(".slides .slider__item").hide();
    $(".slides .slider__item:eq(" + inc + ")").fadeIn();
    $(".slider__controls i").removeClass("checked");
    $(".slider__controls i:eq("+ inc +")").addClass("checked");
    return false;    
  }

  function leftClick() {
    var dec = myClosure.dec();
    $(".slides .slider__item").hide();
    $(".slides .slider__item:eq(" + dec + ")").fadeIn();
    $(".slider__controls i").removeClass("checked");
    $(".slider__controls i:eq("+ dec +")").addClass("checked");
    return false;    
  }

  $(".slider__controls i").on("click", function() {
    var index = $(this).index();
    myClosure.set(index);
    $(".slider__controls i").removeClass("checked");
    $(this).addClass("checked");
    $(".slider__item").hide().css("display", "none");
    $(".slider__item:eq(" + index + ")").fadeIn().css("display", "block");
  });

  $(".slider__arrow_right").on("click", function() {
    rightClick();
    return false;
  });

  $(".slider__arrow_left").on("click", function() {
    leftClick();
    return false;
  });



















});
