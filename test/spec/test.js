/* global describe, it */

define(function (require) {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        var one = 1;
        one.should.equal(1);
      });
    });
  });
});
