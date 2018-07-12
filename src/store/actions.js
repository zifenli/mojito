import * as types from './mutation-types';

export default {
  socket_message: (context, message) => {
    context.commit(types.SOCKET_MESSAGE, message);
  },
};
