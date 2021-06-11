$(function() {
  
  $('.description-program__caption').on('click', function() {
    $(this).next('.program-list').slideToggle();
    $(this).toggleClass('is-active');
  });

  var $hiddenMenu = $('.hidden-menu');
  var $hamburger = $('.navigation__hamburger');
  $hamburger.on('click', function(e) {
    $hamburger.toggleClass('is-active');
    $hiddenMenu.toggleClass('is-active');
  });

})