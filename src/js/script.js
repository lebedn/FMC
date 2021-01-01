$(document).ready(function() {
    $('.promo__carousel').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        arrows: true,
        swipe: false,
        slidesToShow: 1,
        dots: true,
        adaptiveHeight: true,
        speed: 600
    });
    new WOW().init();
});
$('ul.experimental_solutions__tabs').on('click', 'li:not(.experimental_solutions__tab_active)', function() {
    $(this)
        .addClass('experimental_solutions__tab_active').siblings().removeClass('experimental_solutions__tab_active')
        .closest('div.container').find('div.experimental_solutions__content').removeClass('experimental_solutions__content_active').eq($(this).index()).addClass('experimental_solutions__content_active');
});