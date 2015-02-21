define(['scripts/Doc'], function(Doc) {
  'use strict';
  function Link(_e) {
    Doc.apply(this, arguments);
  }
  Link.prototype = new Doc();

  return Link;
});
