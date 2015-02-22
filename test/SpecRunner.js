require.config({
  baseUrl: '/app',
  paths: {
    'jquery': '/app/lib/jquery',
    'mocha': '/test/bower_components/mocha/mocha',
    'chai': '/test/bower_components/chai/chai',
    'chai-jquery': '/test/bower_components/chai-jquery/chai-jquery'
  },
  shim: {
    'chai-jquery': ['jquery', 'chai']
  }
});

require(['require', 'chai', 'chai-jquery', 'mocha', 'jquery'], function(require, chai, chaiJquery){

  // Chai
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;
  chai.use(chaiJquery);

  /*globals mocha */
  mocha.setup('bdd');

  require([
    'spec/docs_test.js'
  ], function(require) {
    mocha.run();
  });

});
