var grunt = require('grunt');
var spawn = require('child_process').spawn;
var read = grunt.file.read;
var write = grunt.file.write;
var mkdir = grunt.file.mkdir;
var clear = grunt.file['delete'];
var expand = grunt.file.expand;
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var runGruntTask = require('./taskRunner');

// afterEach(function() {
//   if(fs.existsSync( path.join(__dirname, 'optimizely-screens') )) {
//     clear( path.join(__dirname, 'optimizely-screens') );
//   }
// });

jasmine.getEnv().defaultTimeoutInterval = 20000;

describe('it runs the JASMINE BUNDLE resemble function', function() {

  Given(function() {
    this.config = {
      resemble: {
        sut: {
          options: {
            screenshotRoot: 'optimizely-screens',
            url: 'http://0.0.0.0:8000/dist',
            gm: false,
            width: 1100,
          },
          src: [
            'dist/about', 
            'dist/contact', 
            'dist/customers/**/*.html',
            'dist/resources/**/*.html'  
          ],
          dest: 'bundle-test',
        }
      }
    };
  });

  describe('it creates 5 files, one for root url, and 4 from config src', function() {

    Given(function(done) {
      runGruntTask('resemble', this.config, done);

    });

    When(function() {
      this.files = fs.readdirSync( path.join(__dirname, 'optimizely-screens', 'bundle-test') );
    });

    Then(function() {
      expect(this.files.length).toBe(5);
    });

  });

});
