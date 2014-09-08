(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

$('#opt-out-input').keyup(function(){

  var newValue = $(this).val() + '?optimizely_opt_out=true';

  $('#opt-out-anchor').attr('href', newValue).text(newValue);

});
})(jQuery);