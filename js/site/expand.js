define(['jquery', 'domReady!'], function ($) {

    $('.expander').siblings('.expanding').css('white-space', 'nowrap').animate({width: 'toggle'}, 0);
    $('.expander').hover(function () {

        $(this).siblings('.expanding').animate({width:'toggle'});

    }, function () {

        $(this).siblings('.expanding').animate({width:'toggle'});

    });

});
