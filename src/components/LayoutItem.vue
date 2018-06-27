<template>
  <div class="m-layoutItem" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 'Hello msg',
    };
  },
  props: {
    flexGrow: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    styles() {
      return {
        'flex-grow': this.flexGrow,
      };
    },
  },
};
</script>
<style lang="less">
.m-layoutItem{
}
</style>
