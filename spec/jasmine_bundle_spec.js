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

function runGruntTask(task, config, done){
  var cp = spawn(
        "grunt",

        [ task, 
          "--config", JSON.stringify(config), 
          "--tasks", "../tasks", 
          "--gruntfile", 
          "spec/Gruntfile.js"
        ],

        { stdio: 'inherit'}
      );
 
  cp.on("exit", function() {
    done();
  });
}
  
afterEach(function(){
  clear( path.join(__dirname, 'optimizely-screens') );
});

describe('it runs the JASMINE BUNDLE resemble function', function() {

    describe('it creates 5 files, one for root url, and 4 from config src', function() {
      
      Given(function(done) {
        this.config = {
          resemble: {
            sut: {
              options: {
                screenshotRoot: 'optimizely-screens',
                url: 'http://0.0.0.0:8000/dist',
                gm: false,
                width: 1100,
              },
              src: ['dist/about', 'dist/contact', 'dist/customers', 'dist/customers/customer-stories'],
              dest: 'desktop',
            }
          }
        };
        
        runGruntTask('resemble', this.config, done);
      });
      When(function() {
        this.files = fs.readdirSync( path.join(__dirname, 'optimizely-screens', 'desktop') );
      });
      Then(function() {
        expect(this.files.length).toBe(5);
      });
        
  });

});
