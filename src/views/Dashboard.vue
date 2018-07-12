<template>
  <div class="home">
    <Layout>
      <template v-for="(component, index) in templates" :slot="'slot'+ (++index)">
        <component :is="component"  :key="index"></component>
      </template>
    </Layout>
 </div>
</template>

<script>
import { mapState } from 'vuex';
import Reporter from '@/components/Reporter.vue';
import BugKiller from '@/components/BugKiller.vue';
import ChartDisplay from '@/components/ChartDisplay.vue';
import Layout from '@/components/layout/Layout.vue';
import LayoutItem from '@/components/LayoutItem.vue';

export default {
  name: 'home',
  computed: {
    ...mapState([
      'templates',
    ]),
  },
  components: {
    Reporter,
    BugKiller,
    Layout,
    ChartDisplay,
    LayoutItem,
  },
};
</script>

