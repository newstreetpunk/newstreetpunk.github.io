$(document).ready(function () {
    var searchItem = '.search-results__item';
    var link = $('.search-results__item-tabs-link');
    link.click(function (e) {
        var _this = $(this);

        var content = _this.closest(searchItem).find(".search-results__item-terms-option, .search-results__item-rests-list, .search-results__item-tabs-content");
        if (_this.hasClass('_active')) return;
        $(_this.closest(searchItem).find('.search-results__item-tabs-link')).removeClass('_active');
        $(_this).addClass('_active');

        var selected_tab = $(this).attr('data-tab');
        content.removeClass('_active');
        content.each(function(){
            if($(this).hasClass(selected_tab)){
                $(this).addClass('_active');
            }
        });
        e.preventDefault();
    });

    var sortDropdown = $('.sort-results__dropdown');
    var openedDropdown;
    var clickedLink;
    $('.sort-results__link').click(function (e) {
        clickedLink = $(this);
        openedDropdown = $(this).nextAll( ".sort-results__dropdown" );
        openedDropdown.slideDown();
        var getContent = $(this).html();
        $('.search-results__sort .select-sex .dropdown-menu').prev('a').html(getContent);
        e.preventDefault();
    });
    $('.sort-results__dropdown-item').click(function (e) {
        var getContent = $(this).html();
        clickedLink.html(getContent);
        e.preventDefault();
    });

    $(document).click(function () {
        if (sortDropdown.is(':animated')) {
            return false;
        }
        sortDropdown.slideUp();
    });
});