/* global describe, it */

define(function (require) {
  'use strict';

  var Book = require('/app/scripts/Book.js');
  var Link = require('/app/scripts/Link.js');

  describe('Book,Link', function () {
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
});
