$(document).ready(function () {

    $("#header").load("header.html");
    $("#footer").load("footer.html");


    $('.main-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        centerPadding: '18px',
        mobileFirst: false,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.ui.selection.dropdown').dropdown();
    $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
    });


    $('.dropdown').dropdown();


    $("#menu-button, .overlay").click(function () {
        if ($('body').hasClass('mobile-menu-active')) {
            $('body').removeClass('mobile-menu-active');
        } else {
            $('body').addClass('mobile-menu-active');
        }
    });
});

