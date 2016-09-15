/* */ 
(function(process) {
  module.exports = function(config) {
    if (process.env.TRAVIS && !process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
      console.warn('No SAUCE credentials found (missing SAUCE_USERNAME and SAUCE_ACCESS_KEY env variables). Skipping SauceLabs testing.');
      return;
    }
    var customLaunchers = {
      'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '31'
      },
      'SL_ChromeLatest': {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      'SL_InternetExplorer8': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '8'
      },
      'SL_InternetExplorer9': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '9'
      },
      'SL_InternetExplorer10': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '10'
      },
      'SL_InternetExplorerLatest': {
        base: 'SauceLabs',
        browserName: 'internet explorer'
      },
      'SL_FireFox31': {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '31'
      },
      'SL_FireFoxLatest': {
        base: 'SauceLabs',
        browserName: 'firefox'
      },
      'SL_Safari5': {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '5'
      },
      'SL_SafariLatest': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.11'
      },
      'SL_Android4': {
        base: 'SauceLabs',
        browserName: 'Android',
        version: '4'
      },
      'SL_AndroidLatest': {
        base: 'SauceLabs',
        browserName: 'Android'
      }
    };
    var jobId = process.env.TRAVIS_JOB_NUMBER || new Date().getTime();
    config.set({
      basePath: '',
      frameworks: ['mocha'],
      files: ['node_modules/expect.js/index.js', 'dist/xss-filters.min.js', 'tests/polyfills.js', 'tests/utils.js', 'tests/unit/*.js'],
      reporters: ['dots', 'saucelabs'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      sauceLabs: {
        testName: 'Unit testing xss-filters',
        recordScreenshots: false,
        tags: ['xss-filters', jobId],
        tunnelIdentifier: jobId,
        build: process.env.TRAVIS_BUILD_NUMBER || null,
        startConnect: false
      },
      captureTimeout: 30000,
      customLaunchers: customLaunchers,
      browsers: Object.keys(customLaunchers),
      singleRun: true
    });
  };
})(require('process'));
