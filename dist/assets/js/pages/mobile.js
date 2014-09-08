(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

function animShowSlide($parent, last) {
  if($parent.offset().top <= $(document).scrollTop() + window.innerHeight * 0.6 ) {
    $parent.children('.container').addClass('enter');
    if (last) {
      $(window).off('load scroll');
    }
  } 
}

function logSegment(sEvent, category, label, value) {
  var data = {
    category: category,
    label: label,
    value: value
  };

  for(var type in data) {
    if(data[type] === undefined) {
      delete data[type];
    }
  }

  window.analytics.track(sEvent, data);
}

$(function() {
  var $textDisplay         = $('#visual-change-button'),
    $textInput             = $('#visual-change-input'),
    animParents            = [$('#flexible-powerful'), $('#trusted')],
    $buttonCont            = $('#visual-change-button'),
    $visualChangePhoto     = $('#visual-change-photo'),
    $flexiblePowerfulPhone = $('#flexible-powerful .container'),
    $deployCont            = $('#deploy-graphic-cont'),
    queryString            = document.location.search,
    urlParams              = queryString.substr(1, queryString.length),
    fullUrl                = $('.sign-up-btn').attr('href') + '&' + urlParams;

  //this is potentially antiquated, assuming it has to do with animations
  $('body').addClass('loaded');

  //add url parameter to the sign up button
  $('.sign-up-btn').attr('href', fullUrl);

  //create the parallax panel entry animation
  if ( !window.optly.mrkt.isMobile() ) {
    $(window).on('load scroll', function() {
      $.each(animParents, function(index, $elm) {
        if(index === animParents.length - 1) {
          animShowSlide($elm, true);
        } else {
          animShowSlide($elm);
        }
      });
    });
  }

  //track text input for the iphone button interaction on update text in the display
  (function() {
    var keyupLog = 0;
    $textInput.keyup(function() {
      var inputVal = $textInput.val();
      $textDisplay.text(inputVal);
      if (keyupLog < 10) {
        logSegment('input keyup', 'Mobile landing page', 'text change', inputVal);
        keyupLog += 1;
      }
    }); 
  })();
  
  //track color change for iphon button interaction
  $('#visual-change-color').on('click', '.color-btn', function(e) {
    var color = $(e.target).attr('id').replace('visual-change-', '');
    e.preventDefault();
    $buttonCont.removeAttr('class').addClass(color);
    logSegment('button click', 'Mobile landing page', 'color change', color);
  });

  //track slider interaction
  $('.visual-slider-cont').on('click', function() {
    var slider = $(this).attr('id'), 
      segmentLabel;

    if ($(this).hasClass('a')) {
      $(this).removeClass('a').addClass('b');

      if (slider === 'visual-change-slider') {
        $visualChangePhoto.removeClass('a').addClass('b');
        segmentLabel = 'visual change';
      } else {
        $flexiblePowerfulPhone.removeClass('a').addClass('b');
        segmentLabel = 'flexible powerful';
      }

      logSegment('slider click', 'Mobile landing page', segmentLabel, 'b');
    } else {
      $(this).removeClass('b').addClass('a');

      if (slider === 'visual-change-slider') {
        $visualChangePhoto.removeClass('b').addClass('a');
        segmentLabel = 'visual change';
      } else {
        $flexiblePowerfulPhone.removeClass('b').addClass('a');
        segmentLabel = 'flexible powerful';
      }

      logSegment('slider click', 'Mobile landing page', segmentLabel, 'a');
    }
  });
  
  //track deploy button interaction
  $('#deploy-btn').on('click', function(e) {
    e.preventDefault();
    if (!$deployCont.hasClass('deployed')) {
      $deployCont.addClass('deployed');
      logSegment('deploy click', 'Mobile landing page');
    }
  });

});
})(jQuery);