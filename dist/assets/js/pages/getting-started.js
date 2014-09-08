(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

window.optly.mrkt.gettingStarted = {};

window.optly.mrkt.gettingStarted.init = function() {
    $('.controls').find('a[data-slide=one]').addClass('active');
};

window.optly.mrkt.gettingStarted.changeSlide = function(input) {
    $('.slider ul').attr('class', '').addClass(input);
    $('.controls a').removeClass('active').parent().find('[data-slide="' + input + '"]').addClass('active');
};

window.optly.mrkt.gettingStarted.handleClick = function(event) {
    event.preventDefault();
    
    var nextSlide = $(this).attr('data-slide');
    window.optly.mrkt.gettingStarted.changeSlide(nextSlide);
};

window.optly.mrkt.gettingStarted.init();
$('[data-slide]').click(window.optly.mrkt.gettingStarted.handleClick);})(jQuery);