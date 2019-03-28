$(function() {
	
	$('.waranty-block__item').each(function(i){
		$(this).children('span').html(+ i + + '1');
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$('.mobile-btn').click(function(){
		$(this).toggleClass('active');
		$('.evik-menu').toggleClass('active');
	});
	$('.evik-menu ul li a').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.evik-menu').removeClass('active');
	});

});
