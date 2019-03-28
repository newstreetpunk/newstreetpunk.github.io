$(function() {
	
	$('.waranty-block__item').each(function(i){
		$(this).children('span').html(+ i + + '1');
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});
