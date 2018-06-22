<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Reporter',
  props: {
    msg: String,
  },
};
</script>
