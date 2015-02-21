require.config({
  baseUrl: 'app',
  paths:{
    jquery: 'lib/jquery'
  }
});

require(['scripts/ko-bindings']);

require(['lib/knockout', 'scripts/TalentTree', 'scripts/TalentData'], function(ko,TalentTree, TalentData) {
  'use strict';
  var vm = new TalentTree(TalentData);
  ko.applyBindings(vm);
});
