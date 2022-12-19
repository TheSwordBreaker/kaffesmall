// custom_js.js

jQuery(document).ready(function() { 

	$('#tabs li a:not(:first)').addClass('inactive');
	$('.tabcontainer').hide();
	$('.tabcontainer:first').show();
	$('#tabs li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ //this is the start of our condition 
			$('#tabs li a').addClass('inactive');           
			$(this).removeClass('inactive');

			$('.tabcontainer').hide();
			$('#'+ t + 'C').fadeIn('slow');
		}
	});
	
	$('.review-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:false,
        dots:false,
        loop: true,
        autoplay: 6000,
        smartSpeed: 4000,
        responsiveClass:true,
    });
    
    $('.homerecent_post').owlCarousel({
		loop:true,
		margin:10,
		dots: true,
		nav:true,
		navText : ["<i class='fa fa-arrow-circle-o-left' aria-hidden='true'></i>","<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i>"],
		responsive:{
		    0:{
		        items:1
		    },
		    600:{
		        items:2
		    },
		    1000:{
		        items:3
		    }
		}
	});

});
