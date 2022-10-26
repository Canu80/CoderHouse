jQuery('document').ready(function ($) {
    var menuBtn = $('.menu_icon'),
        menu = $('.header__nav ul');

    menuBtn.click(function () {

        if( menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
        
    });

});