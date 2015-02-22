define([''], function() {
  'use strict';
  function prettyJoin(array) {
    if (array.length > 2) {
      array = [array.slice(0, array.length - 1).join(', '), array[array.length - 1]];
    }
    return array.join(' and ');
  }

  return {
    prettyJoin: prettyJoin
  };
});
