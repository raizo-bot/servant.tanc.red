$(document).ready(function() {
	/* MOBILE NAVIGATION */
	$(".burger-icon").on("click", function() {
		if($(".main-nav" ).hasClass( "mobile-hide" )){
		    $(".main-nav").removeClass("mobile-hide");
		    $(".main-nav").addClass("mobile-show");
		} else {
		      $(".main-nav").addClass("mobile-hide");
		      $(".main-nav").removeClass("mobile-show");
		}
	});

	/* COMMAND CATEGORIES */
 	$(".commands-burger-icon").on("click", function() {
		if($(".commands-nav" ).hasClass( "mobile-hide" )){
		    $(".commands-nav").removeClass("mobile-hide");
		    $(".commands-nav").addClass("mobile-show");
		} else {
		      $(".commands-nav").addClass("mobile-hide");
		      $(".commands-nav").removeClass("mobile-show");
		}
	});
});


(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    window.requestAnimationFrame = requestAnimationFrame;
})();