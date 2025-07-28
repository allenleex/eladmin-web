<template>
  <div class="md-container">
    <h1>无人机高空巡检</h1>
    <md-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <h2>无人机猎鹰号</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <img :src="wurenji">
            </div>
            <div class="md-layout-item">
              <p>
                <span class="desc-title">无人机：</span>
                <span class="desc-value">猎鹰号无人机</span>
              </p>
              <p>
                <span class="desc-title">搭载设备：</span>
                <span class="desc-value">高清摄像头</span>
              </p>
            </div>
            <div class="md-layout-item">
              <p>
                <span class="desc-title">无人机型号：</span>
                <span class="desc-value">Falcon-X3000</span>
              </p>
              <p>
                <span class="desc-title">设备型号：</span>
                <span class="desc-value">HD-Vision 4K</span>
              </p>
            </div>
            <div class="md-layout-item">
              <p>
                <span class="desc-title">无人机引入时间：</span>
                <span class="desc-value">2024年5月</span>
              </p>
              <p>
                <span class="desc-title">最后巡检时间：</span>
                <span class="desc-value">2025年7月15日</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </md-content>
    <md-content>
      <h2>无人机巡检任务列表</h2>
      <md-table>
        <md-table-row>
          <md-table-head>巡检日期</md-table-head>
          <md-table-head>任务编号</md-table-head>
          <md-table-head>巡检时长</md-table-head>
          <md-table-head>飞行距离</md-table-head>
          <md-table-head>标签监测数量</md-table-head>
          <md-table-head>操作</md-table-head>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>20230513-01</md-table-cell>
          <md-table-cell>3分钟</md-table-cell>
          <md-table-cell>1.3公里</md-table-cell>
          <md-table-cell>48</md-table-cell>
          <md-table-cell><a class="operation">标签明细</a> <a class="operation">飞行轨迹</a></md-table-cell>
        </md-table-row>
        <!-- <md-table-pagination
          :md-page-size="10"
          :md-page-options="[1, 2, 3, 4, 5, 6]" /> -->
      </md-table>
    </md-content>
  </div>
</template>

<script>
import wurenji from '@/assets/img/wurenji.png'
export default {
  name: 'DemoWRJGKXJ',
  data: () => ({
    wurenji: wurenji,
    users: null,
    paginatedUsers: null
  }),
  methods: {
    updatePagination(page, pageSize, sort, sortOrder) {
      console.log('pagination has updated', page, pageSize, sort, sortOrder)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/zjsj.scss";
</style>
