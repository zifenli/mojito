import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import socket from './modules/socket';
import article from './modules/article';
import reporter from './modules/reporter';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: ['Reporter', 'BugKiller', 'ChartDisplay'],
    layout: 1,
  },
  actions,
  modules: {
    socket,
    article,
    reporter,
  },
});
