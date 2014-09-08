(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

window.optly.mrkt.faq = {};

window.optly.mrkt.faq.accordion = function() {
  /* Click handlers for accordion */

  var question    = $('.accordion').find('a.question'),
      answer      = $('.accordion').find('.answer'),
      expandAll   = $('.expand-all'),
      collapseAll = $('.collapse-all');

  $(question).click(function(event) {
    event.preventDefault();

    $(this).toggleClass('open').next('.answer').slideToggle('fast');
  });

  $(expandAll).click(function(event){
    event.preventDefault();

    $(question).addClass('open');
    $(answer).slideDown('fast');
  });

  $(collapseAll).click(function(event){
    event.preventDefault();

    $(question).removeClass('open');
    $(answer).slideUp('fast');
  });
};

window.optly.mrkt.faq.accordion();})(jQuery);