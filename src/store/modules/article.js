import * as types from '../mutation-types';

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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
