define(['jquery', 'domReady!'], function ($) {

	var ivtop = $('#viewport').scrollTop(),
  	    itoff = $('#s-thumb').offset(),
  	    height = $('#s-track').height() - 30;

	//$('#s-thumb').offset({ top: itoff.top + $('#viewport').scrollTop() - ivtop, left: itoff.left});

	$(document).on('wheel', function (e) {
		var delta = e.DeltaY,
		    lst = $('#viewport').scrollTop();
		// TODO: Delta mode;

		$('#viewport').scrollTop(lst + delta);

	});

	$('#viewport').children().css('position', 'relative');
	$('#viewport').data('scrollpos', 0);
	$('#viewport').data('scrolllim', - $('#viewport').children().last().position().top - $('#viewport').children().last().outerHeight() + $('#viewport').innerHeight())


	var lastScreenY = 0;

	function mousestart(e) {
		$('body').addClass('noSelect');
		lastScreenY = e.originalEvent.clientY;
		$(document).on({ mousemove: mousedrag, mouseup: mousestop });
	}

	function mousedrag(e) {
		var delta = e.originalEvent.clientY - lastScreenY;
		scrollByRel(delta);
		lastScreenY = e.originalEvent.clientY;
	}

	function mousestop(e) {
		var delta = e.originalEvent.clientY - lastScreenY;
		scrollByRel(delta);
		lastScreenY = e.originalEvent.clientY;
		$('body').removeClass('noSelect');
	}

	function touchstart(e) {
		lastScreenY = e.originalEvent.touches[0].clientY;
		$('#viewport').on({ touchmove: touchmove, touchend: touchstop });
	}

	function touchmove(e) {
		var delta = e.originalEvent.touches[0].clientY - lastScreenY;
		scrollByRel(delta);
		lastScreenY = e.originalEvent.touches[0].clientY;
	}

	function touchstop(e) {
		var delta = e.originalEvent.touches[0].clientY - lastScreenY;
		scrollByRel(delta);
		lastScreenY = e.originalEvent.touches[0].clientY;
	}

	$(document).on('mouseup', function () { $(document).off({ mousemove: mousedrag, mouseup: mousestop }); });
	$('#viewport').on('touchend', function () { $('#viewport').off({ touchmove: touchmove, touchend: touchstop }); })

	$(document).on('keydown', function (e) {
		if (e.originalEvent.keyCode == 40) scrollBy(32);
		else if (e.originalEvent.keyCode == 38) scrollBy(-32);
	});

	function totalHeight() {
		var h = 0;
		$('#viewport').children().each(function () {
			h += $(this).outerHeight();
		});
		return h;
	}

	function scrollByRel(delta) {
		var r = totalHeight() / $('#s-track').height();
		scrollBy(delta * r);
	}

	function scrollBy(delta) {
		var lst = $('#viewport').data('scrollpos'),
			lim = $('#viewport').innerHeight() - totalHeight();

		if (lst - delta > 0) {
			$('#viewport').children().css('top', 0);
			$('#viewport').data('scrollpos', 0);
			//$('#viewport').data('scrolllim', - $('#viewport').children().last().position().top - $('#viewport').children().last().outerHeight() + $('#viewport').innerHeight())
		} else if (lst - delta < lim) {
			$('#viewport').children().css('top', lim);
			$('#viewport').data('scrollpos', lim);
		} else {
			$('#viewport').children().css('top', lst - delta);
			$('#viewport').data('scrollpos', lst - delta);
		}

		$('#s-thumb').css('top', height * lst / lim)

	};

	$.fn.scrollTo = function () {
		var a = $(this)[0].offsetTop() - $('#viewport').offsetTop(),
		    pos = $('#viewport').data('scrollpos');
		scrollBy(a + pos);
	}

	$(document).on('MozMousePixelScroll', function (e) {
		scrollBy(e.originalEvent.detail);
	});

	$(document).on('wheel', function (e) {
		scrollBy(e.originalEvent.deltaY);
	})

	$('#s-thumb').on('mousedown', mousestart);

	$('#scrollbar').css('opacity', 0.3).hover(function () { $(this).animate({opacity: 1}); }, function () { $(this).animate({opacity: 0.3})});

});
