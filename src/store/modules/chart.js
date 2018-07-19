import * as types from '../mutation-types';
import * as templates from '../templates';

const state = {
  reports: {
    items: [
      ['名称', '地址', '电话'],
      ['陈驰远', '北京', '18614043303'],
      ['李自奋', '北京', '18674054129'],
      ['陈驰远', '北京', '18614043303'],
      ['李自奋', '北京', '18674054129'],
    ],
  },
};

const mutations = {
  [types.SOCKET_MESSAGE](state, message) {
    console.log(message);
    const st = state;
    const data = message[0];
    if (data.template === templates.CHART) {
      st.reports = data.data;
    }
  },
};

export default {
  state,
  mutations,
};
