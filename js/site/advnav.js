// This module defines the behaviours of the Expanding Navigation Panel and it's controls
define(['jquery', 'domReady!'], function ($) {

	$('#l-advnavctl-ctrl').click(function (e) {
	    e.stopImmediatePropagation();
		$('#l-advnav').slideToggle();
		$('#advnavctl-show, #advnavctl-hide').toggle();
	});
    
});