$(document).ready(function() {
    $('.promo__carousel').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        arrows: true,
        swipe: false,
        slidesToShow: 1,
        dots: true,
        speed: 600
    });
    new WOW().init();
});