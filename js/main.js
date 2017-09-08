
$(document).ready(function() {
  // Handler for .load() called.
  var g=document.querySelector('body');
  // g.style.opacity=0;
  // g.style.transition='1s';
  var mask=true,loadingDuration=700,time=1;
  var y=setInterval(function(){

  	if(time===0){
  		mask=false;
        $('body').addClass('maskoff')

  		return
  	}
  	time=0;

  },loadingDuration)

  // $('body').addClass('maskoff')

  // $('#elements').scrolly({
  // 		speed: 5000,
  // 		anchor: 'middle'
  // 	});




});
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});
