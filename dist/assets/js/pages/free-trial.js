(function($){ 

  window.optly = window.optly || {}; 

  window.optly.mrkt = window.optly.mrkt || {}; 

  window.linkPath = "/dist" 

// $('#seo-form').oForm({

//   afterLocal: window.optly.mrkt.oForm.ppcFormDefaultResponseHandler

// });

var settings,
    showIncrementValues,
    addCommas;

addCommas = function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

settings = {
  // Update these values to update the predicted values
  visitorsBase: 2630536305, // visitor's starting point (how many visitors we got until today)
  visitors30days: 244397647, // visitors in the last 30 days
  experimentsBase: 223945,  // experiments' starting point
  experiments30days: 22602, // experiments in the last 30 days
  // Date(year, month, day) - Remember! month: 0 => Jan; 1 => Feb
  initialDate: new Date(2013, 5, 3) // Date when stats were taken
};
$.extend(settings, {
  visitorsRate: settings.visitors30days / 2592e+6, // visitors per second - 2592e+6 = number of seconds in 30 days
  experimentsRate: settings.experiments30days / 2592e+6
});

showIncrementValues = function() {
  var now = new Date();
  // Base number + predicted number
  // Predicted number = growth rate * diff of time since the base number was updated
  $('#visitors-tested-number').text( addCommas(Math.floor(settings.visitorsBase + settings.visitorsRate * (now - settings.initialDate))) );
  $('#experiments-run-number').text( addCommas(Math.floor(settings.experimentsBase + settings.experimentsRate * (now - settings.initialDate))) );
  // We use an interval instead of timeout in order to have some jitter
  var interval = Math.floor((Math.random() * 1800) + 600);
  setTimeout(showIncrementValues.bind(), interval);
};

showIncrementValues();

var symExpDict = {
  abew: {
    text: 'A/B Experiments Tool',
    heading: 'Easy Website A/B Experiments'
  },

  abtb: {
    text: 'A/B Testing Tool',
    heading: 'The Best A/B Testing Tool'
  },

  abtc: {
    text: 'A/B Testing Company',
    heading: 'The #1 A/B Testing Company'
  },

  abtf: {
    text: 'A/B Testing solution',
    heading: '#A/B Testing Tool'
  },

  abto: {
    text: 'Online A/B Testing Tool',
    heading: '#1 Online A/B Testing Tool'
  },

  abtp: {
    text: 'A/B Testing Platform',
    heading: 'The #1 A/B Testing Platform'
  },

  abtsft: {
    text: 'A/B Testing Software',
    heading: 'The #1 A/B Testing Software'
  },

  abtsvc: {
    text: 'A/B Testing Service',
    heading: 'The #1 A/B Testing Service'
  },

  abtt: {
    text: 'A/B Testing Tool',
    heading: 'The #1 A/B Testing Tool'
  },

  abtw: {
    text: 'Website A/B Testing Tool',
    heading: 'The #1 Website A/B Testing Tool'
  },

  btt: {
    text: 'Behavioral Tareting Tool',
    heading: '#1 Behavioral Targeting tool'
  },

  cet: {
    text: 'Website Experiments tool',
    heading: '#1 Website Experiments Tool'
  },

  cft: {
    text: 'Conversion Funnel Optimization tool',
    heading: 'Conversion Funnel Optimization Tool'
  },

  cob: {
    text: 'Conversion Funnel Optimization tool',
    heading: 'The Best Conversion Optimization Tool'
  },

  coc: {
    text: 'Conversion Optimization Company',
    heading: 'The #1 Conversion Optimization Company'
  },

  coert: {
    text: 'Conversion Optimizer Tool',
    heading: 'The #1 Conversion Optimizer Tool'
  },

  cof: {
    text: 'Conversion Optimization Tool',
    heading: 'The #1 in Conversion Optimization'
  },

  coo: {
    text: 'Online Conversion Optimization Tool',
    heading: '#1 Online Conversion Optimization Tool'
  },

  cop: {
    text: 'Conversion Optimization Product',
    heading: 'The #1 Conversion Optimization Product'
  },

  cos: {
    text: 'Conversion Optimization Software',
    heading: 'The #1 Conversion Optimization Software'
  },

  cosvc: {
    text: 'Conversion Optimization Service',
    heading: 'The #1 Conversion Optimization Service'
  },

  cot: {
    text: 'Conversion Optimization Tool',
    heading: '#1 Conversion Optimization Tool'
  },

  cow: {
    text: 'Website Conversion Optimization Tool',
    heading: '#1 in Website Conversion Optimization'
  },

  cpacq: {
    text: 'CPA Reduction Tool',
    heading: 'Reduce Cost Per Acquisition'
  },

  cpact: {
    text: 'CPA Reduction Tool',
    heading: 'Reduce Cost Per Action'
  },

  cpconv: {
    text: 'Cost Per Conversion Reduction Tool',
    heading: 'Reduce Cost Per Conversion'
  },

  crot: {
    text: 'Conversion Rate Optimization Tool',
    heading: 'The #1 Conversion Rate Optimization Tool'
  },

  htt: {
    text: 'Headline A/B Testing Tool',
    heading: 'The #1 Headline A/B Testing Tool'
  },

  ctt: {
    text: 'Conversion Tracking Tool',
    heading: 'The #1 Conversion Tracking Tool'
  },

  lgs: {
    text: 'Lead Generation Software',
    heading: 'Lead Generation Software'
  },

  lgt: {
    text: 'Lead Generator Tool',
    heading: 'The Hottest Lead Generator Tool'
  },

  lpaff: {
    text: 'Affiliate Landing Page Tool',
    heading: 'The #1 Affiliate Landing Page Tool'
  },

  lpapp: {
    text: 'Landing Page Application',
    heading: 'The #1 Landing Page App'
  },

  lpbldr: {
    text: 'Landing Page Builder',
    heading: 'The #1 Landing Page Builder Tool'
  },

  lpb: {
    text: 'Landing Page Generator',
    heading: '#1 Landing Page Generator Tool'
  },

  lpbeaut: {
    text: 'Beautiful Landing Page Creator',
    heading: 'Create Beautiful Landing Pages'
  },

  lpbst: {
    text: 'Landing Page Creator',
    heading: 'Create the Best Landing Pages'
  },

  lpc: {
    text: 'Landing Page Creator',
    heading: 'The #1 Landing Page Creator Tool'
  },

  lpd: {
    text: 'Landing Page Designer',
    heading: 'The #1 Landing Page Design Tool'
  },

  lpdyn: {
    text: 'Dynamic Landing Page Creator',
    heading: 'Dynamic Landing Page Creator'
  },

  lpe: {
    text: 'Landing Page Builder',
    heading: 'Create Beautiful Landing Pages'
  },

  lpg: {
    text: 'Landing Page Generator',
    heading: 'The #1 Landing Page Generator'
  },

  lphtc: {
    text: 'Landing Page Creator',
    heading: 'Easy Landing Page Creator'
  },

  lphtml5: {
    text: 'HTML5-compatible Landing Page Creator',
    heading: 'HTML5 Landing Page Creator'
  },

  lpm: {
    text: 'Landing Page Creator',
    heading: 'Make Landing Pages Easily'
  },

  lpob: {
    text: 'Landing Page Optimization Tool',
    heading: '#1 Landing Page Optimization Tool'
  },

  lpoc: {
    text: 'Landing Page Optimization Tool',
    heading: 'The #1 Landing Page Optimization Company'
  },

  lpof: {
    text: 'Landing Page Optimization Tool',
    heading: 'The #1 in Landing Page Optimization'
  },

  lpoo: {
    text: 'Landing Page Optimization Tool',
    heading: '#1 Landing Page Optimization Tool'
  },

  lpop: {
    text: 'Landing Page Optimization Product',
    heading: 'The #1 Landing Page Optimization Product'
  },

  lpos: {
    text: 'Landing Page Optimization Software',
    heading: 'The #1 Landing Page Optimization Software'
  },

  lposvc: {
    text: 'Landing Page Optimization Service',
    heading: 'The #1 Landing Page Optimization Service'
  },

  lpot: {
    text: 'Landing Page Optimization Tool',
    heading: '#1 Landing Page Optimization Tool'
  },

  lpow: {
    text: 'Website Landing Page Optimization',
    heading: 'The #1 Landing Page Optimization Tool'
  },

  lpp: {
    text: 'Perfect Landing Page Creator',
    heading: 'Create Perfect Landing Pages'
  },

  lpppc: {
    text: 'PPC Landing Page Tool',
    heading: 'The #1 PPC Landing Page Tool'
  },

  lpr: {
    text: 'Responsive Landing Page Creator',
    heading: 'Responsive Landing Page Creator'
  },

  lps: {
    text: 'Landing Page Software',
    heading: 'The #1 Landing Page Software'
  },

  lpsaas: {
    text: 'SaaS Landing Page Tool',
    heading: 'The #1 SaaS Landing Page Tool'
  },

  lpsem: {
    text: 'SEM Landing Page Tool',
    heading: 'The #1 SEM Landing Page Tool'
  },

  lpseo: {
    text: 'SEO Landing Page Tool',
    heading: 'SEO Friendly Landing Pages'
  },

  lpsvc: {
    text: 'Landing Page Optimization Service',
    heading: 'The #1 Landing Page Optimization Service'
  },

  lpt: {
    text: 'Landing Page Optimization Tool',
    heading: 'Landing Page Optimization Tool'
  },

  lptempt: {
    text: 'Landing Page Template Tool',
    heading: 'The #1 Landing Page Template Tool'
  },

  lptesting: {
    text: 'Landing Page Testing Tool',
    heading: '#1 Landing Page Testing Tool'
  },

  lpw: {
    text: 'WordPress Landing Page Tool',
    heading: '#1 WordPress Landing Page Tool'
  },

  lpwt: {
    text: 'Landing Page Optimization Tool',
    heading: '#1 Landing Page Optimization Tool'
  },

  mvtb: {
    text: 'Multivariate Testing Tool',
    heading: 'The Best Multivariate Testing Tool'
  },

  mvto: {
    text: 'Multivariate Testing Tool',
    heading: '#1 Multivariate Testing Tool'
  },

  mvtsft: {
    text: 'Multivariate Testing Software',
    heading: 'The #1 Multivariate Testing Software'
  },

  mvtsvc: {
    text: 'Multivariate Testing Service',
    heading: 'The #1 Multivariate Testing Service'
  },

  mvtt: {
    text: 'Multivariate Testing Tool',
    heading: 'The #1 Multivariate Testing Tool'
  },

  reducesem: {
    text: 'A/B Testing Tool',
    heading: 'Reduce CPL with A/B Testing'
  },

  scot: {
    text: 'Shopping Cart Optimization Tool',
    heading: 'The #1 Shopping Cart Optimization Tool'
  },

  spt: {
    text: 'Squeeze Page Optimization Tool',
    heading: 'The #1 Squeeze Page Optimization Tool'
  },

  stb: {
    text: 'Split Testing Tool',
    heading: 'The Best Split Testing Tool'
  },

  stc: {
    text: 'Split Testing Company',
    heading: 'The #1 Split Testing Company'
  },

  stf: {
    text: 'Split Testing Tool',
    heading: 'The #1 in Split Testing'
  },

  sto: {
    text: 'Online Split Testing Tool',
    heading: 'The #1 Split Testing Tool Online'
  },

  stp: {
    text: 'Split Testing Product',
    heading: 'The #1 Split Testing Product'
  },

  stw: {
    text: 'Website Split Testing Tool',
    heading: 'The #1 Website Split Testing Tool'
  },

  stsft: {
    text: 'Split Testing Software',
    heading: 'The #1 Split Testing Software'
  },

  stsvc: {
    text: 'Split Testing Service',
    heading: 'The #1 Split Testing Service'
  },

  stt: {
    text: 'Split Testing Tool',
    heading: 'The #1 Split Testing Tool'
  },

  usabtt: {
    text: 'Usability Testing Tool',
    heading: 'The #1 Usability Testing Tool'
  },

  usertt: {
    text: 'User Testing Tool',
    heading: 'The #1 User Testing Tool'
  },

  wat: {
    text: 'Website Analytics Tool',
    heading: 'The #1 Website Analytics Tool'
  },
  weboert: {
    text: 'Website Optimizer Tool',
    heading: 'The #1 Website Optimizer Tool'
  },

  wet: {
    text: 'Website Experiments Tool',
    heading: 'The #1 Website Experiments Tool'
  },

  wlt: {
    text: 'Website Localization Tool',
    heading: 'The #1 Website Localization Tool'
  },

  wmvtt: {
    text: 'Website Multivariate Testing Tool',
    heading: 'The #1 Website Multivariate Testing Tool'
  },

  wos: {
    text: 'Website Optimization Service',
    heading: 'The #1 Website Optimization Service'
  },

  wosion: {
    text: 'Website Optimisation Tool',
    heading: 'The #1 Website Optimisation Tool'
  },

  wosoft: {
    text: 'Website Optimization Software',
    heading: 'The #1 Website Optimization Software'
  },

  wotion: {
    text: 'Website Optimization Tool',
    heading: 'The #1 Website Optimization Tool'
  },

  wozer: {
    text: 'Website Optimizer Tool',
    heading: 'The #1 Website Optimizer Tool'
  },

  wpt: {
    text: 'Website Personalization Tool',
    heading: 'The #1 Website Personaliztion Tool'
  },

  wtt: {
    text: 'Website Testing Tool',
    heading: 'The #1 Website Testing Tool'
  },

  wtter: {
    text: 'Website Tester Tool',
    heading: 'The #1 Website Tester Tool'
  }
};

var queryString = window.location.search;

if( /otm_content\=/.test(queryString) ) {
  var param = queryString.split('=')[1];
  var content = symExpDict[ param ];

  $('.seo-form-heading').text(content.heading);
  $('#symmetry_test').text(content.text);
}
})(jQuery);