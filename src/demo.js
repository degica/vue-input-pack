import Vue from 'vue';
import App from './DemoApp';

Vue.config.debug = true;

new Vue({
  el: 'app',
  components: { App }
});
