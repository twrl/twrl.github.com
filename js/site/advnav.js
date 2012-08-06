// This module defines the behaviours of the Expanding Navigation Panel and it's controls
define(['jquery'], function ($) {

	$($('#l-advnavctl-ctrl').click(function () {
		$('#l-advnav').slideToggle();
		$('#advnavctl-show, #advnavctl-hide').toggle();
	}));
    
});