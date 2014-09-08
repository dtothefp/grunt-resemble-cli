var grunt  = require("grunt");
var spawn  = require("child_process").spawn;
var read   = grunt.file.read;
var write  = grunt.file.write;
var mkdir  = grunt.file.mkdir;
var clear  = grunt.file.delete;
var expand = grunt.file.expand;

var fs = require('fs');

function runGruntTask(task, config, done) {
  spawn("grunt", 
    [
      task, 
      "--config", JSON.stringify(config), 
      "--tasks", "../tasks", 
      "--gruntfile", "spec/Gruntfile.js"
    ], {
    stdio: 'inherit'
  }).on("exit", function() {
    done();
  });
}

var mockConfig = {
  resemble: {
    target: {
      options: {
        stripPath: ''
      },
      files: [
        {
          expand: true, 
          cwd: 'files/',    
          src: ['**/*.js', '**/*.html'], // Actual pattern(s) to match.
          dest: 'tmp/',   // Destination path prefix.
        }
      ]
    }
  }
};


describe('a very basic test subtraction', function() {
  beforeEach(function(){
    runGruntTask('resemble', mockConfig, done);
  });
  it('should be able to subract', function() {
    expect(2 - 2).toBe(0);
  });
});


