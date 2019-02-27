$(function() {

		$('.main-mnu').on('click','a', function (event) {
				event.preventDefault();
				$('.main-mnu li').removeClass('active');
				$(this).parent('li').addClass('active');
				var id  = $(this).attr('href'), 
						top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1200);
		});

	$('.modal-link').magnificPopup({
        type: 'inline'
   });

	//E-mail Ajax Send
	$(".m-form").submit(function() { //Change
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


	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
	});

	var h_hght = 90; // высота шапки
	var h_mrg = 0;    // отступ когда шапка уже не видна
								 
	$(function(){
 
		var elem = $('.top-line');
		var top = $(this).scrollTop();
		 
		if(top > h_hght){
				elem.css('top', h_mrg);
		}           
		 
		$(window).scroll(function(){
				top = $(this).scrollTop();
				 
				if (top+h_mrg < h_hght) {
						elem.css('top', (h_hght-top));
				} else {
						elem.css('top', h_mrg);
				}
		});
	});


	$('.works-item__img').append('<span>');
	$('.works-item__img').each(function(i){
		$(this).children('span').html(+ i + + '1');
	});
	
	particlesJS('particles-js', {
	"particles": { /* настройка частиц */
		"number": {
			"value": 80, 
			"density": { /* плотность частиц */
				"enable": true, /* включено/выключено */
				"value_area": 800 /* площадь, по которой частицы рассеяны, чем больше число, тем меньше плотность */
			}
		},
		"color": { /* цвет */
			"value": "#fff"
		},
		"shape": {
			"type": "star", /* форма: "circle", "edge", "triangle", "polygon", "star", "image" */
			"stroke": { /* обводка частиц */
				"width": 0, /* ширина обводки */
				"color": "#fff" /* цвет обводки */
			},
			"polygon": {
				"nb_sides": 5 /* количество сторон полигона (type: polygon), от 3 до 12 */
			},
			"image": { /* картинка, которая будет отображаться при выборе параметра формы type: image */
				"src": "img/github.svg",
				"width": 100, /* ширина картинки */
				"height": 100 /* высота картинки */
			}
		},
		"opacity": { /* прозрачность */
			"value": 0.3, /* значение прозрачности от 0.0 до 1.0 */
			"random": false, /* случайное значение для каждой частцы, но максимальным будет значение value */
			"anim": { /* анимация прозрачности */
				"enable": true, /* включено/выключено */
				"speed": .8, /* скорость анимации */
				"opacity_min": 0.1, /* минимальная прозрачность анимации */
				"sync": false /* анимация для всех частиц происходит синхронно или нет */
			}
		},
		"size": { /* размер */
			"value": 4, /* значение размера */
			"random": true, /* случайный размер */
			"anim": { /* анимация изменения размера частиц */
				"enable": true, /* включено/выключено */
				"speed": 4, /* скорость анимации */
				"size_min": 0.3, /* минимальный размер частицы */
				"sync": false /* анимация для всех частиц происходит синхронно или нет */
			}
		},
		"line_linked": { /* связующие линии */
			"enable": true, /* включено/выключено */
			"distance": 200, /* расстояние между частицами, при котором проявляется линия */
			"color": "#ccc", /* цвет */
			"opacity": 0.1, /* прозрачность */
			"width": 2 /* ширина */
		},
		"move": { /* движение */
			"enable": true, /* включено/выключено */
			"speed": 6, /* скорость движения */
			"direction": "none", /* направление: none (хаотично), top, top-right, right, bottom-right, bottom, bottom-left, left, top-left */
			"random": true, /* скорость движения для каждой частицы случайна */
			"straight": false, /* движение строго в указанном направлении */
			"out_mode": "out", /* out (частицы выходят за пределы экрана) или bounce (не выходят за пределы) */
			"bounce": true, /* частицы отталкиваются друг от друга или нет */
			"attract": { /* притяжение частиц друг к другу */
				"enable": false, /* включено/выключено */
				"rotateX": 600, /* притяжение по горизонтали */
				"rotateY": 1200 /* притяжение по вертикали */
			}
		}
	},
	"interactivity": { /* интерактивность */
		"detect_on": "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
		"events": { /* события */
			"onhover": { /* по наведению */
				"enable": true, /* включено/выключено */
				"mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
			},
			"onclick": { /* по клику */
				"enable": true, /* включено/выключено */
				"mode": "push" /* push (добавление новых частиц), remove (удаление частиц), bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
			},
			"resize": true /* я не понял на что влияет этот параметр, экспериментируйте =) */
		},
		"modes": { /* параметры видов событий */
			"grab": { /* при onhover: mode: grab */
				"distance": 800, /* расстояние от мышки до частиц, при котором проявляются линии */
				"line_linked": {
					"opacity": 1 /* прозрачность линий */
				}
			},
			"bubble": { /* при onhover или onclick: mode: bubble */
				"distance": 800, /* расстояние от мышки до частиц, при котором происходит эффект */
				"size": 80, /* размер увеличения частиц */
				"duration": 2, /* продолжительность эффекта в секундах при клике */
				"opacity": 0.8, /* максимальная прозрачность */
				"speed": 3 /* скорость эффекта */
			},
			"repulse": { /* при onhover или onclick: mode: repulse */
				"distance": 100, /* расстояние отталкивания */
				"duration": 0.4 /* продолжительность отталкивания */
			},
			"push": { /* при onclick: mode: push */
				"particles_nb": 4 /* количество добавляемых частиц */
			},
			"remove": { /* при onclick: mode: remove */
				"particles_nb": 2 /* количество убираемых частиц */
			}
		}
	},
	"retina_detect": true /* поддержка ретина-дисплеев */
}, function(){ /* Вызываем callback-функцию */
	console.log('callback - particles.js загружен!');
});

});
