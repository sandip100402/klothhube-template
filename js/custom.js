$(document).ready(function () {
    new WOW().init();

    // if ($('.magic-cursor').length > 0) {
    //     $('<div class="magic-cursor-wrapper"><div id="ball-cursor"><div id="ball-cursor-loader"></div></div></div>').clone(false).appendTo('body');
    //     if ($('.magic-cursor').hasClass('light')) {
    //         $('.magic-cursor-wrapper').addClass('magic-cursor-light');
    //     }
    //     if ($('.magic-cursor').hasClass('base-color')) {
    //         $('.magic-cursor-wrapper').addClass('magic-cursor-base-color');
    //     }
    //     if ($('.magic-cursor').hasClass('view-cursor')) {
    //         $('.magic-cursor-wrapper').addClass('magic-view-cursor');
    //     }
    //     if ($('.magic-cursor').hasClass('drag-cursor')) {
    //         $('.magic-cursor-wrapper').addClass('magic-drag-cursor');
    //     }
    //     if ($('.magic-cursor').hasClass('round-cursor')) {
    //         $('.magic-cursor-wrapper').addClass('magic-round-cursor');
    //     }
    //     var mouse = {
    //         x: 0,
    //         y: 0
    //     },
    //         pos = {
    //             x: 0,
    //             y: 0
    //         },
    //         ratio = .65,
    //         active = !1,
    //         ball = document.getElementById('ball-cursor'),
    //         ballloader = document.getElementById('ball-cursor-loader');

    //     function mouseMove(e) {
    //         var a = window.pageYOffset || document.documentElement.scrollTop;
    //         mouse.x = e.pageX, mouse.y = e.pageY - a
    //     }

    //     function updatePosition() {
    //         active || (pos.x += (mouse.x - pos.x) * ratio, pos.y += (mouse.y - pos.y) * ratio, TweenLite.to(ball, .4,
    //             {
    //                 x: pos.x,
    //                 y: pos.y,
    //             }))
    //     }
    //     if (typeof TweenLite !== "undefined") {
    //         TweenLite.set(ball,
    //             {
    //                 xPercent: -5,
    //                 yPercent: -5,
    //                 scale: 0,
    //                 borderWidth: "0",
    //                 opacity: 1
    //             });
    //     }
    //     document.addEventListener("mousemove", mouseMove);
    //     if (typeof gsap !== "undefined") {
    //         gsap.ticker.add(updatePosition);
    //     }
    //     if (typeof TweenMax !== 'undefined' && typeof TweenMax !== null) {
    //         $('.magic-cursor').mouseenter(function (e) {
    //             TweenMax.to('#ball-cursor', 0.3,
    //                 {
    //                     borderWidth: '2px',
    //                     scale: 1,
    //                 });
    //             TweenMax.to('#ball-cursor-loader', 0.2,
    //                 {
    //                     borderWidth: '2px',
    //                     top: 2,
    //                     left: 2
    //                 });
    //             $('.magic-cursor-wrapper').addClass('sliderhover');
    //             if ($(this).hasClass('magic-cursor-vertical')) {
    //                 $('.magic-cursor-wrapper').addClass('vertical');
    //             }
    //         });
    //     }
    //     if (typeof TweenMax !== 'undefined' && typeof TweenMax !== null) {
    //         $('.magic-cursor').mouseleave(function (e) {
    //             TweenMax.to('#ball-cursor', 0.3,
    //                 {
    //                     borderWidth: '2px',
    //                     scale: 1,
    //                     borderColor: 'transparent',
    //                     opacity: 1
    //                 });
    //             TweenMax.to('#ball-cursor-loader', 0.2,
    //                 {
    //                     borderWidth: '2px',
    //                     top: 0,
    //                     left: 0
    //                 });
    //             $('.magic-cursor-wrapper').removeClass('sliderhover');
    //         });
    //     }
    // }
    // $(document).on('mouseenter', '.slick-arrow, a:not(.force-magic-cursor)', function () {
    //     $('.sliderhover').css(
    //         {
    //             'opacity': 0
    //         });
    // }).on('mouseleave', '.slick-arrow, .slick-slider, a:not(.force-magic-cursor)', function () {
    //     $('.sliderhover').css(
    //         {
    //             'opacity': 1
    //         });
    // });
});

$(".hero-banner-sec-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
});

$('.testimonial-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '270px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false   
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
});

// Countdown Timer

document.addEventListener("DOMContentLoaded", function () {

    const countdowns = document.querySelectorAll(".countdown");

    countdowns.forEach(function (countdown) {

        const targetDate = countdown.getAttribute("data-date");
        const targetTime = countdown.getAttribute("data-time");

        const targetDateTime = new Date(`${targetDate}T${targetTime}`);

        const x = setInterval(function () {

            const now = new Date().getTime();

            const distance = targetDateTime - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const dayElement = countdown.querySelector(".day .num");
            const hourElement = countdown.querySelector(".hour .num");
            const minElement = countdown.querySelector(".min .num");
            const secElement = countdown.querySelector(".sec .num");

            if (dayElement && hourElement && minElement && secElement) {
                dayElement.innerText = days < 10 ? "0" + days : days;
                hourElement.innerText = hours < 10 ? "0" + hours : hours;
                minElement.innerText = minutes < 10 ? "0" + minutes : minutes;
                secElement.innerText = seconds < 10 ? "0" + seconds : seconds;
            }

            if (distance < 0) {
                clearInterval(x);
                countdown.innerHTML = "OFFER EXPIRED";
            }
        }, 1000);
    });
});

// Back to Top
var toggleHeight = $(window).outerHeight() * 1;

$(window).scroll(function () {
    if ($(window).scrollTop() > toggleHeight) {
        $(".m-backtotop").addClass("active");
    } else {
        $(".m-backtotop").removeClass("active");
    }
});

$(".m-backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});