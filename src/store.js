import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    connect: false,
    template: null,
    article: null,
    table: null,
  },
  mutations: {
    SOCKET_CONNECT: (state) => {
      const stat = state;
      stat.connect = true;
    },
    SOCKET_MESSAGE: (state, message) => {
      const stat = state;
      stat.template = message[0].meta.template;
      if (stat.template === 'article') {
        stat.article = message[0].data;
      }
      if (stat.template === 'table') {
        stat.table = message[0].data;
      }
    },
  },
  actions: {
    socket_message: (context, message) => {
      context.commit('SOCKET_MESSAGE', message);
    },
  },
});
