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

  $(".fa-circle").click(
    function () {
      var circleActive = $(".fa-circle");

      circleActive.removeClass("active");
      $(this).addClass("active");
      

    }
  )





});

function preImg() {
  var imgActive = $(".images img.active");

  imgActive.removeClass("active");

  if (imgActive.hasClass("first") == true) {
    $(".images img.last").addClass("active")
  } else {
    imgActive.prev().addClass("active");
  }
};


function nextImg() {
  var imgActive = $(".images img.active");

  imgActive.removeClass("active");

  if (imgActive.hasClass("last") == true) {
    $(".images img.first").addClass("active")
  } else {
    imgActive.next().addClass("active");
    }
};
