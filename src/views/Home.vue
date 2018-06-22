<template>
  <div class="home">
    <Reporter :template="template"/>
    <BugKiller :template="template"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Reporter from '@/components/Reporter.vue';
import BugKiller from '@/components/BugKiller.vue';

export default {
  name: 'home',
  computed: mapState([
    'template',
  ]),
  components: {
    Reporter,
    BugKiller,
  },
};
</script>

