// This module defines the behaviours of the Expanding Navigation Panel and it's controls
define(['jquery'], function ($) {

	$(function () {
        $('#l-advnavctl').click(function (e) {
            e.stopImmedatePropagation();
        
            $('#l-advnav').slideToggle();
            $('#advnavctl-show, #advnavctl-hide').toggle();
        
        })
    });
    
});