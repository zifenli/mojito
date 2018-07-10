import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Components from './views/Components.vue';
import BugKiller from './components/BugKiller.vue';
import Reporter from './components/Reporter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
      children: [
        {
          path: 'bug-killer',
          component: BugKiller,
        },
        {
          path: 'reporter',
          component: Reporter,
        },
      ],
    },
  ],
});
