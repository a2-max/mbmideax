// JQuery Slick Slider
jQuery(document).ready(function ($) {
    $('.teams').slick({
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        mobileFirst: true
    });
});

$(document).ready(function(){
    setTimeout(function() {
        $('.site-preloader').fadeOut();
    }, 1500);
});