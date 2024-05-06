

$(document).ready(function() {

    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic.Controller();
    //animation variables
    var headerImage = $('#animate-header-img'),
        headerText = $('#animate-header-text'),
        headerLink = $('#animate-header-btn'),
        sliderImage = $('.ccg-slider-feature__image'),
        alternatingImgOdd = $('.ccg-alternating-feature:nth-of-type(odd) .ccg-alternating-feature__image'),
        alternatingTextOdd = $('.ccg-alternating-feature:nth-of-type(odd) .ccg-alternating-feature__text'),
        alternatingImgEven = $('.ccg-alternating-feature:nth-of-type(even) .ccg-alternating-feature__image'),
        alternatingTextEven = $('.ccg-alternating-feature:nth-of-type(even) .ccg-alternating-feature__text'),
        textCTA = $('.ccg-text-cta');


    $(function(index, elem) {

        //timelines
        var tl = gsap.timeline();
        tl.add("start")
            .fromTo(headerImage, 0.5, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.3 }, "start")
            .fromTo(headerText, 0.5, { y: '30px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.6 }, "start")
            .fromTo(headerLink, 0.5, { y: '30px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.9 }, "start")

        var tl2 = gsap.timeline();
        tl2.add("start")
            .fromTo(alternatingImgOdd, 0.5, { x: '70px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.3 }, "start")
            .fromTo(alternatingTextOdd, 0.5, { x: '70px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.6 }, "start")

        var tl3 = gsap.timeline();
        tl3.add("start")
            .fromTo(alternatingImgEven, 0.5, { x: '-70px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.3 }, "start")
            .fromTo(alternatingTextEven, 0.5, { x: '-70px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.6 }, "start")

        var tl4 = gsap.timeline();
        tl4.add("start")
            .fromTo(textCTA, 0.5, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")

        var tl5 = gsap.timeline()
        tl5.add("start")
            .fromTo(sliderImage, 0.5, { x: '70px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut, delay: 0.3 }, "start")

        // scenes
        var headerScene = new ScrollMagic.Scene({
            triggerElement: 'ccg-header-feature',
            triggerHook: '0.75'
        })
            .setTween(tl)
            .addTo(scrollMagicController);

        var alternatingScene = new ScrollMagic.Scene({
            triggerElement: '.ccg-alternating-feature:nth-of-type(odd)',
            triggerHook: '0.75'
        })
            .setTween(tl2)
            .reverse(false)
            .addTo(scrollMagicController);

        var alternatingScene = new ScrollMagic.Scene({
            triggerElement: '.ccg-alternating-feature:nth-of-type(even)',
            triggerHook: '0.75'
        })
            .setTween(tl3)
            .reverse(false)
            .addTo(scrollMagicController);

        var alternatingScene = new ScrollMagic.Scene({
            triggerElement: '.ccg-text-cta',
            triggerHook: '0.75'
        })
            .setTween(tl4)
            .reverse(false)
            .addTo(scrollMagicController);

        var sliderScene = new ScrollMagic.Scene({
            triggerElement: '.ccg-slider-feature__image',
            triggerHook: '0.75'
        })
            .setTween(tl5)
            .reverse(false)
            .addTo(scrollMagicController);

    });

    // icon flipping
    $(".ccg-content-card").each(function(i) {
        var card1 = $(this).find('#card-1'),
            card2 = $(this).find('#card-2'),
            card3 = $(this).find('#card-3'),
            card4 = $(this).find('#card-4'),
            cardIcon1 = $(this).find('#icon-1'),
            cardIcon2 = $(this).find('#icon-2'),
            cardIcon3 = $(this).find('#icon-3'),
            cardIcon4 = $(this).find('#icon-4');


        var tl6 = gsap.timeline();
        tl6.add("start")
            .fromTo(card1, 1, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseOut }, "start")
            .fromTo(card2, 1, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseOut, delay: 0.3 }, "start")
            .fromTo(card3, 1, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseOut }, "start")
            .fromTo(card4, 1, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseOut, delay: 0.3 }, "start")
            .fromTo(cardIcon1, 1, { rotationY: 360, opacity: 0 }, { rotationY: 0, opacity: 1, ease: Power2.EaseOut, delay: 0.6 }, "start")
            .fromTo(cardIcon2, 1, { rotationY: 360, opacity: 0 }, { rotationY: 0, opacity: 1, ease: Power2.EaseOut, delay: 0.9 }, "start")
            .fromTo(cardIcon3, 1, { rotationY: 360, opacity: 0 }, { rotationY: 0, opacity: 1, ease: Power2.EaseOut, delay: 0.6 }, "start")
            .fromTo(cardIcon4, 1, { rotationY: 360, opacity: 0 }, { rotationY: 0, opacity: 1, ease: Power2.EaseOut, delay: 0.9 }, "start")


// An attempt to cut down on some of the repeated code, maybe research this one a bit more
/*        var iconScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: '0.75'
        })
            .setTween(tl6)
            .reverse(false)
            .addTo(scrollMagicController);

            var oddCards = gsap.utils.toArray('.odd-card')
				var tl7 = gsap.timeline();
				oddCards.forEach(oddCard => {
					tl7.add("start")
					.fromTo(oddCard, 1, { y: '70px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseOut }, "start")
				});

				var oddScene = new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: '0.75'
				})
					.setTween(tl7)
					.reverse(false)
					.addTo(scrollMagicController);
    });
});
*/

//slick slider init
$(".ccg-slider-feature__wrapper").slick({
    appendArrows: $('.ccg-slider-feature__controls'),
    appendDots: $('.ccg-slider-feature__controls'),
    arrows: true,
    prevArrow: "<div class='slick-prev icon-prev'>",
    nextArrow: "<div class='slick-next icon-next'>",
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
});

$('.more-less').click(function() {
    $(this).closest('.ccg-content-card__inner').toggleClass('expand');
    $(this).closest('.ccg-content-card__desc').toggleClass('closed');
});

$(function() {
    var body = $('.ccg-logo-hero__card-image--sparkle'),
        template = $('.template.shine'),
        stars =  50,
        sparkle = 10;


    var size = 'small';
    var createStar = function() {
    template.clone().removeAttr('id').css({
        top: (Math.random() * 100) + '%',
        left: (Math.random() * 100) + '%',
        webkitAnimationDelay: (Math.random() * sparkle) + 's',
        mozAnimationDelay: (Math.random() * sparkle) + 's'
        }).addClass(size).appendTo(body);
    };

    for(var i = 0; i < stars; i++) {
        if(i % 2 === 0) {
            size = 'small';
        } else if(i % 3 === 0) {
            size = 'medium';
        } else {
            size = 'large';
        }

    createStar();
    }
});

