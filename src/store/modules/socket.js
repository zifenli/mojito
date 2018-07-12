import * as types from '../mutation-types';

const state = {
  connect: false,
  templates: ['Reporter', 'BugKiller', 'ChartDisplay'],
  template: null,
};

const mutations = {
  [types.SOCKET_CONNECT](state) {
    const stat = state;
    stat.connect = true;
  },
  [types.SOCKET_MESSAGE](state, message) {
    const stat = state;
    // stat.template = message[0].meta.template;
    if (stat.template === 'article') {
      stat.article = message[0].data;
    }
    if (stat.template === 'table') {
      stat.table = message[0].data;
    }
  },
};

export default {
  state,
  mutations,
};
