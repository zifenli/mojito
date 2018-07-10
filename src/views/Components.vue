<template>
  <div>
    <Menu class="mj-menu" :theme="theme3" active-name="1">
      <Menu-item name="bug-killer">
        <router-link to="/dashboard">
          <Icon type="paper-airplane"></Icon>
          &nbsp;&nbsp;dashboard
        </router-link>
      </Menu-item>
      <Submenu name="components">
        <template slot="title">
          <Icon type="leaf"></Icon>
          组件库
        </template>
        <Menu-item name="bug-killer">
          <router-link to="/components/bug-killer">
            <Icon type="chatbubble-working"></Icon>
            &nbsp;&nbsp;Tower消息
          </router-link>
        </Menu-item>
        <Menu-item name="reporter">
          <router-link to="/components/reporter">
            <Icon type="ios-grid-view"></Icon>
            &nbsp;&nbsp;数据报表
          </router-link>
        </Menu-item>
      </Submenu>
    </Menu>
    <div class="mi-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { Menu, MenuGroup, MenuItem, Icon, Submenu } from 'iview';
import ChartDisplay from '@/components/ChartDisplay.vue';

export default {
  data() {
    return {
      theme3: 'dark',
    };
  },
  components: {
    Menu, MenuGroup, MenuItem, Icon, Submenu, ChartDisplay,
  },
};
</script>
<style lang="less">
  .mj-menu{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    background-color: #495060;
    a{
      color: white;
    }
  }
  .mi-content{
    margin-left: 240px;
  }
</style>
