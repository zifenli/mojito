import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    templates: ['Reporter', 'BugKiller', 'ChartDisplay'],
    connect: false,
    template: null,
    article: {
      items: [
        {
          title: '数据灾备',
          content: '考虑先完成定期同步，sync数据06',
          image: 'https://tower.im/assets/default_avatars/waves.jpg',
        },
      ],
    },
    table: {
      items: [
        ['名称', '地址', '电话'],
        ['陈驰远', '北京', '18614043303'],
        ['李自奋', '北京', '18674054129'],
        ['陈驰远', '北京', '18614043303'],
        ['李自奋', '北京', '18674054129'],
      ],
    },
  },
  mtations: {
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
