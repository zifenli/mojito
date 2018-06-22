<template>
  <div class="m-bugKiller">
    <h3>BugKiller: {{template}}</h3>
    <ul v-if="article">
      <li v-for="(item, index) in article.items" :key="index">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'article',
  ]),
  props: {
    template: String,
  },
};
</script>
<style>
  .m-bugKiller{
    display: inline-block;
    width: 49%;
    padding: 20px;
    box-sizing: border-box;
    border-left: 1px solid #eee;
  }
</style>
