jQuery(document).ready(function($) {

    $('.homepage-slider').owlCarousel({
        loop: true,
        nav: false,
        lazyLoad: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

} );
