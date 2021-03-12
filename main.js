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
      bulletActive();
    }
  );


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

// function bulletActive() {
//   $(this).addClass("active");
//
//
// }
