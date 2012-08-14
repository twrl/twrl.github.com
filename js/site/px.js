define(['jquery', 'site/ga', 'domReady!'], function ($, ga) {
    
    $('a').click(function (e) {
        
        e.preventDefault();
        
        var href = $(this).attr('href')
        
        $.get(href, function (data) {
            var resp = $('<html/>').html(data);
                respart = $('article', resp);
            $('article').slideUp(2000)
                    .last().after(respart);
            respart.slideDown(2000);
        });
    });
    
});