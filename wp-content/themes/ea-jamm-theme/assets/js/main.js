$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

	// Toggle Collapse
	$('.faq li .question').click(function () {
		$(this).find('.plus-minus-toggle').toggleClass('collapsed');
		$(this).parent().toggleClass('active');
	});
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});

	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	$('img.mb-3.mx-auto.logo').click(function() {      // When arrow is clicked
		$('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	$("a.nav-link").click(function(e){
		$('html, body').animate({
			scrollTop: $(e.target.hash).offset().top - 15
		});  
		$(this).parent().siblings().removeClass('active');
		var $parent = $(this).parent();
	    $parent.addClass('active');
	});

	$(".button").click(function(e){
		$('html, body').animate({
			scrollTop: $(e.target.hash).offset().top - 15
		});  

	});

	window.addEventListener('load', () => {
		const headings = document.querySelectorAll('section');
		var topMenu = $(".navbar-nav"),
		topMenuHeight = topMenu.outerHeight()+15,
	    menuItems = topMenu.find("a");

		document.addEventListener('scroll', (e) => {
			headings.forEach(ha => {
				const rect = ha.getBoundingClientRect();
				if(rect.top > 0 && rect.top < 150) {	
					if(ha.id != "presentation")
					{
						const location = window.location.toString().split('#')[0];
						history.replaceState(null, null, location + '#' + ha.id);
						//console.log(menuItems.filter("[href='/ea-jamm/#"+ha.id+"']").parent()[0].classList);
						if(menuItems.filter("[href='/ea-jamm/#"+ha.id+"']").parent()[0].classList.contains("active")){
						}
						else
						{
							menuItems
							.parent().removeClass("active")
							.end().filter("[href='/ea-jamm/#"+ha.id+"']").parent().addClass("active");
						}
					}
					else
					{
						menuItems
						.parent().removeClass("active")
						const location = window.location.toString().split('#')[0];
						history.replaceState(null, null, location);
					}
				}
			});
		});
	});

});