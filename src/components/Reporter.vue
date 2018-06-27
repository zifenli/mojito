<template>
  <div class="m-reporter">
    <Card>
      <p slot="title">
        TABLE
      </p>
      <Table :columns="tableData.cols" :data="tableData.data"></Table>
    </Card>

    <!--<ul v-if="table">-->
      <!--<li v-for="(item, index) in table.items" :key="index">-->
        <!--<p>{{item}}</p>-->
      <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
import _ from 'lodash';
import { Table, Card } from 'iview';
import { mapState } from 'vuex';

export default {
  name: 'Reporter',
  props: {
    template: String,
  },
  computed: {
    /*
    * [['名称', '地址', '电话'],['陈驰远', '北京', '18614043303']]
    * {
    *   cols:[{ title: '名称', key: 'name'},{ title: '地址', key: 'address'},
    *   { title: '电话', key: 'phone'}],
    *   data: [{ name: '陈驰远', address: '北京', phone: '18614043303'}]
    * }
    * */
    tableData() {
      const data = {
        cols: [],
        data: [],
      };

      if (this.table) {
        _.forEach(this.table.items, (item, index1) => {
          const keys = ['name', 'address', 'phone'];

          if (index1 === 0) {
            data.cols = _.map(item, (value, index2) => ({
              title: value,
              key: keys[index2],
            }));
          } else {
            // item = ['陈驰远', '北京', '18614043303'];
            // result = { name: '', address: '', phone: '' };
            const cols = {};
            _.forEach(item, (value, index2) => {
              cols[keys[index2]] = value;
            });
            data.data.push(cols);
          }
        });
      }

      return data;
    },
    ...mapState([
      'table',
    ]),
  },
  components: {
    Table,
    Card,
  },
};
</script>
<style>
  .m-reporter{
  }
</style>
