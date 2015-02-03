'use strict';

module.exports = {
  port: 7010,
  path: {
    build: './build/app',
    app: './app',
    less: './src/less',
    common: {
      dir: './app/common',
      system: [
        'es6-module-loader/dist/es6-module-loader.js',
        'es6-module-loader/dist/es6-module-loader.js.map',
        'traceur/traceur.js',
        'traceur/traceur.min.js',
        'traceur/traceur.min.map',
        'system.js/dist/system.js',
        'system.js/dist/system.js.map'
      ],
      files: [
        'aurelia-binding/dist/system/**',
        'aurelia-bootstrapper/dist/system/**',
        'aurelia-dependency-injection/dist/system/**',
        'aurelia-event-aggregator/dist/system/**',
        'aurelia-framework/dist/system/**',
        'aurelia-history/dist/system/**',
        'aurelia-history-browser/dist/system/**',
        'aurelia-html-template-element/dist/system/**',
        'aurelia-http-client/dist/system/**',
        'aurelia-loader/dist/system/**',
        'aurelia-loader-default/dist/system/**',
        'aurelia-logging/dist/system/**',
        'aurelia-logging-console/dist/system/**',
        'aurelia-metadata/dist/system/**',
        'aurelia-path/dist/system/**',
        'aurelia-route-recognizer/dist/system/**',
        'aurelia-router/dist/system/**',
        'aurelia-task-queue/dist/system/**',
        'aurelia-templating/dist/system/**',
        'aurelia-templating-binding/dist/system/**',
        'aurelia-templating-resources/dist/system/**',
        'aurelia-templating-router/dist/system/**',
        'bootstrap/dist/js/bootstrap.min.js',
        'font-awesome/fonts/**',
        'jquery/dist/jquery.min.js',
        'jquery/dist/jquery.min.map',
        'core-js/client/core.min.js',
        'core-js/client/core.min.js.map',
        'webcomponentsjs/CustomElements.min.js',
        'webcomponentsjs/HTMLImports.min.js',
        'webcomponentsjs/ShadowDOM.min.js',
        'webcomponentsjs/webcomponents.min.js'
      ]
    }
  },

  compiler: {
    filename: '',
    filenameRelative: '',
    blacklist: [],
    whitelist: [],
    modules: '',
    sourceMap: true,
    sourceMapName: '',
    sourceFileName: '',
    sourceRoot: '',
    moduleRoot: '',
    moduleIds: false,
    runtime: false,
    experimental: false,
    format: {
      comments: false,
      compact: false,
      indent: {
        parentheses: true,
        adjustMultilineComment: true,
        style: '  ',
        base: 0
      }
    }
  }
};