(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

/* global google: false */
window.optly.mrkt.contact = {};

window.optly.mrkt.contact.showMap = function(){

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({

    address: '631 Howard Street San Francisco, CA 94105'

  }, function(results, status){

    if(status === google.maps.GeocoderStatus.OK){

      var latlng, options, infoWindow, mymap, marker;

      latlng = results[0].geometry.location;

      options = {

        zoom: 15,

        center: latlng,

        mapTypeId: google.maps.MapTypeId.ROADMAP,

        streetViewControl: true

      };

      infoWindow = new google.maps.InfoWindow();

      mymap = new google.maps.Map(document.getElementById('map'), options);

      marker = new google.maps.Marker({

        map: mymap,

        position: latlng

      });

      google.maps.event.addListener(marker, 'click', (function(marker) {

          return function(){

            infoWindow.setContent('<div class="small-logo"></div><p class="address">631 Howard Street, Suite 100<br />San Francisco, 94105<br /><a target="_blank" href="https://maps.google.com/maps?q=to:631+Howard+St.+San+Francisco,+CA+94105">Directions</a></p>');

            infoWindow.open(mymap, marker);

          };

      })(marker));

    }

  });

  /*
  var mapOptions = {

    center: new google.maps.LatLng(37.7861642, -122.3986663),

    zoom: 8

  };

  new google.maps.Map(document.getElementById('map'), mapOptions);
  */

};

window.optly.mrkt.contact.showMap();
})(jQuery);