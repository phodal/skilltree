/* global describe, it */

var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
requirejs.config({
  baseUrl: 'app/',
  nodeRequire: require
});

describe('Book,Link', function () {
  var Book, Link;
  before(function (done) {
    requirejs(['scripts/Book', 'scripts/Link'], function (Book_Class, Link_Class) {
      Book = Book_Class;
      Link = Link_Class;
      done();
    });
  });

  describe('Book Test', function () {
    it('should return book label & url', function () {
      var book_name = 'Head First HTML与CSS';
      var url = 'http://www.phodal.com';
      var books = {
        label: book_name,
        url: url
      };

      var _book = new Book(books);
      _book.label.should.equal(book_name);
      _book.url.should.equal(url);
    });
  });
  describe('Link Test', function () {
    it('should return link label & url', function () {
      var label = 'Head First HTML与CSS';
      var url = 'http://www.phodal.com';
      var link = {
        label: label,
        url: url
      };

      var _link = new Link(link);
      _link.label.should.equal(label);
      _link.url.should.equal(url);
    });
  });
});
