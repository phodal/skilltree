require.config({
  baseUrl: 'app',
  paths: {
    jquery: 'lib/jquery'
  }
});

require(['lib/knockout', 'scripts/TalentTree', 'scripts/TalentData'], function(ko, TalentTree, TalentData) {
  var vm = new TalentTree(TalentData); //Make a new Talent Tree VM based on the data in tft.dnd.data.js
  ko.applyBindings(vm);
  //Allow a split second for binding before turning on animated transitions for the UI
  setTimeout(function () {
    $('.page').addClass('animated');
  }, 50);
});
