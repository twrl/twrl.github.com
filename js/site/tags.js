define(['jquery', 'domReady!'], function ($) {
    
    var widget = $('#l-advnav-tags');
    
    var max = 1;
    
    widget.find('.tag').each(function () {
        var pc = Number($(this).attr('data-tagcount'));
        if (pc > max) { max = pc; }
    }).each(function () {
        
        var pc = Number($(this).attr('data-tagcount')) - 1,
            rel = ((pc / max));
            
	rel *= rel;
	rel = (rel + 1)*100;

        $(this).css("fontSize", rel + "%");
        
    });
    
    
    
});
