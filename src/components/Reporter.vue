<template>
  <div class="m-reporter">

    <h3>Reporter:{{template}}</h3>
    <ul v-if="table">
      <li v-for="(item, index) in table.items" :key="index">
        <p>{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Reporter',
  props: {
    template: String,
  },
  computed: mapState([
    'table',
  ]),
};
</script>
<style>
  .m-reporter{
    display: inline-block;
    width: 49%;
  }
</style>
