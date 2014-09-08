(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

window.optly.mrkt.benefitsLayout = {};

window.optly.mrkt.benefitsLayout.menuHandlers = function() {

  $('body').delegate('.for-menu', 'click', function(event) {
    event.stopPropagation();
    $(this).toggleClass('shown');
  });

  /* Close menu when clicking away */
  $('html').click(function() {
    $('.for-menu').removeClass('shown');
  });
};

window.optly.mrkt.benefitsLayout.menuOrder = function() {
  /* Changes the order of menu items and disables the current link */

  var currentPage     = $('.for-menu').attr('data-current').split('/')[1],
      currentMenuItem = $('.for-menu').find('a[href*=' + currentPage + ']');

  $(currentMenuItem).removeClass('hide').removeAttr('href').parent().insertBefore($('.for-menu li:first'));
};

window.optly.mrkt.benefitsLayout.menuHandlers();
window.optly.mrkt.benefitsLayout.menuOrder();})(jQuery);