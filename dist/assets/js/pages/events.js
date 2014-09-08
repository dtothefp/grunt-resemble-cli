(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

window.optly.mrkt.events = {};

window.optly.mrkt.events.showEvents = function(url, div){

  var templateContext, htmlDecode;

  templateContext = {};

  templateContext.events = [];

  htmlDecode = function(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
  };

  $.get(url).always(function(data, textStatus, jqXHR){

    if(jqXHR.status === 200){

      try {

        if( data.feed.entry instanceof Array ){

          var i, container;

          container = {};

          for(i = 0; i <= data.feed.entry.length - 1; i++){

            var entry, eventData, venue, startDate, endDate, zeroRegEx, description;

            entry = data.feed.entry[i];

            startDate = moment( entry.gd$when[0].startTime );

            endDate = moment( entry.gd$when[0].endTime );

            zeroRegEx = /\-0/g;

            if(typeof entry.gd$where[0].valueString === 'string'){

              venue = entry.gd$where[0].valueString.split(' /')[0];

            }

            description = entry.content.$t.split('-- ')['1'].trim().replace(/\r?\n|\r/g, '');

            eventData = {

              title: entry.title.$t,

              link: entry.content.$t.split(' --')[0],

              cityState: entry.gd$where[0].valueString.split('/ ')[1],

              startMonth: startDate.format('MMM'),

              startDay: startDate.format('D'),

              endMonth: endDate.format('MMM'),

              endDay: endDate.format('D'),

              endYear: endDate.format('YYYY'),

              description: htmlDecode( description ),

              venue: venue

            };

            templateContext.events.push(eventData);

          }

          //console.log(window.optly.mrkt.templates.eventDisplay(templateContext));

          $(div).html(window.optly.mrkt.templates.eventDisplay(templateContext));

        } else {

          //report error to google analytics
          window.analytics.track(window.location.pathname, {
            category: 'api error',
            label: 'google cal api data.feed.entry not array: ' + typeof(data.feed.entry)
          });

        }

      } catch (error) {

        //report error to google analytics
        window.analytics.track(window.location.pathname, {
          category: 'api error',
          label: 'google cal reponse contains invalid json'
        });

      }

    } else {

      //report non 200 to google analytics
      window.analytics.track(window.location.pathname, {
        category: 'api error',
        label: 'google cal reponse not 200: ' + jqXHR.status
      });

    }

  });

};

//show future events
window.optly.mrkt.events.showEvents('https://www.google.com/calendar/feeds/optimizely.com_hh3e0hadjvjs9gh34mdlevverk@group.calendar.google.com/public/full?alt=json&orderby=starttime&max-results=30&singleevents=true&sortorder=ascending&futureevents=true', '#future-events-cont');

$('body').delegate('#get-past-events', 'click', function(e){

  window.optly.mrkt.events.showEvents('https://www.google.com/calendar/feeds/optimizely.com_hh3e0hadjvjs9gh34mdlevverk@group.calendar.google.com/public/full?alt=json&orderby=starttime&max-results=30&singleevents=true&sortorder=ascending&futureevents=false', '#past-events-cont');

  e.preventDefault();

});
})(jQuery);