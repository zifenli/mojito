<template>
  <div class="home">
    <Reporter msg="this is the Reporter area"/>
    <BugKiller/>
  </div>
</template>

<script>
import Reporter from '@/components/Reporter.vue';
import BugKiller from '@/components/BugKiller.vue';

export default {
  name: 'home',
  components: {
    Reporter,
    BugKiller,
  },
};
</script>

