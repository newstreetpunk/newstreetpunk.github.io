$(function() {
	// MOBILE MENU
	// let menu = document.getElementsByClassName('header__menu')[0];

	// $('a.hamburger').on('click', function() {
	// 	if (menu.className === "header__menu") {
	// 		menu.className += " open";
	// 	} else {
	// 		menu.className = "header__menu";
	// 	}
	// });

	// $('.header__menu-link').on('click', function(){
	// 	$('.header__menu').removeClass('open');
	// });

	var input = ('form.search-filter__form .search-filter__select-country input');
	var a = ('.search-filter__select-country .search-filter__select-input_link');
	var input2 = ('form.search-filter__form .search-filter__select-city input');
	var a2 = ('.search-filter__select-city .search-filter__select-input_link');  
	var selectBox3 = ('.search-filter__select-relax .selectBox');
	var selectBox4 = ('.search-filter__select-age .selectBox');

	$('.selectBox, .search-filter__select-country li').on('click', function() {
    $(input).attr('type') === 'hidden' ?
    $(input).prop('type','text'):
    $(input).prop('type' , 'hidden'),
    $(a).css('display') === 'none'?
    $(a).css('display','block'):
    $(a).css('display','none');
  });

  $('.search-filter__select-city .selectBox , .search-filter__select-city li').on('click', function() {
    $(input).prop('type' , 'hidden');
    $(a).css('display','none');
    $(input2).attr('type') === 'hidden' ?
    $(input2).prop('type','text'):
    $(input2).prop('type' , 'hidden'),
    $(a2).css('display') === 'none'?
    $(a2).css('display','block'):
    $(a2).css('display','none');
  });

  $(selectBox3).on('click' , function(){
  	$(input).prop('type' , 'hidden');
  	$(a).css('display','none');
  });
  $(selectBox4).on('click' , function(){
  	$(input).prop('type' , 'hidden');
  	$(a).css('display','none');
  });
  // var mainBox = ('.selectBox');
  	$(selectBox4).on('click', function(){
				$('input#amount').css('display') === 'none'?
				$('input#amount').css('display','block'):
				$('input#amount').css('display','none');
				$('#slider-range').css('display') === 'none'?
				$('#slider-range').css('display','block'):
				$('#slider-range').css('display','none');
			});
});

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 18,
      max: 60,
      values: [ 25, 40 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  	