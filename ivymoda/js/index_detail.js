$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $("#topBar").addClass("darkHeader");
    } else {
        $("#topBar").removeClass("darkHeader");
    }
});
    jQuery(document).ready(function($) {
        $('.fadeOut').owlCarousel({
        items: 5,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000,
        });
        $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
        });
    });