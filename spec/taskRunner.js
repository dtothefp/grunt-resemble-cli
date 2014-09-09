var spawn = require('child_process').spawn;

module.exports = function (task, config, done){
  var cp = spawn(
        'grunt',

        [ task,
          '--config', JSON.stringify(config),
          '--tasks', '../tasks',
          '--gruntfile',
          'spec/Gruntfile.js'
        ],

        {
          cwd: process.cwd(),
          stdio: 'inherit'
        }
      );
      
      cp.on('exit', function(code) {
        done();
      });
};
