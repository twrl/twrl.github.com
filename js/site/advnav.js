// This module defines the behaviours of the Expanding Navigation Panel and it's controls
define(['jquery', 'domReady!'], function ($) {

        $('#l-advnav').hide();
        $('#l-advnavctl').show();
        
        $('#advnavctl-show').click(function (e) {
            
            e.stopPropagation();
            
            $('#l-advnav').slideDown();
            $('#advnavctl-show').hide();
            $('#advnavctl-hide').show();
            
        });
    
        $('#advnavctl-hide').click(function (e) {
            
            e.stopPropagation();
            
            $('#l-advnav').slideUp();
            $('#advnavctl-hide').hide();
            $('#advnavctl-show').show();
            
        })
    
});