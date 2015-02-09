function namespace(namespaceString) {
	var parts = namespaceString.split('.'),
		parent = window,
		currentPart = '';

	for(var i = 0, length = parts.length; i < length; i++) {
		currentPart = parts[i];
		parent[currentPart] = parent[currentPart] || {};
		parent = parent[currentPart];
	}

	return parent;
}
function prettyJoin(array) {
	if(array.length >2) array = [array.slice(0,array.length-1).join(', '), array[array.length-1]];
	return array.join(' and ');
}
ko.bindingHandlers.rightClick = {
	init: function(element, valueAccessor) {
		$(element).on('mousedown', function(event) {
			if(event.which==3) valueAccessor()();
		}).on('contextmenu', function(event) {
			event.preventDefault();
		});
	}
};
ko.bindingHandlers.middleClick = {
	init: function(element, valueAccessor) {
		$(element).on('mousedown', function(event) {
			if(event.which==2) valueAccessor()();
		});
	}
};
function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
function isInvalidIEVersion() {
    var ver = getInternetExplorerVersion();
    if (ver > -1 && ver < 9) {
        $('html').addClass("ltIE9");

        return true;
    }

    return false;
}

//konami code plugin
(function ($) {

    $.fn.konami = function (callback, code) {
        if (code == undefined) code = "38,38,40,40,37,39,37,39,66,65";

        return this.each(function () {
            var kkeys = [];
            $(this).keydown(function (e) {
                kkeys.push(e.keyCode);
                if (kkeys.toString().indexOf(code) >= 0) {
                    $(this).unbind('keydown', arguments.callee);
                    callback(e);
                }
            });
        });
    }

})(jQuery);