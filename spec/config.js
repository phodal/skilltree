requirejs.config({
    baseUrl: "../app/lib",
    paths: {
        "spec": "../../spec",
        "jasmine": "../../spec/lib/jasmine",
        "kkb": "../spec/kkb",
        "knockout": [
            "knockout"
        ]
    },
    shim: {
        "jasmine/jasmine": {
            exports: "jasmineRequire"
        },
        "jasmine/jasmine-html": {
            deps: ["jasmine/jasmine"]
        }
    }
});
