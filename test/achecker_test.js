'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(notEmpty(actual), 1, [message])
    test.notEqual(notEmpty(actual), 1, [message])
    test.deepEqual(notEmpty(actual), 1, [message])
    test.notDeepEqual(notEmpty(actual), 1, [message])
    test.strictEqual(notEmpty(actual), 1, [message])
    test.notStrictEqual(notEmpty(actual), 1, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var notEmpty = function(file) {
  return file.length !== 0;
};

exports.achecker = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('achecker/gregvanbrug.com/index.html');
    test.equal(notEmpty(actual), 1, 'Should return a report from the public API with default options.');

    test.done();
  },
  dest: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/dest/localhost/index.html');
    test.equal(notEmpty(actual), 1, 'Should return a report to the specified directory.');

    test.done();
  },
  host: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/host/localhost/index.html');
    test.equal(notEmpty(actual), 1, 'Should return a report from a custom API installation with default options.');

    test.done();
  },
  host_multiple: function(test) {
    test.expect(3);

    var file1 = grunt.file.read('tmp/host_multiple/gregvanbrug.com/index.html');
    var file2 = grunt.file.read('tmp/host_multiple/github.com/gregvanbrug.html');
    var file3 = grunt.file.read('tmp/host_multiple/github.com/gregvanbrug/grunt-achecker.html');

    test.equal(notEmpty(file1), 1, 'Should return a report from gregvanbrug.com.');
    test.equal(notEmpty(file2), 1, 'Should return a report from github.com/gregvanbrug.');
    test.equal(notEmpty(file3), 1, 'Should return a report from github.com/gregvanbrug/grunt-achecker.');

    test.done();
  },
  output: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/output/localhost/index.xml');
    test.equal(notEmpty(actual), 1, 'Should retun a report in the specified output.');

    test.done();
  },
  guide: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/guide/localhost/index.html');
    test.equal(notEmpty(actual), 1, 'Should return a report with a custom guide(s).');

    test.done();
  },
  offset: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/offset/localhost/index.html');
    test.equal(notEmpty(actual), 1, 'Should return a report with an offset.');

    test.done();
  }
};
