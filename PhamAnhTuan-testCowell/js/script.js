
$(document).ready(function(){
	$('#slider').owlCarousel({
		// animateOut: 'slideOutDown',
		// animateIn: 'flipInX',
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		stagePadding: 0,
		loop: true,
		items:1,
		dots: false,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay: true,
		autoplayTimeout: 3000,
	});

});



