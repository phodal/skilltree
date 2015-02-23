/* global describe, it */

define(function (require) {
  'use strict';

  var Utils = require('/app/scripts/Utils.js');

  describe('Utils', function () {
    it('should return string with and when use array', function () {
	    var dependencies = ["Web Design Mastery", "jQuery Effects"];
      Utils.prettyJoin(dependencies).should.equal("Web Design Mastery 和 jQuery Effects")
    });
  });
});
