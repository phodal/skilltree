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
        talent.updateLastHash("_m2n2x2y2_1_Phodal");
        talent.level().should.equal(9);
        talent.avatarName().should.equal("Phodal");
      });

      it('should parse hash to talent tree with portrait', function () {
        var talent = new TalentTree(all_skills);
        talent.updateLastHash("_a2b2c2de3fgh3i2jklm2n2opqr2s2tuvwx2y2z_2_Name");
        talent.level().should.equal(41);
        talent.portrait().should.equal(2);
        talent.avatarName().should.equal("Name");
        talent.hash().should.equal("_a2b2c2de3fgh3i2jklm2n2opqr2s2tuvwx2y2z_2_Name");
      });
    });
    describe('Hash Test', function () {
      it('should return current hash', function () {
        var talent = new TalentTree(all_skills);
        talent.updateLastHash("_a2b2c2de3fgh3i2jklm2n2opqr2s2tuvwx2y2z_2_Name");
        talent.hash().should.equal("_a2b2c2de3fgh3i2jklm2n2opqr2s2tuvwx2y2z_2_Name");
        talent.level().should.equal(41);
        talent.talentSummary().should.equal("时尚, 咝咝, 狡猾, 灵活, 美型男, XXL 背包, 真理探寻者, 心灵编织, 思想穿透者, 艺术家, 咒术师, 炼金, 监管者, 频谱指南, 半仙");
      });
    });

    describe('Stats Test', function () {
      it('should return correctly stats 1', function () {
        var talent = new TalentTree(all_skills);
        talent.updateLastHash("_m2n2x2y2_1_Phodal");
        talent.stats().toString().should.equal([
          { title: '魅力', value: 9 },
          { title: '灵巧', value: 13 },
          { title: '坚韧', value: 19 },
          { title: '智力', value: 9 },
          { title: '力量', value: 19 },
          { title: '智慧', value: 9 }
        ].toString());
      });

      it('should return correctly stats 2', function () {
        var talent = new TalentTree(all_skills);
        talent.updateLastHash("_a2b2c2de3fgh3i2jklm2n2opqr2s2tuvwx2y2z_2_Name");
        talent.stats().toString().should.equal([
          { title: '魅力', value: 53 },
          { title: '灵巧', value: 45 },
          { title: '坚韧', value: 27 },
          { title: '智力', value: 21 },
          { title: '力量', value: 40 },
          { title: '智慧', value: 26 }
        ].toString());
      });
    });
  });
});
