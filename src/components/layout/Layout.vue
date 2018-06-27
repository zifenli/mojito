<template>
  <div class="m-layout">
    <Row class-name="row" :gutter="16">
      <i-col class-name="col" span="12"><slot name="slot1"></slot></i-col>
      <i-col class-name="col" span="12"><slot name="slot2"></slot></i-col>
    </Row>
    <Row class-name="row">
      <i-col class-name="col" span="24"><slot name="slot3"></slot></i-col>
    </Row>
  </div>
</template>

<script>
import { Row, Col } from 'iview';

export default {
  data() {
    return {
      templates: [],
    };
  },
  mounted() {
  },
  components: {
    Row,
    ICol: Col,
  },
};
</script>

<style lang="less">
  .m-layout{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .row{
      height: 50%;
      .col{
        height: 100%;
        background-color: #eee;
      }
    }
  }
</style>
