$('#theAboutDiv [data-toggle="tooltip"]').tooltip({
    animation: 'fade',
    placement: 'bottom',
    html: true
});

$(function () {
    var lastScrollTop = 0,
        delta = 5;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        var ss = 1;

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop) {
            // downscroll code
            var a = parseInt($(".main-title").css("fontSize").slice(0, -2));
            if (a > 0) {
                a -= ss;
                $(".main-title").css("fontSize", a + "px");
            }
        } else {
            // upscroll
            var b = parseInt($(".main-title").css("fontSize").slice(0, -2));
            if (b < 48) {
                b += ss;
                $(".main-title").css("fontSize", (b + "px"));
            }
        }
        lastScrollTop = st;
    });
});
