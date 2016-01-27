
	
    /*===================
   1.Parallax
    ===================*/
  !function(n){var t=n(window),e=t.height();t.resize(function(){e=t.height()}),n.fn.parallax=function(o,i,r){function u(){var r=t.scrollTop();a.each(function(){var t=n(this),u=t.offset().top,c=h(t);r>u+c||u>r+e||a.css("backgroundPosition",o+" "+Math.round((l-r)*i)+"px")})}var h,l,a=n(this);a.each(function(){l=a.offset().top}),h=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===o)&&(o="50%"),(arguments.length<2||null===i)&&(i=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",u).resize(u),u()}}(jQuery);
  
   /*===================
  2.Parallax banner 
    ===================*/
  
  (function($){
    "use strict";

    $(document).ready(function(){
      $('#lp-pom-block-10').parallax("50%", 0.3);
	   
		
   
    }); 
	
	
	$("#arrow").on("click",function() {
    $('html, body').animate({
        scrollTop: $("#benefits-container").offset().top
    }, 2000);
});
	
	
	$("#request-btn").on("click",function() {
    $('html, body').animate({
        scrollTop: $("#formrequest").offset().top
    }, 2000);
});

 
  


	 /*===================
  3.Scroll Top
    ===================*/				   

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).on("scroll",function() {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').on("click",function() {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	

	
	    
  
	
 })(jQuery);