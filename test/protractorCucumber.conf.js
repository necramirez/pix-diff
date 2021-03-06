'use strict';

exports.config = {

    baseUrl: 'http://www.example.com',

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        format: 'pretty',
        require: ['cucumber.steps.js']
    },

    specs: ['cucumber.feature'],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },

    directConnect: true,

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }

};