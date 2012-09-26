define(['jquery', 'domReady!'], function ($) {
	
	$('#markdown-toc').prev('h2').remove();
	$('#markdown-toc').detach().prependTo('#l-article-toc');

	$('#l-article-toc li a').click(function() {
		$($(this).attr('href')).scrollTo();
	});

	var up = $('<a href="#">To Top</a>');
	up.append('<img src="/images/icons/19.png" class="icon"/>');
	up.click(function () {
		$('html,body').animate({scrollTop: 0});
	});
	var l = $("<span></span>");
	l.css('font-size', '10pt').css('font-weight', 'normal').css('float', 'right').append(up);

	$('h1, h2, h3, h4, h5', $('article .content')).append(l);

});
