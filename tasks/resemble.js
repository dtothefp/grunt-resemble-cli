/*
 * grunt-injector
 * https://github.com/dfox-powell/grunt-injector
 *
 * Copyright (c) 2014 dtothefp
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function(grunt) {


  grunt.registerMultiTask('resemble', 'The best Grunt plugin ever.', function() {
    var done = this.async();
    var opts = {
      cwd: process.cwd(),
      stdio: 'inherit'
    };
    var options = this.options({
      screenshotRoot: '',
      url: 'http://optimizely.com/',
      width: 1024,
      gm: false,
      debug: false
    });

    var args = [ path.join(__dirname, '..', 'node_modules', 'resemble-cli', 'bin', 'run-resemble.js') ];

    options.pages = [];
    options.screensDir = this.data.dest ? this.data.dest : this.data.files[0].dest;
    
    //globbing enabled
    if(this.filesSrc.length > 0){
      var urlSplitLast = options.url.split('/').pop();
      var reg = new RegExp(urlSplitLast);
      this.filesSrc.forEach(function(file){
        if(reg.test(file)) {
          file = file.replace(urlSplitLast, '');
        }

        var lastSlashInex = file.lastIndexOf('/');
        var sliced = file.slice(lastSlashInex);
        
        if(/\.html/.test(sliced) || /\.php/.test(sliced)) {
          file = file.substr(0, lastSlashInex);
        }

        if(file.indexOf('/') === 0) {
          file = file.replace(/\//, '');
        }
        
        if(!!file) {
          options.pages.push(file);
        }
        
      });
    } else {
      this.files[0].orig.src.forEach(function(file, i) {
        options.pages.push(file); 
      });
    }

    options.pages = options.pages.join(',');

    for (var prop in options) {
      var value = options[prop];
      if(typeof value !== 'boolean' && !!value) {
        options[prop] = prop + '='  + value;
      } else if (typeof value === 'boolean' && !!value) {
        options[prop] = '--' + prop;
      }
     if (!!options[prop]) {
        args.push(options[prop]);
      }
    }

    var cp = spawn('node', args, opts);
    
    cp.on('close', function (code) {
      console.log('child process finished: ' + code);

      done();
    });

  });

};
