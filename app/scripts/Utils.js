define(['lib/knockout'], function(ko) {
  'use strict';
  function prettyJoin(array) {
    if (array.length > 2) {
      array = [array.slice(0, array.length - 1).join(', '), array[array.length - 1]];
    }
    return array.join(' 和 ');
  }

  function getSkillById(skills, id){
    return ko.utils.arrayFirst(skills, function (item) {
      return item.id === id;
    });
  }
  return {
    getSkillById: getSkillById,
    prettyJoin: prettyJoin
  };
});
