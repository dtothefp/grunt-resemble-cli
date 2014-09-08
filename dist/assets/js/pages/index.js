(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

window.optly.mrkt.index = {};

window.optly.mrkt.index.testItOut = function(editURL){

  //send user to the editor
  window.location = 'https://www.optimizely.com/edit?url=' + editURL;

};

$('input[type="text"]').focus();

$('#test-it-out-form').submit(function(e){

  var inputVal = $('input[type="text"]').val();

  if( inputVal ){

      window.optly.mrktEng.index.testItOut( inputVal );

  } else {

    $('input[type="text"]').focus();

  }

  e.preventDefault();

});
})(jQuery);