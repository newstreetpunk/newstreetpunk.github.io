$('.search-results__item-rests-list').addClass('owl-carousel');
$(document).ready(function () {
    $('.search-results__item-rests-list').each(function () {
        $(this).owlCarousel({
            loop:false,
            margin:8,
            nav:true,
            dots: false,
            responsive:{
                0:{
                    items:4
                },
                480:{
                    items:6
                },
                640:{
                    items:10
                },
                768:{
                    items:12,
                    touchDrag: false,
                    mouseDrag: false
                }
            }
        })
    })
});