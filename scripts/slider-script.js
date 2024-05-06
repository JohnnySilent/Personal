$(document).ready(function(){
    $('.slider-container').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
    });

    $('.slider-projects').slick({
    //  appendDots: $('.slider-projects__dots'),
        autoplay: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slideToScroll: 3,
    //  cssEase: 'linear', // for smooth, non-stop scrolling
    });
});