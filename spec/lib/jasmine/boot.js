/**
 Enviroment independent parts extracted from `boot.js` of Jasmine.
 For original `boot.js`, see
  https://github.com/pivotal/jasmine/blob/master/lib/jasmine-core/boot.js
 */
define([
    "jasmine/jasmine"
], function(jasmineRequire) {

    /**
     * ## Require &amp; Instantiate
     *
     * Require Jasmine's core files. Specifically, this requires and attaches all of Jasmine's code to the `jasmine` reference.
     */
    var jasmine = jasmineRequire.core(jasmineRequire);

    /**
     * Create the Jasmine environment. This is used to run all specs in a project.
     */
    var env = jasmine.getEnv();

    /**
     * ## The Global Interface
     *
     * Build up the functions that will be exposed as the Jasmine public interface. A project can customize, rename or alias any of these functions as desired, provided the implementation remains unchanged.
     */
    var jasmineInterface = {
	describe: function(description, specDefinitions) {
	    return env.describe(description, specDefinitions);
	},
	xdescribe: function(description, specDefinitions) {
	    return env.xdescribe(description, specDefinitions);
	},
	it: function(desc, func) {
	    return env.it(desc, func);
	},
	xit: function(desc, func) {
	    return env.xit(desc, func);
	},
	beforeEach: function(beforeEachFunction) {
	    return env.beforeEach(beforeEachFunction);
	},
	afterEach: function(afterEachFunction) {
	    return env.afterEach(afterEachFunction);
	},
	expect: function(actual) {
	    return env.expect(actual);
	},
	pending: function() {
	    return env.pending();
	},
	spyOn: function(obj, methodName) {
	    return env.spyOn(obj, methodName);
	},
	jsApiReporter: new jasmine.JsApiReporter({
	    timer: new jasmine.Timer()
	})
    };

    /**
     * Add all of the Jasmine global/public interface to the proper global, so a project can use the public interface directly. For example, calling `describe` in specs instead of `jasmine.getEnv().describe`.
     */
    if (typeof window == "undefined" && typeof exports == "object") {
	extend(exports, jasmineInterface);
    } else {
	extend(window, jasmineInterface);
    }

    /**
     * Expose the interface for adding custom equality testers.
     */
    jasmine.addCustomEqualityTester = function(tester) {
	env.addCustomEqualityTester(tester);
    };

    /**
     * Expose the interface for adding custom expectation matchers
     */
    jasmine.addMatchers = function(matchers) {
	return env.addMatchers(matchers);
    };

    /**
     * Expose the mock interface for the JavaScript timeout functions
     */
    jasmine.clock = function() {
	return env.clock;
    };

    /**
     * The `jsApiReporter` also receives spec results, and is used by any environment that needs to extract the results  from JavaScript.
     */
    env.addReporter(jasmineInterface.jsApiReporter);

    /**
     * Setting up timing functions to be able to be overridden. Certain browsers (Safari, IE 8, phantomjs) require this hack.
     */
    if (window) {
	window.setTimeout = window.setTimeout;
	window.setInterval = window.setInterval;
	window.clearTimeout = window.clearTimeout;
	window.clearInterval = window.clearInterval;
    }

    /**
     * Helper function for readability above.
     */
    function extend(destination, source) {
	for (var property in source) destination[property] = source[property];
	return destination;
    }

    return jasmine;

});
