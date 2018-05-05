$(function() {

	// menu fixed
	window.onscroll = function() {
		headerFixed()
	};

	var header = document.querySelector(".header");

	var sticky = header.offsetTop;

	headerFixed();

	function headerFixed() {
		if (window.pageYOffset > sticky) {
			header.classList.add("header_fixed");
			$('.header-hide').fadeIn(250);
			$('.header-show').fadeOut(0);
		} else {
			header.classList.remove("header_fixed");
			$('.header-hide').fadeOut(0);
			$('.header-show').fadeIn(250);
		}
	}
	// /menu fixed

	// mobile menu
	$('.btn-menu-toggle').click(function () {
		$(this).find('.lines').toggleClass('lines_active');
		$('.header-menu-list').toggleClass('header-menu-list_active');
	});
	// /mobile menu

	// slider-full-width
	$('.slider-full-width').slick({
		rtl: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true
	})
	// /slider-full-width

	// smooth-scrolling
	$('a[href^="#"]').click(function(){
		var target =  $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - 100
		}, 1000);
		return false;
	});
	// /smooth-scrolling

});
