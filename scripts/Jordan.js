<script src="~/resources/bower/gsap/dist/gsap.min.js"></script>
<script src="~/resources/bower/scrollmagic/scrollmagic/minified/ScrollMagic.min.js"></script>
<script src="~/resources/bower/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"></script>
<script src="~/resources/bower/slick-carousel/slick/slick.min.js"></script>
<script>
    $(".jordan-dynasty-slider__inner").slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        appendDots: $(".jordan-dynasty-slider__buttons"),
        customPaging: function(slick,index) {
               
                return '<i class="fa-solid fa-basketball"></i>';
            },
        appendArrows: $(".jordan-dynasty-slider__inner"),
        prevArrow: "<div class='slick-prev icon-prev'>",
        nextArrow: "<div class='slick-next icon-next'>",
        arrows: true,
        infinite: true,
        speed: 500,
    });

</script>