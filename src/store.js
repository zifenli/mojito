import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false,
    message: null,
  },
  mutations: {
    SOCKET_CONNECT: (state) => {
      state.connect = true;
    },
    SOCKET_MESSAGE: (state, message) => {
      state.message = message;
    },
  },
  actions: {
    socket_message: (context, message) => {
      context.commit('SOCKET_MESSAGE', message);
    },
  },
});
