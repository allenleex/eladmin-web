/* eslint-disable */
<template>
  <div class="md-container" :style="'background-image:url(' + Background4 + '); background-size: 100% auto;'">
    <!-- <div class="md-container" style="background: black;"> -->
    <md-content>
      <el-row :gutter="24">
        <el-col :xs="7" :sm="7" :lg="7">
          <md-toolbar :md-elevation="1">
            <span class="md-title">单机效益分析</span>
          </md-toolbar>
          <div class="chart-cards">
            <md-card style="height: 242px">
              <DemoLineChart />
            </md-card>
            <md-card style="height: 242px">
              <DemoBarChart1 />
            </md-card>
          </div>
          <md-toolbar :md-elevation="1">
            <span class="md-title">项目资产成本</span>
          </md-toolbar>
          <div class="chart-cards">
            <md-card style="height: 242px">
              <DemoLineChart />
            </md-card>
            <md-card style="height: 242px">
              <DemoBarChart1 />
            </md-card>
          </div>
        </el-col>
        <el-col :xs="17" :sm="17" :lg="17">
          <el-row :gutter="24" class="my-b-10">
            <el-col :xs="17" :sm="17" :lg="17" style="height: 686px">
              <DemoBarChart1 />
            </el-col>
            <el-col :lg="7">
              <md-toolbar :md-elevation="1">
                <span class="md-title">特种设备合格</span>
              </md-toolbar>
              <div class="chart-cards">
                <md-card style="height: 350px">
                  <DemoLineChart />
                </md-card>
                <md-card style="height: 300px">
                  <DemoBarChart1 />
                </md-card>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :xs="24" :sm="24" :lg="24">
              <md-toolbar :md-elevation="1">
                <span class="md-title">周转材料周转率</span>
              </md-toolbar>
              <div class="chart-cards">
                <md-card style="padding: 10px 20px;">
                  <el-row :gutter="24">
                    <el-col :xs="8" :sm="8" :lg="8" style="height: 288px">
                      <DemoLineChart />
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" style="height: 288px">
                      <DemoLineChart />
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" style="height: 288px">
                      <DemoLineChart />
                    </el-col>
                  </el-row>
                </md-card>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </md-content>
  </div>
</template>

<script>
import Background1 from '@/assets/images/bg01.jpg'
import Background2 from '@/assets/images/bg02.jpg'
import Background3 from '@/assets/images/bg03.jpg'
import Background4 from '@/assets/images/bg04.jpg'
import DemoLineChart from './DemoLineChart.vue'
import DemoBarChart1 from './DemoBarChart1.vue'
// import SimpleBar from 'simplebar-vue';
// import 'simplebar/dist/simplebar.min.css';

export default {
  name: 'Demo',
  components: {
    DemoLineChart, DemoBarChart1
  },
  data: () => ({
    Background1: Background1,
    Background2: Background2,
    Background3: Background3,
    Background4: Background4
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
#app,
.md-content.md-theme-default,
.el-row,
.el-col {
  background: transparent !important;
}

.md-content {
  margin-bottom: 0px !important;
}

.md-toolbar {
  background: #244187 !important;
  height: 24px !important;
  padding: 0 1px !important;
  flex-flow: row wrap;
  position: relative;
  z-index: 2;
  border-radius: 5px 5px 0% 0%;
  border-top: 2px solid rgba(29, 74, 188, 0.90);
  border-left: 2px solid rgba(29, 74, 188, 0.90);
  border-right: 2px solid rgba(29, 74, 188, 0.90);
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

.chart-cards {
  background: rgba(21, 48, 80, 0.9);
  border-radius: 0 0 5px 5px;
  border-bottom: 2px solid rgba(29, 74, 188, 0.90);
  border-left: 2px solid rgba(29, 74, 188, 0.90);
  border-right: 2px solid rgba(29, 74, 188, 0.90);
  margin-bottom: 10px;
}

.md-card {
  background: transparent;
  box-shadow: none;
}

.my-b-10 {
  margin-bottom: 10px !important;
}
</style>
