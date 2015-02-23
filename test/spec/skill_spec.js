/* global describe, it */

var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
requirejs.config({
  baseUrl: 'app/',
  nodeRequire: require
});

describe('Skill', function () {
  var Skill, _skill;
  before(function (done) {
    requirejs(['scripts/Skill'], function (Skill_Class) {
      Skill = Skill_Class;
      done();
    });
  });
  var html_skill = {
    "id": 1,
    "title": "HTML",
    "description": "Internet主要由从服务器通过HTTP协议向浏览器发送的HTML文档组成。HTML被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。",
    "rankDescriptions": [
      "理解如何创建和浏览一个基本的网页",
      "理解网页间是如何链接的、如何设计多列布局，可以处理表单字段和媒体元素"
    ],
    "links": [
      {
        "label": "无处不在的html",
        "url": "http://www.phodal.com/blog/be-a-geek-chapter-1-anywhere-html/"
      }
    ],
    "books": [
      {
        "label": "Head First HTML与CSS",
        "url": "http://www.phodal.com"
      }
    ],
    "maxPoints": 2,
    "stats": [
      {
        "title": "Intellect",
        "value": 1
      },
      {
        "title": "Charisma",
        "value": 1
      },
      {
        "title": "Strength",
        "value": 1
      }
    ]
  };

  describe('Parse Test', function () {
    it('should parse skill tree', function () {
      var _skill = new Skill(html_skill);
      _skill.id.should.equal(1);
      _skill.hasPoints().should.equal(false);
      _skill.hasMaxPoints().should.equal(false);
      _skill.hasDependencies().should.equal(false);
      _skill.hasMultiplePoints().should.equal(false);
      _skill.canAddPoints().should.equal(true);
      _skill.canRemovePoints().should.equal(false);
      _skill.talentSummary().should.equal('');
    });
    
    it('should parse books & links', function () {
      var _skill = new Skill(html_skill);
      _skill.links[0].label.should.equal('无处不在的html');
      _skill.links[0].url.should.equal('http://www.phodal.com/blog/be-a-geek-chapter-1-anywhere-html/');
      _skill.books[0].label.should.equal('Head First HTML与CSS');
      _skill.books[0].url.should.equal('http://www.phodal.com');
    });
  });

  describe('Skill Points Test', function () {
    it('should can not add point after add 2 points', function () {
      var _skill = new Skill(html_skill);
      _skill.addPoint();
      _skill.addPoint();
      _skill.canAddPoints().should.equal(false);
      _skill.canRemovePoints().should.equal(true);
    });

    it('should able add or remove point after add 1 point', function () {
      var _skill = new Skill(html_skill);
      _skill.addPoint();
      _skill.canAddPoints().should.equal(true);
      _skill.canRemovePoints().should.equal(true);
    });
  });
});
