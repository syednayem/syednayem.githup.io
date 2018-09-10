/*===================================
            header nav
=====================================*/

    $(window).scroll(function(){

        var top =$(window).scrollTop();
        if(top>=50){
            $(".navbar").addClass('dark-blue-bg');
        }

        else
            if($(".navbar").hasClass('dark-blue-bg')){
                $(".navbar").removeClass('dark-blue-bg');
            }
    });


/*===================================
            ityped
=====================================*/

		window.ityped.init(document.querySelector('#ityped'), {
            strings : ['UI Designer','UX Designer', 'Web Devloper', 'Programmer'],
            loop : true
        });





/*===================================
            SmoothScroll
=====================================*/

var scroll = new SmoothScroll('a[href*="#"]', {

	// Speed & Easing
	speed: 900, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. 
});




/*===================================
            Portfolio 
=====================================*/
$(window).on('load', function () {
    //initialize isotop
    $("#isotope-container").isotope({});
    // filter items on button click
    $("#isotop-filters").on('click', 'button', function () {
        // get filter  value
        var filterValue = $(this).attr('data-filter');
        //  filter  portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active button
        $("#isotop-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});



/*===================================
            counterUp
=====================================*/

            $('.counter').counterUp({
                delay: 10,
                time: 2500
            });




/*===================================
            owl carousel
=====================================
$('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
    autoplay:true,
    mouseDrag: true,
    autoplayTimeout:3500,
    autoplayHoverPause:false
});




/*===================================
            magnific-popup
=====================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a'
        , type: 'image'
        , gallery: {
            enabled: true
        }
    });
});


