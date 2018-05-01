// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue';
import App from './App';

// import all web components in a single location
// require('@polymer/iron-icon');


require('@vaadin/vaadin-button');
require('@vaadin/vaadin-text-field');
require('@vaadin/vaadin-notification');

require('@vaadin/vaadin-lumo-styles/color');
require('@vaadin/vaadin-lumo-styles/sizing');
require('@vaadin/vaadin-lumo-styles/spacing');
require('@vaadin/vaadin-lumo-styles/style');
require('@vaadin/vaadin-lumo-styles/typography');
require('@vaadin/vaadin-lumo-styles/icons');


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
