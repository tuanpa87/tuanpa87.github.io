
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



	var countDownDate = new Date("Nov 30, 2017 18:00:00").getTime();
	// Update the count down every 1 second
	var x = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	$('#days').text(days);
	$('#hours').text(hours);
	$('#minutes').text(minutes);
	$('#second').text(seconds);

	}, 1000);
});





