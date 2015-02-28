/* global describe, it */

var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
var jsdom = require('mocha-jsdom');
var skill = require('fs').readFileSync('./app/data/web.json', 'utf8');

requirejs.config({
  baseUrl: 'app/',
  nodeRequire: require
});

describe('Utils', function () {
  var Utils, TalentTree, Skill, ko;
  jsdom();
  before(function (done) {
    requirejs(['scripts/Utils', 'scripts/Skill', 'lib/knockout'],
      function (Utils_Class, Skill_Class, Knockout) {
        Utils = Utils_Class;
        Skill = Skill_Class;
        ko = Knockout;
        done();
      });
  });
  var all_skills = JSON.parse(skill);

  describe('Pretty Join', function () {
    it('should return string with and when use array', function () {
      var dependencies = ["Web Design Mastery", "jQuery Effects"];
      Utils.prettyJoin(dependencies).should.equal("Web Design Mastery 和 jQuery Effects")
    });
  });

  describe('Get Skill by ID', function () {
    it('should return string with and when use array', function () {
      var skills = ko.observableArray(ko.utils.arrayMap(all_skills.skills, function (item) {
        return new Skill(item);
      }));
      Utils.getSkillById(skills(), 1).id.should.equal(1);
      Utils.getSkillById(skills(), 1).title.should.equal('HTML');
    });
  });

});
