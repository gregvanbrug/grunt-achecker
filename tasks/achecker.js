/*
 * grunt-achecker
 * https://github.com/gregvanbrug/grunt-achecker
 *
 * Copyright (c) 2014 Greg van Brug
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  var request = require('request'),
      url     = require('url');

  grunt.registerMultiTask('achecker', 'Check HTML pages with achecker.', function() {

    var done = this.async();

    var options = this.options({
      dest: 'achecker',
      host: 'http://achecker.ca',
      id: undefined
    });

    // Verify supplied opitons are valid.
    var validOptions = [ 'host', 'dest', 'id', 'output', 'guide', 'offset' ];

    for ( var option in options ) {
      if ( validOptions.indexOf(option) === -1 ) {
        grunt.fail.warn( option.red + ' is not a supported option.'.red );
      }
    }

    // Did we supply the required options?
    if ( options.id === undefined ) {
      var host = options.host ? options.host : 'http://achecker.ca';
      grunt.fail.warn( 'Web Service ID is required. If you don\'t have one, you can register for free at '.red + host.red + '.'.red );
    }

    var urls = this.data.urls;

    var complete = function (idx) {
      return urls.length - 1 === idx;
    };

    // Let the user know we're doin stuff.
    var dest = '/' + options.dest;
    grunt.log.writeln('Generating reports to ' + dest.green + '...');

    urls.forEach( function(uri, index) {

      var host   = options.host + '/checkacc.php?',
          params = {
              uri: encodeURIComponent(uri),
              id: options.id
          };

      // If optional params are supplied, add em to the params.
      var optionalParams = [ 'output', 'guide', 'offset' ];
      for ( var param in options ) {
        if ( optionalParams.indexOf(param) !== -1 ) {
          params[param] = options[param];
        }
      }

      // Build the query string.
      var query = function(params) {
        var query = '';
        for ( var param in params ) {
          var string = param === 'uri' ? param + '=' + params[param] : '&' + param + '=' + params[param];
          query += string;
        }
        return query;
      };

      var req = host + query(params);

      // Use the AChecker API.
      request(req, function (error, response, body) {
        if ( !error && response.statusCode === 200 ) {

          var parse     = url.parse(uri),
              directory = options.dest + '/' + parse.host + '/',
              file      = parse.path === '/' ? 'index' : parse.path,
              extension = options.output === 'rest' ? '.xml' : '.html';

          grunt.file.write(directory + file + extension, body);

          if ( response.complete && complete(index) ) {
            grunt.log.writeln('All done.'.green);
            // We're done here.
            done();
          }

        }
      });

    });

  });

};
