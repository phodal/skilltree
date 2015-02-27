/* global describe, it */

var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
var skill = require('fs').readFileSync('./app/data/web.json', 'utf8');
var jsdom = require('mocha-jsdom');

requirejs.config({
  baseUrl: 'app/',
  nodeRequire: require
});

describe('Talent Tree Test', function () {
  var TalentTree;
  jsdom();

  before(function (done) {
    requirejs(['scripts/TalentTree'], function (TalentTree_Class) {
      TalentTree = TalentTree_Class;
      done();
    });
  });
  var all_skills = JSON.parse(skill);

  describe('Parse Test', function () {
    it('should parse html talent tree', function () {
      var talent = new TalentTree(all_skills);
      talent.avatarName().should.equal('Name');
      talent.noAvatarName().should.equal(true);
      talent.canShare().should.equal(false);
    });

    it('should remove avatar tips after set name', function () {
      var talent = new TalentTree(all_skills);
      talent.avatarName('Phodal');
      talent.avatarName().should.equal('Phodal');
      talent.noAvatarName().should.equal(false);
      talent.canShare().should.equal(true);
    });
  });

  describe('Level Test', function () {
    describe('Hash Test', function () {
      it('should parse hash to talent tree', function () {
        var talent = new TalentTree(all_skills);
        talent.updateHash("_m2n2x2y2_1_Phodal");
        talent.level().should.equal(9);
        talent.avatarName().should.equal("Phodal");
      });

      it('should parse hash to talent tree with portrait', function () {
        var talent = new TalentTree(all_skills);
        talent.updateHash("_a2b2c2de3fgh3i2jklm2n2opqr2s2tuvwx2y2z_2_Name");
        talent.level().should.equal(41);
        talent.portrait().should.equal(2);
        talent.avatarName().should.equal("Name");
      });
    });
  });
});
