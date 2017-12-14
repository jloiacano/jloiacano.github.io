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
        var increment = range / 48;

        if ( window.pageYOffset < (window.innerHeight - 60 / 2 ) && window.pageYOffset > 0) {
            var a = 48 - ( window.pageYOffset / increment );
                $(".main-title").css("fontSize", a + "px");

        }
    });
});
