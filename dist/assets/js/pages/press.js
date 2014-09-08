(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

$(function() {
  var $showBtn = $('.show-more'),
    $hideBtn   = $('.hide-more'),
    pressItems = Array.prototype.slice.call( document.getElementsByClassName('press-feed-item') ),
    sliced,
    hiddenItems = [],
    showCount = 0,
    increment = 10;

  for (var i = 20; i < pressItems.length; i += 10) {
    if (increment <= pressItems.length - i) {
      sliced = pressItems.slice(i, i + increment);
    } else {
      sliced = pressItems.slice(i, pressItems.length);
    }
    hiddenItems.push(sliced);
  }

  $showBtn.on('click', function() {
    var incr = 100;

    if(showCount === hiddenItems.length - 1) {
      $('.sheet').css('min-height',  ($('.sheet').outerHeight() + $(pressItems[0]).height() * hiddenItems[ showCount ].length) + 'px');
    } else {
      $('.sheet').css('min-height', ($('.sheet').outerHeight() + $(pressItems[0]).height() * 10) + 'px' );
    }

    hiddenItems[ showCount ].forEach(function(elm, i) {

      if(i === 0) {
        window.optly.mrkt.anim.enter( $(elm) );
      } else {
        window.setTimeout(function() {
          window.optly.mrkt.anim.enter( $(elm) );

          if (i === hiddenItems[ showCount ].length - 1) {
            $('.sheet').css('min-height', '');
          }

        }, incr);
        incr += 100;
      }
      
    });

    if(showCount !== hiddenItems.length - 1) {
      showCount += 1;
    } else {
      $showBtn.css({display: 'none'});
      $hideBtn.css({display: 'block'});
    }
  
  });

  function incrTmt($elm, animType, incrVal) {
    window.setTimeout(function() {
      window.optly.mrkt.anim[ animType ]( $elm );
    }, incrVal);
  } 

  $hideBtn.on('click', function() {
    var incr = 0;
    for(var i = hiddenItems[ showCount ].length - 1; i >= 0; i -= 1) {
      if( i === hiddenItems[ showCount ].length - 1 ) {
        window.optly.mrkt.anim.leave( $(hiddenItems[ showCount ][ i ]) );
      } else {
        incr += 100;
        incrTmt($(hiddenItems[ showCount ][ i ]), 'leave', incr);
      }
      //uncomment below and comment out above if animation on hide is not desired
      //$(hiddenItems[ showCount ][ i ]).removeClass('enter').addClass('optly-hide');
    }

    if(showCount > 0) {
      showCount -= 1;
    } else {
      $showBtn.css({display: 'block'});
      $hideBtn.css({display: 'none'});
    }
  });


});})(jQuery);