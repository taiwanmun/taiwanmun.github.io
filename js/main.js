
$(document).ready(function() {
  // Handler for .load() called.
  var g=document.querySelector('body');
  // g.style.opacity=0;
  // g.style.transition='1s';
  console.log(`${10+10}`);
  var mask=true,loadingDuration=700,time=1;
  var y=setInterval(function(){

  	if(time===0){
  		mask=false;
        $('body').addClass('maskoff')

  		return
  	}
  	time=0;
  	console.log(mask);

  },loadingDuration)

  // $('body').addClass('maskoff')

  $('#elements').scrolly({
				speed: 1000,
				anchor: 'middle'
			});




});
