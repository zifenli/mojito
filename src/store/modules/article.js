import * as types from '../mutation-types';

const state = {
  article: {
    items: [
      {
        title: '数据灾备',
        content: '考虑先完成定期同步，sync数据06',
        image: 'https://tower.im/assets/default_avatars/waves.jpg',
      },
    ],
  },
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
