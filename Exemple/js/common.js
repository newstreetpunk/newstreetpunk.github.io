$(function() {

	let menu = document.getElementsByClassName('top__line-menu')[0];

	$('.top__line-icon').on('click', function() {
		if (menu.className === "top__line-menu") {
			menu.className += " open";
		} else {
			menu.className = "top__line-menu";
		}
	});

		// menu fixed
		var navHeight = 80;
		var nav = $('.top__line-left, .top__line-right');
		var logo = $('.logo_head img');
		var tll = $('.top__line-logo');
		var tli = $('.top__line-icon');
		var tlm = $('.top__line-menu');
		$(window).scroll(function () {
			if ($(this).scrollTop() > navHeight ) {
				nav.addClass("w50").delay(200),
				logo.addClass("sc0").delay(200),
				tll.addClass("sc1").delay(300),
				tli.addClass("sc1").delay(300)
			} else {
				nav.removeClass("w50").delay(200),
				logo.removeClass("sc0").delay(200),
				tll.removeClass("sc1").delay(300),
				tli.removeClass("sc1").delay(300),
				tlm.removeClass('open').delay(300)
			}
		});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
