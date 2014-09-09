var grunt = require('grunt');
var spawn = require('child_process').spawn;
var read = grunt.file.read;
var write = grunt.file.write;
var mkdir = grunt.file.mkdir;
var clear = grunt.file['delete'];
var expand = grunt.file.expand;
var fs = require('fs');
var path = require('path');
var AsyncSpec = require('node-jasmine-async');
var spawn = require('child_process').spawn;
var runGruntTask = require('./taskRunner');

/*afterEach(function() {*/
  //if(fs.existsSync( path.join(__dirname, 'optimizely-screens') )) {
    //clear( path.join(__dirname, 'optimizely-screens') );
  //}
/*});*/

jasmine.getEnv().defaultTimeoutInterval = 20000;

describe('it runs the JASMINE NODE resemble function', function() {

  describe('it creates 5 files, one for root url, and 4 from config src', function() {
    var async = new AsyncSpec(this);
    var cp, diffFiles, config;

    async.beforeEach(function(done){
      config = {
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
            dest: 'jasmine-node-test',
          }
        }
      };

      runGruntTask('resemble', config, done);

      

    });

    async.it('reads the created files', function(done){
      fs.readdir( path.join(__dirname, 'optimizely-screens', 'jasmine-node-test'), function(err, files) {
        if(!err) {
          diffFiles = files;
        } else {
          console.log(err);
        }
        expect(diffFiles.length).toBe(5);
        done();
      });
    });

  });

});
