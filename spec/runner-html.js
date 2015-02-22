require(["config"], function() {
    require(["jasmine/boot", "jasmine/html-reporter"], function(jasmine, htmlReporter) {
	require(["spec/all-spec"], function() {
	    htmlReporter.initialize();
	    jasmine.getEnv().execute();
	});
    });
});

