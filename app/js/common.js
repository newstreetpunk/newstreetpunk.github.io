$(function() {

	// ВЕРХНЕЕ МЕНЮ, ТАБЫ
	var $allTabs = $('.tab-content > div'),
	$tabMenu = $('.main-menu__link--tab');

	$tabMenu.each(function(i) {
		$(this).attr('data-tab', 'tab'+i);
	});

	$allTabs.each(function(i) {
		$(this).attr('data-tab', 'tab'+i);
	});
	$('body').click(function(){
		$tabMenu.removeClass('active');
		$allTabs.removeClass('active');
	});

	$tabMenu.on('click', function() {

		var dataTab = $(this).data('tab');

		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$tabMenu.removeClass('active');
			$allTabs.removeClass('active');
		} else{
			$tabMenu.removeClass('active');
			$allTabs.removeClass('active');
			$(this).addClass('active');
			$allTabs.filter('[data-tab='+dataTab+']').addClass('active');
		};	
		return false;
	});


	//ПОПАП
	$('.sign-up').magnificPopup();
	$('.sign-in').magnificPopup();

	$('.transaction-link').magnificPopup();

	//МОБАЙЛ МЕНЮ
	$('.mobile-menu i').click(function(){
		$('.toggle-menu').addClass('active');
	});

	$('.toggle-menu .close, .toggle-menu__link').click(function(){
		$('.toggle-menu').removeClass('active');
	});


});
