$('#theAboutDiv [data-toggle="tooltip"]').tooltip({
    animation: 'fade',
    placement: 'bottom',
    html: true
});

$(function () {
    var lastScrollTop = 0,
        delta = 5;
    $(window).scroll(function (event) {
        var range = (window.innerHeight - 100) / 2;
        var scrollIncrement = range / 48;
        var rotateIncrement = range / 90;

        if (window.pageYOffset < (window.innerHeight - 60 / 2) && window.pageYOffset > 0) {
            var a = 48 - (window.pageYOffset / scrollIncrement);
            $(".main-title").css("fontSize", a + "px");
            var rI = window.pageYOffset / rotateIncrement;
            $(".main-title").css({ WebkitTransform: 'rotateX(' +rI + 'deg)'});
        }
    });
});

$(".title-text").hover(
  function() {
    $(".arrows").css( "visibility", "visible" );
  }, function() {
    $(".arrows").css( "visibility", "hidden" );
  }
);
