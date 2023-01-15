// hiding navbar on scroll
$(function ($) {
    var previousScroll = 20;
    $(window).on('scroll',function (e) {
        var scroll = $(window).scrollTop();
        if (scroll >= previousScroll) {
            if ($(window).width() > 575) {
                $("nav").css('top', '-70px');
            } else {
                $("nav").css('top', '-320px');
            }
        } else if (scroll < previousScroll) {
            $("nav").css('top', '0px');
        }
        previousScroll = scroll;
    });
});

// Hamburger animation
$(function () {
    $('#hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#navbarsTarget').toggleClass('collapse');
    });
});