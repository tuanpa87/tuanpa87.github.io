<<<<<<< HEAD



$(document).ready(function(){
	// Javascript to enable link to tab
	var hash = document.location.hash;
	var prefix = "tab_";
	if (hash) {
	    $('.nav-tabs a[href="'+hash.replace(prefix,"")+'"]').tab('show');
	} 

	// Change hash for page-reload
	$('.nav-tabs a').on('shown.bs.tab', function (e) {
	    window.location.hash = e.target.hash.replace("#", "#" + prefix);
	});


=======
$(document).ready(function(){
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c
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
<<<<<<< HEAD

=======
			
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c
			768:{
				items:2
			},
			992:{
				items:3
			}
		}
	})

<<<<<<< HEAD

=======
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c
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
<<<<<<< HEAD

=======
			
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c
			768:{
				items:3
			},

			1024:{
				items:4
			}

		}
	})

<<<<<<< HEAD

=======
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c
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
<<<<<<< HEAD

=======
			
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c
			768:{
				items:3
			},

			1024:{
				items:4
			}

		}
	})


<<<<<<< HEAD
	var eventFired = 0;

	if ($(window).width() < 768) {
		$("#product-detail-nav-tab").addClass("responsive-tabs")
		$("#cs-nav-tab").addClass("responsive-tabs")

	}
	else {
		$("#product-detail-nav-tab").removeClass("responsive-tabs");
		$("#cs-nav-tab").removeClass("responsive-tabs")
		eventFired = 1;
	}



	$(window).on('resize', function() {
		if (!eventFired) {
			if ($(window).width() < 768) {
				$("#product-detail-nav-tab").addClass("responsive-tabs")
				$("#cs-nav-tab").addClass("responsive-tabs")

			} else {
				$("#product-detail-nav-tab").removeClass("responsive-tabs")
				$("#cs-nav-tab").removeClass("responsive-tabs")
			}
		}
	});


	$('.responsive-tabs').responsiveTabs({
	accordionOn: ['xs'] // xs, sm, md, lg
	});

=======
>>>>>>> b0e743949ff3cb891fadf58cc8e279530295309c

});



