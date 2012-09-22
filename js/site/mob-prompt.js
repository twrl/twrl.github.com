require(['jquery', 'jquery/colorbox', 'jquery/cookie'], function ($) {

    if ($('#mobihinter').css('display') == 'none' ) {
        if ($.cookie('use-mobile') == null) {
            $.colorbox({ href: '#mob-prompt-box', inline: true, open: true });
        } else if ($.cookie('use-mobile') == 'yes') {
            document.location.href = './mobile.html';
        }
    }

    $('#mob-prompt-no').click(function () {
        $.cookie('use-mobile', 'no', { path: '/'});
	$.colorbox.close();
    });

    $('#mob-prompt-yes').click(function () {
        $.cookie('use-mobile', 'yes', { path: '/'});
	$.colorbox.close();
        document.location.href = './mobile.html';
    });

});
