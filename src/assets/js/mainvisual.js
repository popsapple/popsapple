$(document).ready(function(){
  $('.carousel').carousel();
  var w_height = $(window).height();
  $(".carousel-inner").height(w_height);
  $('.carousel').on('slid.bs.carousel', function () {
  });
});
$(window).resize(function(){
  var w_height = $(window).height();
  $(".carousel-inner").height(w_height);
});
