$(function () {

  $(".prev").click(
    function () {
      preImg();
    }
  );

  $(".next").click(
    function () {
      nextImg();
    }
  );

  $(".nav .fas.fa-circle").click(
    function () {
      var images = $(".images img");
      var cerchio = $(".nav .fas.fa-circle");
      var indexImg = cerchio.index($(this));
      $(".nav .fas.fa-circle").removeClass("active");
      $(this).addClass("active");
      images.removeClass("active");
      images.eq(indexImg).addClass("active");
      console.log(cerchio);
      console.log(indexImg);
    }

  );


  // uso delle frecce
  $(document).keydown(
    function (tasto) {
      if (tasto.which == 37) {
        preImg();
        console.log("freccia sinistra");
      }
      else if (tasto.which == 39) {
        nextImg();
        console.log("freccia destra");
      }
    }
  )

// css inserito con javascript
  var body = $("body");
  body.css("background-color", "#312a29");
  var img = $(".images img");
  img.css("border-radius", "10px").css("box-shadow", "5px 10px rgba(0,0,0,0.5)");

});

function preImg() {
  var imgActive = $(".images img.active");
  var circleActive = $(".nav .fas.fa-circle.active");

  imgActive.removeClass("active");
  circleActive.removeClass("active");

  if (imgActive.hasClass("first") == true && circleActive.hasClass("first") == true) {
    $(".images img.last").addClass("active")
    $(".nav .fas.fa-circle.last").addClass("active");

  } else {
    imgActive.prev().addClass("active");
    circleActive.prev().addClass("active");

  }

};


function nextImg() {
  var imgActive = $(".images img.active");
  var circleActive = $(".nav .fas.fa-circle.active");

  imgActive.removeClass("active");
  circleActive.removeClass("active");

  if (imgActive.hasClass("last") == true && circleActive.hasClass("last") == true) {
    $(".images img.first").addClass("active");
    $(".nav .fa-circle.first").addClass("active");
  } else {
    imgActive.next().addClass("active");
    circleActive.next().addClass("active");

    }
};
