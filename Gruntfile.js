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
        specNameMatcher: '_node_spec',
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
          keepalive: true
        }
      }
    },

    resemble: {
      compactFormat: {
        options: {
          screenshotRoot: 'screenshots/test-1',
          url: 'http://0.0.0.0:8000/dist',
          width: 1000,
          //gm: true
        },
        src: ['dist/about', 'dist/contact', 'dist/customers', 'dist/customers/customer-stories'],
        dest: 'compact-format',
      },
      compactFormatGlobbing: {
        options: {
          screenshotRoot: 'screenshots/test-2',
          url: 'http://0.0.0.0:8000/dist',
          width: 700,
          gm: true
        },
        src: ['dist/**/*.html'],
        dest: 'compact-format-glob',
      },
      dynamicMapping: {
        options: {
          screenshotRoot: 'screenshots/test-3',
          url: 'http://0.0.0.0:8000/dist',
          width: 500,
          gm: true
        },
        files: [
         { 
           cwd: 'dist/',
           expand: true,     
           src: ['**/*.html'],
           dest: 'dynamic-mapping'
         },
        ]
      }
    }      

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jasmine_node']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'jasmine_node']);

};
