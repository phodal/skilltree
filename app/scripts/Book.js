define([], function() {
  var Book = function (_e) {
    var e = _e || {};
    var self = this;

    self.book_name = e.book_name || (e.url || 'Learn more');
    self.url = e.url || 'javascript:void(0)';

    return self;
  };

  return Book;
});
