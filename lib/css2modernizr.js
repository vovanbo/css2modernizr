/*
 * css2modernizr
 * https://github.com/vovanbo/css2modernizr
 *
 * Copyright (c) 2014 Vladimir Bolshakov
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash'),
    postcss = require('postcss'),
    tests = require('./tests_and_dependencies.json');

function CSS2Modernizr(css, prefix) {
  this.prefix = prefix || '';
  this.css = css || '';
  this.config = '';
  this.used_modules = [];
  this.download_url = 'http://modernizr.com/download/';
}

CSS2Modernizr.prototype.usage = function () {
  var regex, css, results, modules;

  results = [];
  regex = new RegExp("\\." + this.prefix + "(no-)?(" + _.keys(tests).join('|').toLowerCase() + ")", "g");
  css = postcss.parse(this.css);
  css.eachRule(function (rule) {
    _.forEach(rule.selectors, function(selector) {
      var found, key, index;
      regex.lastIndex = 0;
      found = regex.exec(selector);
      if (found) {
        key = found[2];
        index = _.findKey(results, { 'name': key });
        if (index) {
          results[index]["count"]++;
        } else {
          results.push({
            'name': key,
            'count': 1
          });
        }
      }
    });
  });

  results = _.sortBy(results, "count").reverse();

  if (!_.isEmpty(results)) {
    this.config = this.download_url + '#-';
    modules = [];
    _.forEach(results, function (result) {
      var test = tests[result['name']];
      modules.push(test.dependencies);
    });

    this.used_modules = _.uniq(_.flatten(modules)).sort();
    this.config += this.used_modules.join("-") + ( this.prefix ? '-cssclassprefix:' + this.prefix.replace(/\-/g, '!') : '' );
  }

  return {
    'prefix': this.prefix,
    'usage': results,
    'download_url': this.config,
    'used_modules': this.used_modules
  };
};

var css2modernizr = function(css, prefix) {
  return new CSS2Modernizr(css, prefix);
};

module.exports = css2modernizr;
