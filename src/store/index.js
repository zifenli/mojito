import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import { state, mutations } from './mutations';
import article from './modules/article';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    article,
  },
});
