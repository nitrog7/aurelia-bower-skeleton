'use strict';

import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.options.pushState = true;
      config.map([
        {route: ['', 'welcome'], moduleId: 'views/home/welcome', nav: true, title: 'Home'},
        {route: 'flickr', moduleId: 'views/flickr/index', nav: true, title: 'Flickr'}
      ]);
    });
  }
}