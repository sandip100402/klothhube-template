$(document).ready(function () {
    new WOW().init();
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
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

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