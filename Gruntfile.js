/*
 * grunt-injector
 * https://github.com/dfox-powell/grunt-injector
 *
 * Copyright (c) 2014 dtothefp
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
  jshint: {
    all: [
      'Gruntfile.js',
      'tasks/*.js',
      'test/*.js'
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  },

  // Before generating any new files, remove any previously-created files.
  clean: {
    tests: ['tmp']
  },

  jasmine_node: {
    options: {
      forceExit: true,
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: '*_node_spec',
      jUnit: {
        report: false,
        savePath : './build/reports/jasmine/',
        useDotNotation: true,
        consolidate: true
      }
    },
    all: ['spec/']
  },

  connect: {
    server: {
      options: {
        port: 8000,
        base: '.',
        //keepalive: true
      }
    }
  },

  resemble: {
    options: {
      screenshotRoot: 'optimizely-screens',
      url: 'http://0.0.0.0:8000/dist',
      gm: true

    },
    desktop: {
      options: {
        width: 1100,
      },
      src: ['dist/about', 'dist/contact', 'dist/customers', 'dist/customers/customer-stories'],
      dest: 'desktop',
    },
    tablet: {
      options: {
        width: 800,
      },
      src: ['dist/**/*.html'],
      dest: 'tablet',
    },
    mobile: {
      options: {
        width: 450,
      },
      files: [
       {
         cwd: 'dist/',
         expand: true,
         src: ['**/*.html'],
         dest: 'mobile'
       },
      ]
    }
  },

  spec: {
    options: {
      minijasminenode: {
        showColors: true
      }
    },
    e2e: {
      options: {
        helpers: ["spec/helpers/**/*.{js,coffee}"],
        specs: "spec/*_bundle_spec.js"
      }
    }
  }

});

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-jasmine-bundle');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jasmine_node']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('screens', ['connect', 'resemble']);
};
