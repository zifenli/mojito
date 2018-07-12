import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import 'iview/dist/styles/iview.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueSocketio, 'http://localhost:3333/?channelId=TEST', store);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
