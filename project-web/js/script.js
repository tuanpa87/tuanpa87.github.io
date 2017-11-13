
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backTop").style.display = "block";
    } else {
        document.getElementById("backTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}



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


});




