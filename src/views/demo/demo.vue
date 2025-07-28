/* eslint-disable */
<template>
  <div class="md-container" :style="'background-image:url(' + Background5 + '); background-size: 100% auto;'">
    <!-- <div class="md-container" style="background: black;"> -->
    <md-content>
      <el-row :gutter="24" style="margin: 0 -20px;">
        <el-col :xs="6" :sm="6" :lg="6">
          <md-toolbar :md-elevation="1">
            <span class="md-title">单机效益分析</span>
          </md-toolbar>
          <div class="chart-cards">
            <md-card style="height: 227px">
              <DemoLineChart1 />
            </md-card>
            <md-card style="height: 227px">
              <DemoBarChart1 />
            </md-card>
          </div>
          <md-toolbar :md-elevation="1">
            <span class="md-title">项目资产成本</span>
          </md-toolbar>
          <div class="chart-cards">
            <md-card style="height: 227px">
              <DemoPieChart1 />
            </md-card>
            <md-card style="height: 227px">
              <DemoBarChart2 />
            </md-card>
          </div>
        </el-col>
        <el-col :xs="18" :sm="18" :lg="18">
          <el-row :gutter="24" class="">
            <el-col :xs="16" :sm="16" :lg="16" style="height: 644px">
              <DemoGDMap />
            </el-col>
            <el-col :xs="8" :sm="8" :lg="8">
              <md-toolbar :md-elevation="1">
                <span class="md-title">特种设备合格</span>
              </md-toolbar>
              <div class="chart-cards">
                <md-card style="height: 340px">
                  <DemoBarChart3 />
                </md-card>
                <md-card style="height: 280px">
                  <DemoPieChart2 />
                </md-card>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24" style="margin-left: -25px;">
            <el-col :xs="24" :sm="24" :lg="24">
              <md-toolbar :md-elevation="1">
                <span class="md-title">周转材料周转率</span>
              </md-toolbar>
              <div class="chart-cards">
                <md-card style="padding: 10px 20px;">
                  <el-row :gutter="24">
                    <el-col :xs="8" :sm="8" :lg="8" style="height: 268px">
                      <DemoLineChart2 />
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" style="height: 268px">
                      <DemoPieChart3 />
                    </el-col>
                    <el-col :xs="8" :sm="8" :lg="8" style="height: 268px">
                      <DemoBarChart4 />
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
import Background5 from '@/assets/images/bg05.jpg'
import DemoGDMap from './components/DemoGDMap.vue' // 广东地图
import DemoLineChart1 from './components/DemoLineChart1.vue' // 设备故障时长
import DemoLineChart2 from './components/DemoLineChart2.vue' // 平均使用次数
import DemoBarChart1 from './components/DemoBarChart1.vue' // 设备创收
import DemoBarChart2 from './components/DemoBarChart2.vue' // 设备分摊设备租金
import DemoBarChart3 from './components/DemoBarChart3.vue' // 证书状态
import DemoBarChart4 from './components/DemoBarChart4.vue' // 丢失成本
import DemoPieChart1 from './components/DemoPieChart1.vue' // 项目资产折旧
import DemoPieChart2 from './components/DemoPieChart2.vue' // 历史缺陷
import DemoPieChart3 from './components/DemoPieChart3.vue' // 报废率

export default {
  name: 'Demo',
  components: {
    DemoGDMap, DemoLineChart1, DemoLineChart2, DemoBarChart1, DemoBarChart2, DemoBarChart3, DemoBarChart4, DemoPieChart1, DemoPieChart2, DemoPieChart3
  },
  data: () => ({
    Background1: Background1,
    Background2: Background2,
    Background3: Background3,
    Background4: Background4,
    Background5: Background5
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
  /* margin-top: 32px !important; */
  margin-bottom: 0px !important;
}

.md-toolbar {
  background: linear-gradient(to right, #173357, #4371e2) !important;
  opacity: 0.8 !important;
  height: 24px !important;
  padding: 0 1px !important;
  flex-flow: row wrap;
  position: relative;
  z-index: 2;
  border-radius: 5px 5px 0% 0%;
  border-top: 1px solid rgba(67, 113, 226, 0.90);
  border-left: 1px solid rgba(67, 113, 226, 0.90);
  border-right: 1px solid rgba(67, 113, 226, 0.90);
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
  background: rgba(21, 48, 80, 0.8);
  border-radius: 0 0 5px 5px;
  border-bottom: 1px solid rgba(67, 113, 226, 0.90);
  border-left: 1px solid rgba(67, 113, 226, 0.90);
  border-right: 1px solid rgba(67, 113, 226, 0.90);
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
