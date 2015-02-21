require.config({
  baseUrl: 'app',
  paths: {
    jquery: 'lib/jquery'
  }
});

require(['lib/knockout', 'scripts/TalentTree', 'scripts/TalentData', 'jquery'], function(ko, TalentTree, TalentData, $) {
  'use strict';
  var vm = new TalentTree(TalentData);
  ko.applyBindings(vm);

  setTimeout(function () {
    $('.page').addClass('animated');
  }, 50);
});
