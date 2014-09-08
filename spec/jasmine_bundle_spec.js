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

beforeEach(function() {
  mkdir(this.workspacePath = "spec/tmp");
});

afterEach(function() {
  clear("spec/tmp/");
});

describe("it should run the dynamic mapping grunt task", function () {

  Given(function(done) {
    // this.config = {};

    // this.config.compactFormat = {
    //   injector: {
    //     compactFormat: {
    //       src: ['src/bb.js', 'src/bbb.js'],
    //       dest: 'dest/b.js',
    //     }
    //   }
    // };

    // this.config.filesObjectFormat = {
    //   injector: {
    //     filesObjectFormat: {
    //       files: {
    //         'dest/a.js': ['src/aa.js', 'src/aaa.js'],
    //         'dest/a1.js': ['src/aa1.js', 'src/aaa1.js'],
    //       }
    //     }
    //   }
    // };

    // this.config.filesArrayFormat = {
    //   filesArrayFormat: {
    //     files: [
    //       {src: ['src/aa.js', 'src/aaa.js'], dest: 'dest/a.js'},
    //       {src: ['src/aa1.js', 'src/aaa1.js'], dest: 'dest/a1.js'},
    //     ]
    //   }
    // };

    // this.config.compactFormatGlobbing = {
    //   injector: {
    //     compactFormatGlobbing: {
    //       src: ['files/**/*.js'],
    //       dest: 'dest/b.js',
    //     }
    //   }
    // };

    // this.config.filesObjectFormatGlobbing = {
    //   injector: {
    //     filesObjectFormatGlobbing: {
    //       files: {
    //         'dest/a.js': ['files/**/*.js', 'files/**/*.html'],
    //         'dest/a1.js': ['src/aa1.js', 'src/aaa1.js'],
    //       }
    //     }
    //   }
    // };

    // this.config.filesArrayFormatGlobbing = {
    //   injector: {
    //     filesArrayFormatGlobbing: {
    //       files: [
    //         {src: ['files/**/*.js', 'files/**/*.html'], dest: 'dest/a.js'},
    //         {src: ['src/aa1.js', 'src/aaa1.js'], dest: 'dest/a1.js'},
    //       ]
    //     }
    //   }
    // };

    this.dynamicMapping = {
      injector: {
        dynamicMapping: {
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

    runGruntTask('injector', this.dynamicMapping, done);

  }); //end Given

  describe('doing something', function() {
    When(function() {
      this.dirs = fs.readdirSync(process.cwd() + '/spec/tmp/files/js');
    });
    
    Then(function() {
      expect(this.dirs.length).toBe(2);
    });
  })



});  

//runGruntTask('injector', this.config.dynamicMapping, done);
