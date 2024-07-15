(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area").addClass("");
        } else {
            $(".navbar-area").removeClass("");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area .main-nav").addClass("");
        } else {
            $(".navbar-area .main-nav").removeClass("");
        }
    });

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

   
   
    $(".banner-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        autoplay: true,
        loop: true,
        dots: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
        },
    });
    
	
	$(".testimonial-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        autoplay: true,
        loop: true,
        dots: true,
        margin: 30,
		 items: 2,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
			 991: {
                items: 2,
            },
        },
    });
	
	
	
	
	
	 $(".meet-team-slider").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        autoplay: true,
        loop: true,
        dots: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
        },
    });
	
	
	
	
	
	



	
	
	
	// Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

	
	
	
	
	
   
  

   // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }

})(jQuery);



