
$(document).ready(function () {

	// Кнопка поднятия страницы вверх
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) { // Сколько должен прокрутить чтобы появилась кнопка
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 2000); // Скорость поднятия
		return false;
	});
	//


	//Модальное окно
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
	//



	//Отправка с формы и смена модальных окон
	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});
	//


	//Плавная прокрутка при клике
	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});






});