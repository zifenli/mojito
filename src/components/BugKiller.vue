<template>
  <div class="m-bugKiller">
    <Card>
      <p slot="title">
        BUGKILLER
      </p>
      <div v-for="(item, index) in article.items" :key="index">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'iview';
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'article',
  ]),
  props: {
    template: String,
  },
  components: {
    Card,
  },
};
</script>
