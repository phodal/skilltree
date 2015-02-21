define(['jquery', 'lib/knockout'], function ($, ko) {
  'use strict';
  ko.bindingHandlers.rightClick = {
    init: function (element, valueAccessor) {
      $(element).on('mousedown', function (event) {
        if (event.which === 3) {
          valueAccessor()();
        }
      }).on('contextmenu', function (event) {
        event.preventDefault();
      });
    }
  };

  ko.bindingHandlers.middleClick = {
    init: function (element, valueAccessor) {
      $(element).on('mousedown', function (event) {
        if (event.which === 2) {
          valueAccessor()();
        }
      });
    }
  };

});
