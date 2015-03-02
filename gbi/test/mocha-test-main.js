/*global mocha, Handlebars*/
'use strict';

require.config({
    baseUrl: '/scripts',

    wrapShim: true,
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        foundation: {
            deps: [
                'jquery'
            ]
        },
        handlebars: {
            exports: 'Handlebars',
            init: function () {
                this.Handlebars = Handlebars;
                return this.Handlebars;
            }
        },
        'marionette': {
            exports: 'Marionette',
            deps: [
                'backbone'
            ]
        }
    },

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        foundation: '../bower_components/foundation/js/foundation',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        handlebars: '../bower_components/handlebars/handlebars.runtime'
    }
});

require([
    'backbone',
    'jquery',
    'underscore',
    'foundation',
    'handlebars'
], function () {
    var specFolder = 'spec/';
    require([
            specFolder + 'navigation/navigationViewSpec.js',
            specFolder + 'location/locationViewSpec.js',
            specFolder + 'exampleTestSpec.js'

    ], function () {
        // Start the tests
        mocha.run();
    });
});