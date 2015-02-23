/* global describe, it */

var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
requirejs.config({
  baseUrl: 'app/',
  nodeRequire: require
});

describe('Utils', function () {
  var Utils;
  before(function (done) {
    requirejs(['scripts/Utils', 'scripts/Link'], function (Utils_Class) {
      Utils = Utils_Class;
      done();
    });
  });

  describe('Utils', function () {
    it('should return string with and when use array', function () {
      var dependencies = ["Web Design Mastery", "jQuery Effects"];
      Utils.prettyJoin(dependencies).should.equal("Web Design Mastery 和 jQuery Effects")
    });
  });
});
