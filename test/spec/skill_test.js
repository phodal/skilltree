/* global describe, it */

define(function (require) {
  'use strict';

  var Skill = require('/app/scripts/Skill.js');

  describe('Skill', function () {
    describe('Parse Test', function () {
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

      var skill = new Skill(html_skill);

      it('should parse skill tree', function () {
        skill.id.should.equal(1);
        skill.hasPoints().should.equal(false);
        skill.hasMaxPoints().should.equal(false);
        skill.hasDependencies().should.equal(false);
        skill.hasMultiplePoints().should.equal(false);
        skill.canAddPoints().should.equal(true);
        skill.canRemovePoints().should.equal(false);
        skill.talentSummary().should.equal('');
        skill.links[0].label.should.equal('无处不在的html');
        skill.links[0].url.should.equal('http://www.phodal.com/blog/be-a-geek-chapter-1-anywhere-html/');
        skill.books[0].label.should.equal('Head First HTML与CSS');
        skill.books[0].url.should.equal('http://www.phodal.com');
      });

      it('should can not add point after add 2 points', function () {
        skill.addPoint();
        skill.addPoint();
        skill.canAddPoints().should.equal(false);
        skill.canRemovePoints().should.equal(true);
      });
      it('should able add point after remove 1 point', function () {
        skill.removePoint();
        skill.canAddPoints().should.equal(true);
        skill.canRemovePoints().should.equal(true);
      });
    });
  });
});
