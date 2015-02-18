/* global ko */

window.jiathis_config = {
  url: window.location.href,
  summary: '快来试试。',
  title: '我是 Level 1 Web Developer #Web技能树#',
  showClose: true,
  shortUrl: true,
  hideMore: false
};

function namespace(namespaceString) {
  'use strict';
  var parts = namespaceString.split('.'),
    parent = window,
    currentPart = '';

  for (var i = 0, length = parts.length; i < length; i++) {
    currentPart = parts[i];
    parent[currentPart] = parent[currentPart] || {};
    parent = parent[currentPart];
  }

  return parent;
}
function prettyJoin(array) {
  'use strict';
  if (array.length > 2) {
    array = [array.slice(0, array.length - 1).join(', '), array[array.length - 1]];
  }
  return array.join(' and ');
}
ko.bindingHandlers.rightClick = {
  init: function (element, valueAccessor) {
    'use strict';
    $(element).on('mousedown', function (event) {
      if (event.which === 3) {
        valueAccessor()();
      }
    }).on('contextmenu', function (event) {
      event.preventDefault();
    });
  }
};
ko.bindingHandlers.middleClick = {
  init: function (element, valueAccessor) {
    'use strict';
    $(element).on('mousedown', function (event) {
      if (event.which === 2) {
        valueAccessor()();
      }
    });
  }
};
function getInternetExplorerVersion() {
  'use strict';
  var rv = -1; // Return value assumes failure.
  if (navigator.appName === 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
    if (re.exec(ua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
  }
  return rv;
}
function isInvalidIEVersion() {
  'use strict';
  var ver = getInternetExplorerVersion();
  if (ver > -1 && ver < 9) {
    $('html').addClass('ltIE9');

    return true;
  }

  return false;
}
