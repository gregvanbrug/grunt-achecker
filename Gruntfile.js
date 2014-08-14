/*
 * grunt-achecker
 * https://github.com/gregvanbrug/grunt-achecker
 *
 * Copyright (c) 2014 Greg van Brug
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    config: grunt.file.readJSON('webServiceId.json'),

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: [ 'tmp', 'achecker' ]
    },

    achecker: {
      // default_fail: {
      //   urls: [
      //     'http://gregvanbrug.com'
      //   ]
      // },
      default_options: {
        options: {
          id: '<%= config.publicId %>'
        },
        urls: [
          'http://gregvanbrug.com'
        ]
      },
      dest: {
        options: {
          dest: 'tmp/dest',
          id: '<%= config.publicId %>'
        },
        urls: [
          'http://localhost',
        ]
      },
      host: {
        options: {
          dest: 'tmp/host',
          host: 'http://achecker.localhost',
          id: '<%= config.localId %>'
        },
        urls: [
          'http://localhost',
        ]
      },
      host_multiple: {
        options: {
          dest: 'tmp/host_multiple',
          host: 'http://achecker.localhost',
          id: '<%= config.localId %>'
        },
        urls: [
          'http://gregvanbrug.com',
          'http://github.com/gregvanbrug',
          'https://github.com/gregvanbrug/grunt-achecker'
        ]
      },
      output: {
        options: {
          dest: 'tmp/output',
          host: 'http://achecker.localhost',
          id: '<%= config.localId %>',
          output: 'rest'
        },
        urls: [
          'http://localhost',
        ]
      },
      guide: {
        options: {
          dest: 'tmp/guide',
          host: 'http://achecker.localhost',
          id: '<%= config.localId %>',
          guide: 'WCAG2-AA,BITV1'
        },
        urls: [
          'http://localhost',
        ]
      },
      offset: {
        options: {
          dest: 'tmp/offset',
          host: 'http://achecker.localhost',
          id: '<%= config.localId %>',
          offset: 8
        },
        urls: [
          'http://localhost',
        ]
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'test']);

  grunt.registerTask('test', ['clean', 'achecker', 'nodeunit']);

};
