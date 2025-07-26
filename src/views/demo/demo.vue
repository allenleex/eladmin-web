/* eslint-disable */
<template>
  <!-- <div class="md-container" :style="'background-image:url(' + Background + ');'"> -->
  <div class="md-container" style="background: black;">
    <md-content>
      <el-row :gutter="24">
        <el-col :xs="8" :sm="7" :lg="7">
          <md-toolbar :md-elevation="1">
            <span class="md-title">单机效益分析</span>
          </md-toolbar>
          <md-card style="height: 250px">
            <DemoLineChart />
          </md-card>
          <md-card style="height: 250px">
            <DemoBarChart1 />
          </md-card>
          <md-toolbar :md-elevation="1">
            <span class="md-title">项目资产成本</span>
          </md-toolbar>
          <md-card style="height: 250px">
            <DemoLineChart />
          </md-card>
          <md-card style="height: 250px">
            <DemoBarChart1 />
          </md-card>
        </el-col>
        <el-col :lg="17">
          <el-row :gutter="24">
            <el-col :lg="17">
              111
            </el-col>
            <el-col :lg="7">
              <md-toolbar :md-elevation="1">
                <span class="md-title">单机效益分析</span>
              </md-toolbar>
              <md-card style="height: 250px">
                <DemoLineChart />
              </md-card>
              <md-card style="height: 250px">
                <DemoBarChart1 />
              </md-card>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :lg="24">
              <md-toolbar :md-elevation="1">
                <span class="md-title">单机效益分析</span>
              </md-toolbar>
              <md-card>
                <el-row :gutter="24">
                  <el-col :lg="8" style="height: 250px">
                    <DemoLineChart />
                  </el-col>
                  <el-col :lg="8" style="height: 250px">
                    <DemoLineChart />
                  </el-col>
                  <el-col :lg="8" style="height: 250px">
                    <DemoLineChart />
                  </el-col>
                </el-row>
              </md-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </md-content>
  </div>
</template>

<script>
import Background from '@/assets/img/daping.png'
import DemoLineChart from './DemoLineChart.vue'
import DemoBarChart1 from './DemoBarChart1.vue'

export default {
  name: 'Demo',
  components: {
    DemoLineChart, DemoBarChart1
  },
  data: () => ({
    Background: Background
  }),
  updated() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event('resize'))
    })
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
.el-row, .el-col {
  background: #000000 !important;
}
.md-toolbar {
  background: #244187 !important;
  height: 24px !important;
  padding: 0 2px !important;
  flex-flow: row wrap;
  position: relative;
  z-index: 2;
}
.md-toolbar,
.md-toolbar-row {
  width: 100%;
  min-height: 24px;
  display: flex;
  align-items: center;
  align-content: center;
  transition: .3s cubic-bezier(.4, 0, .2, 1);
  transition-property: opacity, background-color, box-shadow, transform, color, min-height;
  will-change: opacity, background-color, box-shadow, transform, color, min-height;
}
.md-toolbar .md-title {
  font-size: 12px !important;
  color: #ffffff !important;
}
.md-card {
  background: rgba(22, 52, 82, 0.9);
}
</style>
