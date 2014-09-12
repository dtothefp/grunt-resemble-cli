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
      'tasks/**/*.js',
      'spec/**/*.js'
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
      gm: true,
      selector: '#outer-wrapper',
      tolerance: 0
    },
    desktop: {
      options: {
        width: 1100,
      },
      src: [
        'dist/about', 
        'dist/contact', 
        'dist/customers/**/*.html',
        'dist/resources/**/*.html'  
      ],     
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
        specs: 'spec/*_bundle_spec.js'
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

  grunt.registerTask('default', ['jshint', 'connect', 'resemble']);

  grunt.registerTask('jasmine-bundle', ['jshint', 'connect', 'spec']);
  
  grunt.registerTask('jasmine-node', ['jshint', 'connect', 'jasmine_node']);

  grunt.registerTask('screens', ['jshint', 'connect', 'resemble']);

};
