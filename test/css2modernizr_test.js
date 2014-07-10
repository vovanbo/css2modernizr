'use strict';

var css2modernizr = require('../lib/css2modernizr.js'),
    assert = require('should');

describe('css2modernizr', function () {

  it('should be empty', function () {
    assert(css2modernizr().usage()).eql({
      'prefix': '',
      'usage': [],
      'download_url': '',
      'used_modules': []
    });
  });

});
