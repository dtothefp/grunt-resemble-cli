(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

window.optly.mrkt.jobsPage = {};

window.optly.mrkt.jobsPage.testimonials = function() {
    var $quotes = $('h4.quotes q');
    $($quotes[0]).show();

    $('.employee-icons a').each(function(index){
        $(this).click(function(event){
            event.preventDefault();
            $quotes.hide();
            $($quotes[index]).show();
        });
    });
};

$('#view-all-jobs').click(function() {
    $('html, body').animate({scrollTop: $('#jobs-list').offset().top}, 700);
    return false;
});

window.optly.mrkt.jobsPage.testimonials();

/*
function getGreenhouseData() {
    $.getJSON('https://api.greenhouse.io/v1/boards/optimizely7/embed/departments?callback=?').always(function(data){

      if(typeof data === 'object'){

        var i;

        for(i = 0; i < data.departments.length; i++){

          if(data.departments[i].jobs.length === 0){

            delete data.departments[i];

          }

        }

        $('#job-list-cont').append( window.optly.mrkt.templates.jobList(data) );

      }

    });

}
*/


function jobScoreData(data) {
    var jobsObj = {
        departments: []
    };

    var jobs = JSON.parse(data.jobs);

    $.each(jobs, function(i, jobListing) {

        var filtered = jobsObj.departments.filter(function(elm) {
            if ( elm.name === jobListing.department ) {
                elm.jobs.push({
                    absolute_url: jobListing.url,
                    title: jobListing.title,
                    location: {
                        name: jobListing.location
                    }
                });
                return jobListing.department;
            }
        });

        if( filtered.length === 0 ) {
            jobsObj.departments.push({
                name: jobListing.department,
                jobs: [{
                    absolute_url: jobListing.url,
                    title: jobListing.title,
                    location: {
                        name: jobListing.location
                    }
                }]
            });
        }

    });

    $('#job-list-cont').append( window.optly.mrkt.templates.jobList(jobsObj) );
}

var deferred = $.ajax({
    type: 'GET',
    url: '/api/jobs/details.json'
});

deferred.then(jobScoreData, function(err) {
    window.analytics.track(window.location.pathname, {
      category: 'api error',
      label: err.responseText + ', Response Code: ' + err.status,
    });
});
})(jQuery);