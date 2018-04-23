$(document).ready(function () {
    $('select.customize').tzSelect({
        render: function (option) {
            if (option.data('image')) {
                var img = '<i class="' + option.data('image') + '" />';
            }
            else {
                var img = '';
            }
                return $('<li>', {
                    html: img + '<span>' + option.data('html-text') + '</span>'
            });
        },
        className: 'hasDetails'
    });
    $('select.regularSelect').tzSelect();
});

(function($){

    $.fn.tzSelect = function(options){
        options = $.extend({
            render : function(option){
                return $('<li>',{
                    html : option.text()
                });
            },
            className : ''
        },options);

        return this.each(function(){

            // The "this" points to the current select element:

            var obj = this;
            var select = $(this);

            var selectBoxContainer = $('<div>',{
                width       : select.outerWidth(),
                class   : 'tzSelect',
                html: '<div class="selectBox"></div><div class="selecBoxing"></div>'
            });

            var dropDown = $('<ul>',{class:'dropDown'});
            var selectBox = selectBoxContainer.find('.selectBox');
            var selectBox2 = selectBoxContainer.find('.selecBoxing');

            // Looping though the options of the original select element

            if(options.className){
                dropDown.addClass(options.className);
            }

            select.find('option').each(function(i){
                var option = $(this);

                if(i==obj.selectedIndex){
                    selectBox.html(option.text());
                }

                // As of jQuery 1.4.3 we can access HTML5
                // data attributes with the data() method.

                if(option.data('skip')){
                    return true;
                }

                // Creating a dropdown item according to the
                // data-icon and data-html-text HTML5 attributes:

                var li = options.render(option);

                li.click(function(){
                    var smallIcon;
                    if (option.data('icon')){
                            smallIcon = '<i class="' + option.data('icon') + '" /></i>';
                    }
                    else if (option.data('image')) {
                            smallIcon = '<i class="' + option.data('image') + '" />';
                    }
                    else {
                        smallIcon = '';
                    }
                    selectBox2.html(smallIcon + option.text());;
                    dropDown.trigger('hide');
                    $('.tzSelect').addClass('bgc-select');
                    // When a click occurs, we are also reflecting
                    // the change on the original select element:
                    select.val(option.val());
                    select.val(option.val());
                    selectBox.addClass('selecteds');
                    selectBox2.addClass('selecteds');
                    $("form:first").trigger("submit");
                    return false;
                });

                dropDown.append(li);
            });

            selectBoxContainer.append(dropDown.hide());
            select.hide().after(selectBoxContainer);

            // Binding custom show and hide events on the dropDown:

            dropDown.bind('show',function(){

                if(dropDown.is(':animated')){
                    return false;
                }

                selectBox.addClass('expanded');
                $('.search-filter__select').removeClass('expanded');
                selectBox.closest('.search-filter__select').addClass('expanded');
                dropDown.slideDown();

            }).bind('hide',function(){

                $('<ul>', {className: 'dropDown'}).removeClass('expanded');

                selectBox.removeClass('expanded');
                dropDown.slideUp();

            }).bind('toggle',function(){
                if(selectBox.hasClass('expanded')){
                    dropDown.trigger('hide');
                }
                else dropDown.trigger('show');
                $('.dropDown').not(dropDown).trigger('hide');
            });

            selectBox.click(function(){
                dropDown.trigger('toggle');
                return false;
            });

            // If we click anywhere on the page, while the
            // dropdown is shown, it is going to be hidden:

            $(document).click(function(){
                dropDown.trigger('hide');
            });

        });
    }

})(jQuery);