require.config({
    baseUrl:        '/js',
    scriptType:     'application/javascript',
    shim: {
        'http://www.google-analytics.com/ga.js': {
            exports: '_gaq'
            }
        },
    config: {
        'site/ga': {
            account:        'UA-33400896-1'
            }
        }
});

require(['site/ga'], function (ga) {
    
    ga.trackPageview();
    
});

require(['jquery', 'site/advnav', 'domReady!'], function ($) {

    
    $('[data-widget]').each(function () {
        
        var widgetModule = $(this).attr('data-widget');
        
        require(['cache!' + widgetModule]);
        
    });
    
});