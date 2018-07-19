import * as types from '../mutation-types';
import * as templates from '../templates';

const state = {
  article: {},
};

const getters = {
  article: state => state.article,
};

const actions = {

};

const mutations = {
  [types.UPDATE_ARTICLE](state, data) {
    const st = state;
    st.article = data;
  },
  [types.SOCKET_MESSAGE](state, message) {
    console.log(message);
    const st = state;
    const data = message[0];
    if (data.template === templates.ARTICLE) {
      st.article = data.data;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
