$(document).ready(function(){
	$('#product-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		nav: false,
		dots: false,
		navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
		margin:10,
		responsive:{
			0:{
				items:2
			},

			425:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			}
		}
	})

	$('#customer-say-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
		margin:10,
		responsive:{
			0: {
				items:1
			},

			425:{
				items:1
			},
			
			768:{
				items:2
			},
			992:{
				items:3
			}
		}
	})

	$('#home-newproduct-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
		margin:10,
		responsive:{
			0: {
				items:1
			},

			425:{
				items:2
			},
			
			768:{
				items:3
			},

			1024:{
				items:4
			}

		}
	})

	$('#promotion-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'></i>"],
		margin:10,
		responsive:{
			0: {
				items:1
			},

			425:{
				items:2
			},
			
			768:{
				items:3
			},

			1024:{
				items:4
			}

		}
	})



});



