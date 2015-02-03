'use strict';

System.config({
  'paths': {
    '*': '*.js',
    'aurelia:*': 'common/*/dist/system/index.js',
    'common:*': 'common/*.js',
    'core-js': 'common/core-js/client/core.min.js'
  },
  'map': {
    'aurelia-binding': 'aurelia:aurelia-binding',
    'aurelia-bootstrapper': 'aurelia:aurelia-bootstrapper',
    'aurelia-dependency-injection': 'aurelia:aurelia-dependency-injection',
    'aurelia-event-aggregator': 'aurelia:aurelia-event-aggregator',
    'aurelia-framework': 'aurelia:aurelia-framework',
    'aurelia-history': 'aurelia:aurelia-history',
    'aurelia-history-browser': 'aurelia:aurelia-history-browser',
    'aurelia-html-template-element': 'aurelia:HTMLTemplateElement',
    'aurelia-http-client': 'aurelia:aurelia-http-client',
    'aurelia-loader': 'aurelia:aurelia-loader',
    'aurelia-loader-default': 'aurelia:aurelia-loader-default',
    'aurelia-logging': 'aurelia:aurelia-logging',
    'aurelia-logging-console': 'aurelia:aurelia-logging-console',
    'aurelia-metadata': 'aurelia:aurelia-metadata',
    'aurelia-path': 'aurelia:aurelia-path',
    'aurelia-route-recognizer': 'aurelia:aurelia-route-recognizer',
    'aurelia-router': 'aurelia:aurelia-router',
    'aurelia-task-queue': 'aurelia:aurelia-task-queue',
    'aurelia-templating': 'aurelia:aurelia-templating',
    'aurelia-templating-binding': 'aurelia:aurelia-templating-binding',
    'aurelia-templating-resources': 'aurelia:aurelia-templating-resources',
    'aurelia-templating-router': 'aurelia:aurelia-templating-router',

    'bootstrap': 'common:nitrog7-bootstrap',
    'font-awesome': 'common:font-awesome',
    'core-js': 'core-js',

    'aurelia:aurelia-binding': {
      'array-change-records': 'common/aurelia-binding/dist/system/array-change-records',
      'array-observation': 'common/aurelia-binding/dist/system/array-observation',
      'ast': 'common/aurelia-binding/dist/system/ast',
      'binding-expression': 'common/aurelia-binding/dist/system/binding-expression',
      'binding-modes': 'common/aurelia-binding/dist/system/binding-modes',
      'call-expression': 'common/aurelia-binding/dist/system/call-expression',
      'composite-observer': 'common/aurelia-binding/dist/system/composite-observer',
      'dirty-checking': 'common/aurelia-binding/dist/system/dirty-checking',
      'event-manager': 'common/aurelia-binding/dist/system/event-manager',
      'lexer': 'common/aurelia-binding/dist/system/lexer',
      'listener-expression': 'common/aurelia-binding/dist/system/listener-expression',
      'name-expression': 'common/aurelia-binding/dist/system/name-expression',
      'observer-locator': 'common/aurelia-binding/dist/system/observer-locator',
      'parser': 'common/aurelia-binding/dist/system/parser',
      'path-observer': 'common/aurelia-binding/dist/system/path-observer',
      'property-observation': 'common/aurelia-binding/dist/system/property-observation',
      'value-converter': 'common/aurelia-binding/dist/system/value-converter',
      'aurelia-metadata': 'aurelia:aurelia-metadata',
      'aurelia-task-queue': 'aurelia:aurelia-task-queue'
    },
    'aurelia:aurelia-bootstrapper': {
      'aurelia-event-aggregator': 'aurelia:aurelia-event-aggregator',
      'aurelia-framework': 'aurelia:aurelia-framework',
      'aurelia-history': 'aurelia:aurelia-history',
      'aurelia-history-browser': 'aurelia:aurelia-history-browser',
      'aurelia-loader-default': 'aurelia:aurelia-loader-default',
      'aurelia-logging-console': 'aurelia:aurelia-logging-console',
      'aurelia-router': 'aurelia:aurelia-router',
      'aurelia-templating': 'aurelia:aurelia-templating',
      'aurelia-templating-binding': 'aurelia:aurelia-templating-binding',
      'aurelia-templating-resources': 'aurelia:aurelia-templating-resources',
      'aurelia-templating-router': 'aurelia:aurelia-templating-router'
    },
    'aurelia:aurelia-dependency-injection': {
      'container': 'common/aurelia-dependency-injection/dist/system/container',
      'metadata': 'common/aurelia-dependency-injection/dist/system/metadata',
      'util': 'common/aurelia-dependency-injection/dist/system/util',
      'aurelia-metadata': 'aurelia:aurelia-metadata',
      'core-js': 'core-js'
    },
    'aurelia:aurelia-framework': {
      'aurelia': 'common/aurelia-framework/dist/system/aurelia',
      'plugins': 'common/aurelia-framework/dist/system/plugins',
      'aurelia-binding': 'aurelia:aurelia-binding',
      'aurelia-dependency-injection': 'aurelia:aurelia-dependency-injection',
      'aurelia-loader': 'aurelia:aurelia-loader',
      'aurelia-logging': 'aurelia:aurelia-logging',
      'aurelia-metadata': 'aurelia:aurelia-metadata',
      'aurelia-task-queue': 'aurelia:aurelia-task-queue',
      'aurelia-templating': 'aurelia:aurelia-templating'
    },
    'aurelia:aurelia-history-browser': {
      'aurelia-history': 'aurelia:aurelia-history',
      'core-js': 'core-js'
    },
    'aurelia:aurelia-http-client': {
      'headers': 'common/aurelia-http-client/dist/system/headers',
      'http-client': 'common/aurelia-http-client/dist/system/http-client',
      'http-request-message': 'common/aurelia-http-client/dist/system/http-request-message',
      'http-response-message': 'common/aurelia-http-client/dist/system/http-response-message',
      'jsonp-request-message': 'common/aurelia-http-client/dist/system/jsonp-request-message',
      'aurelia-path': 'aurelia:aurelia-path',
      'core-js': 'core-js'
    },
    'aurelia:aurelia-loader-default': {
      'aurelia-loader': 'aurelia:aurelia-loader',
      'aurelia-metadata': 'aurelia:aurelia-metadata',
      'aurelia-path': 'aurelia:aurelia-path'
    },
    'aurelia:aurelia-loader': {
      'aurelia-html-template-element': 'aurelia:aurelia-html-template-element',
      'core-js': 'core-js',
      'webcomponentsjs': 'common/webcomponentsjs'
    },
    'aurelia:aurelia-metadata': {
      'metadata': 'common/aurelia-metadata/dist/system/metadata',
      'origin': 'common/aurelia-metadata/dist/system/origin',
      'resource-type': 'common/aurelia-metadata/dist/system/resource-type'
    },
    'aurelia:aurelia-route-recognizer': {
      'dsl': 'common/aurelia-route-recognizer/dist/system/dsl'
    },
    'aurelia:aurelia-router': {
      'activation': 'common/aurelia-router/dist/system/activation',
      'app-router': 'common/aurelia-router/dist/system/app-router',
      'model-binding': 'common/aurelia-router/dist/system/model-binding',
      'navigation-commands': 'common/aurelia-router/dist/system/navigation-commands',
      'navigation-context': 'common/aurelia-router/dist/system/navigation-context',
      'navigation-instruction': 'common/aurelia-router/dist/system/navigation-instruction',
      'navigation-plan': 'common/aurelia-router/dist/system/navigation-plan',
      'pipeline': 'common/aurelia-router/dist/system/pipeline',
      'pipeline-provider': 'common/aurelia-router/dist/system/pipeline-provider',
      'route-loading': 'common/aurelia-router/dist/system/route-loading',
      'router': 'common/aurelia-router/dist/system/router',
      'router-configuration': 'common/aurelia-router/dist/system/router-configuration',
      'util': 'common/aurelia-router/dist/system/util',
      'aurelia-dependency-injection': 'aurelia:aurelia-dependency-injection',
      'aurelia-history': 'aurelia:aurelia-history',
      'aurelia-path': 'aurelia:aurelia-path',
      'aurelia-route-recognizer': 'aurelia:aurelia-route-recognizer',
      'core-js': 'core-js'
    },
    'aurelia:aurelia-templating': {
      'attached-behavior': 'common/aurelia-templating/dist/system/attached-behavior',
      'behavior-instance': 'common/aurelia-templating/dist/system/behavior-instance',
      'behaviors': 'common/aurelia-templating/dist/system/behaviors',
      'binding-language': 'common/aurelia-templating/dist/system/binding-language',
      'children': 'common/aurelia-templating/dist/system/children',
      'composition-engine': 'common/aurelia-templating/dist/system/composition-engine',
      'content-selector': 'common/aurelia-templating/dist/system/content-selector',
      'custom-element': 'common/aurelia-templating/dist/system/custom-element',
      'element-config': 'common/aurelia-templating/dist/system/element-config',
      'property': 'common/aurelia-templating/dist/system/property',
      'resource-coordinator': 'common/aurelia-templating/dist/system/resource-coordinator',
      'resource-registry': 'common/aurelia-templating/dist/system/resource-registry',
      'template-controller': 'common/aurelia-templating/dist/system/template-controller',
      'util': 'common/aurelia-templating/dist/system/util',
      'view': 'common/aurelia-templating/dist/system/view',
      'view-compiler': 'common/aurelia-templating/dist/system/view-compiler',
      'view-engine': 'common/aurelia-templating/dist/system/view-engine',
      'view-factory': 'common/aurelia-templating/dist/system/view-factory',
      'view-slot': 'common/aurelia-templating/dist/system/view-slot',
      'view-strategy': 'common/aurelia-templating/dist/system/view-strategy',
      'aurelia-binding': 'aurelia:aurelia-binding',
      'aurelia-dependency-injection': 'aurelia:aurelia-dependency-injection',
      'aurelia-html-template-element': 'aurelia:aurelia-html-template-element',
      'aurelia-loader': 'aurelia:aurelia-loader',
      'aurelia-logging': 'aurelia:aurelia-logging',
      'aurelia-metadata': 'aurelia:aurelia-metadata',
      'aurelia-path': 'aurelia:aurelia-path',
      'aurelia-task-queue': 'aurelia:aurelia-task-queue',
      'core-js': 'core-js'
    },
    'aurelia:aurelia-templating-binding': {
      'binding-language': 'common/aurelia-templating-binding/dist/system/binding-language',
      'syntax-interpreter': 'common/aurelia-templating-binding/dist/system/syntax-interpreter',
      'aurelia-binding': 'aurelia:aurelia-binding',
      'aurelia-templating': 'aurelia:aurelia-templating'
    },
    'aurelia:aurelia-templating-resources': {
      'compose': 'common/aurelia-templating-resources/dist/system/compose',
      'global-behavior': 'common/aurelia-templating-resources/dist/system/global-behavior',
      'if': 'common/aurelia-templating-resources/dist/system/if',
      'repeat': 'common/aurelia-templating-resources/dist/system/repeat',
      'selected-item': 'common/aurelia-templating-resources/dist/system/selected-item',
      'show': 'common/aurelia-templating-resources/dist/system/show',
      'aurelia-binding': 'aurelia:aurelia-binding',
      'aurelia-dependency-injection': 'aurelia:aurelia-dependency-injection',
      'aurelia-templating': 'aurelia:aurelia-templating',
      'core-js': 'core-js'
    },
    'aurelia:aurelia-templating-router': {
      'route-loader': 'common/aurelia-templating-router/dist/system/route-loader',
      'router-view': 'common/aurelia-templating-router/dist/system/router-view',
      'aurelia-dependency-injection': 'aurelia:aurelia-dependency-injection',
      'aurelia-metadata': 'aurelia:aurelia-metadata',
      'aurelia-path': 'aurelia:aurelia-path',
      'aurelia-router': 'aurelia:aurelia-router',
      'aurelia-templating': 'aurelia:aurelia-templating'
    }
  }
});


System.baseUrl = './';
System.import('aurelia-bootstrapper').catch(console.error.bind(console));