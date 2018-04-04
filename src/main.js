// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue';
import App from './App';

// import all web components in a single location
require('../bower_components/iron-icon/iron-icon.html');
require('../bower_components/vaadin-button/vaadin-button.html');
require('../bower_components/vaadin-text-field/vaadin-text-field.html');
require('../bower_components/vaadin-grid/vaadin-grid.html');
require('../bower_components/vaadin-grid/vaadin-grid-column.html');
require('../bower_components/iron-list/iron-list.html');
require('../bower_components/vaadin-lumo-styles/color.html');
require('../bower_components/vaadin-lumo-styles/sizing.html');
require('../bower_components/vaadin-lumo-styles/spacing.html');
require('../bower_components/vaadin-lumo-styles/style.html');
require('../bower_components/vaadin-lumo-styles/typography.html');
require('../bower_components/vaadin-lumo-styles/icons.html');

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  '/^vaadin-/',
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    /* eslint-disable no-console */
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('SW registration succeeded: ', registration);
      }).catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}
