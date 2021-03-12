$(function () {

  $(".prev").click(
    function () {
      var attivazione = $(".images img.active");
      attivazione.removeClass("active");
      attivazione.next().addClass("active");

    }
  )


    $(".next").click(
      function () {

      }
    )
})
