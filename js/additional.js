// Fixed navigation

$(function(){
 var topPos = $('#nvgtn').offset().top;
 if ($(window).width() > 767) {   

 $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > topPos) $('#nvgtn').addClass('fixed'); 
  else $('#nvgtn').removeClass('fixed');
 });     
}
});


// Active navigation

$(function(){
 var topPosIn = $('#integration').offset().top - 150;
 var topPosBa = $('#backup').offset().top - 150;
 var topPosRe = $('#recovery').offset().top - 150;
  
 var hIn = topPosIn + $('#integration').height();   
 var hBa = topPosBa + $('#backup').height();
 var hRe = topPosRe + $('#recovery').height();   
    
 $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > topPosIn && top < hIn) $('#intgrshn').addClass('active'); 
  else $('#intgrshn').removeClass('active');    
 });
  
  $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > topPosBa && top < hBa) $('#bckp').addClass('active'); 
  else $('#bckp').removeClass('active');    
 });
    
   $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > topPosRe && top < hRe) $('#rcvr').addClass('active'); 
  else $('#rcvr').removeClass('active');    
 }); 
    
    
});