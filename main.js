function scrollToAnchor(aid){
    var aTag = $(aid);
    // console.log(aTag.is(":visible"))
    if(aTag.is(":visible")){ //if content is showing
      $('html,body').animate({scrollTop: $('.comm_logo').offset().top-100},'slow');
      $('#toggle_button').hide();
    }
    else{
      $('html,body').animate({scrollTop: $('#comm_content_box').offset().top-300},'slow');
      $('#toggle_button').css('display','block');
    }
}
function hideAll(c){

  $('.comm_content').each(function(i, obj) {
    if($(this).attr('id') != c){
      $(this).hide('slow');
    }
  });
}
$(function(){
  /////smooth scroll (seems not working)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  //// scollr( parallax animation)
  var scrollr_funtion = 0;
  if($(window).width()> 760){
    var s = skrollr.init({
      easing:{
      }
    });
    scrollr_funtion = 1;
  }
  // $(window).resize(function(){
  //   if($(window).width()> 760 && scrollr_funtion==0){
  //     var s = skrollr.init({
  //       easing:{
  //       }
  //     });
  //     scrollr_funtion = 1;
  //   }
  //   else if ($(window).width()> 760 && scrollr_funtion==1) {
  //     scrollr_funtion = 1;
  //   }
  //   else if ($(window).width()<= 760 && scrollr_funtion==0) {
  //     scrollr_funtion = 0;
  //   }
  //   else{
  //     console.log('smaller ');
  //     scrollr.destroy();
  //     scrollr_funtion = 0;
  //   }
  // });



  $(window).scroll(function(){
    // console.log($('#section_committee').offset().top-100)
    if($(this).scrollTop() >= $('#section_intro').offset().top-100){
      $('.navbar').css({
        "background-color": "white"
      });
    }
    else{
      $('.navbar').css({
        "background-color": "transparent"
      });
    }
    if($(this).scrollTop() >= $('#section_intro').offset().top-600){
      $('#section_intro *').css({
        'opacity': '1',
        'transition': '1.3s',
        'transform': 'translateY(0px)'
      })
    }
    else{
      $('#section_intro *').css({
        'opacity': '0',
        'transition': '1.3s',
        'transform': 'translateY(80px)'
      })
    }
    // if($(this).scrollTop() < $('#section_intro').offset().top-400){
    //   $('#section_intro #taiwan_logo').animate({
    //     opacity: '0',
    //   })
    //   // console.log("hah")
    // }

  })

  $('#unsc').click(function() {

    hideAll('unsc_content');
    scrollToAnchor('#unsc_content');
    $( '#unsc_content' ).toggle('fold');

  });
  $('#disec').click(function() {

    hideAll('disec_content');
    scrollToAnchor('#disec_content');
    $( '#disec_content' ).toggle('fold');

  });
  $('#uncsw').click(function() {

    hideAll('uncsw_content');
    scrollToAnchor('#uncsw_content');
    $( '#uncsw_content' ).toggle( 'fold' );

  });
  $('#unhcr').click(function() {

    hideAll('unhcr_content');
    scrollToAnchor('#unhcr_content');
    $( '#unhcr_content' ).toggle( 'fold' );

  });
  $('#crisis').click(function() {

    hideAll('crisis_content');
    scrollToAnchor('#crisis_content');
    $( '#crisis_content' ).toggle( 'fold' );

  });

  $('#toggle_button').click(function(){
    hideAll('comm_content');
    scrollToAnchor('#unsc');
  })

  $("comm_logo").click(function(){
    $("hr").css('margin','0')
  });

  // $('.navbar-nav').
});
