<template>
  <div class="md-container">
    <div class="md-content">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-datepicker v-model="formData.start_date" md-immediately :md-open-on-focus="true" required>
            <label>开始日期</label>
          </md-datepicker>
        </div>
        <div class="md-layout-item">
          <md-datepicker v-model="formData.end_date" md-immediately :md-open-on-focus="true" required>
            <label>结束日期</label>
          </md-datepicker>
        </div>
        <div class="md-layout-item">
          <md-field>
            <label>bid</label>
            <md-input v-model="formData.bid" required></md-input>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <label>mid</label>
            <md-input v-model="formData.mid" required></md-input>
          </md-field>
        </div>
      </div>
      <md-button class="md-raised md-primary" @click="handleClick">开始查询</md-button>
    </div>
    <div class="md-content" v-if="tableData.length > 0" style="margin: 0px 10px;">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-50">
          <line-chart ref="chart1" type="" :xAxis="xAxis" :series="seriesLine" />
        </div>
        <div class="md-layout-item md-size-50">
          <line-chart ref="chart2" type="area" :xAxis="xAxis" :series="seriesLine" />
        </div>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-50">
          <bar-chart ref="chart3" type="" :xAxis="xAxis" :series="seriesBar" />
        </div>
        <div class="md-layout-item md-size-50">
          <bar-chart ref="chart4" type="stacked" :xAxis="xAxis" :series="seriesBar" />
        </div>
      </div>
      <!-- <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-100">
          <heatmap-chart ref="chart5" :yAxis="[
            'Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'
          ]" :xAxis="[
            '12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'
          ]" :data="seriesHeatmap" style="width: 100%; height: 400px;" />
        </div>
      </div> -->
    </div>
    <div class="md-content" v-if="tableData.length > 0" style="margin: 0px 10px;">
      <md-table v-model="tableData" md-sort="_id" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <p class="md-title">{{ this.responseText }}</p>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <!-- <md-table-cell md-label="_ID" md-sort-by="_id">{{ item._id }}</md-table-cell> -->
          <md-table-cell md-label="bid" md-sort-by="bid">{{ item.bid }}</md-table-cell>
          <md-table-cell md-label="date" md-sort-by="time">{{ item.date }}</md-table-cell>
          <md-table-cell md-label="mid" md-sort-by="mid">{{ item.mid }}</md-table-cell>
          <md-table-cell md-label="eppa" md-sort-by="eppa">{{ item.eppa }}</md-table-cell>
          <md-table-cell md-label="eppb" md-sort-by="eppb">{{ item.eppb }}</md-table-cell>
          <md-table-cell md-label="eppc" md-sort-by="eppc">{{ item.eppc }}</md-table-cell>
          <md-table-cell md-label="epps" md-sort-by="epps">{{ item.epps }}</md-table-cell>
          <md-table-cell md-label="a" md-sort-by="a">{{ item.a }}</md-table-cell>
          <md-table-cell md-label="b" md-sort-by="b">{{ item.b }}</md-table-cell>
          <md-table-cell md-label="c" md-sort-by="c">{{ item.c }}</md-table-cell>
          <md-table-cell md-label="s" md-sort-by="s">{{ item.s }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import { energy_daily } from '@/api/eco/demo'
import LineChart from "@/components/ECOCharts/LineChart"
import BarChart from "@/components/ECOCharts/BarChart"
import HeatmapChart from "@/components/ECOCharts/HeatmapChart"

export default {
  name: 'EcoEnergyDaily',
  components: {
    LineChart, BarChart, HeatmapChart
  },
  data() {
    return {
      loading: false,
      tableData: [],         // 表格数据
      tableHeaders: [],      // 表头（动态生成）
      showError: false,      // 错误提示显示状态
      errorMessage: '',      // 错误信息
      responseText: '',       // 保留原有文本显示
      currentPage: 1,
      pageSize: 10,
      allData: [], // 存储所有查询结果
      formData: {
        start_date: '2025-07-01', // 默认日期
        end_date: '2025-07-31', // 默认日期
        bid: '221',
        mid: '1'
      },
      xAxis: {},
      yAxis: {},
      seriesLine: [],
      seriesBar: [],
      seriesHeatmap: []
    }
  },
  methods: {
    async handleClick() {
      console.log('==> handleClick')
      this.loading = true
      this.tableData = []

      try {
        const params = {
          bid: this.formData.bid,
          mid: this.formData.mid,
          start_date: this.formData.start_date.replace(/-/g, ''),
          end_date: this.formData.end_date.replace(/-/g, '')
        };
        console.log('params:', params)

        // 调用api energy_daily
        const response = await energy_daily(params)
        console.log('response:', response)

        if (response && response.records && response.records.length > 0) {
          // 处理数据
          const processedRecords = response.records

          // 设置表格数据
          this.tableData = processedRecords
          console.log('this.tableData:', this.tableData)

          // 动态生成表头
          if (processedRecords.length > 0) {
            this.tableHeaders = Object.keys(processedRecords[0])
          }

          // 更新图表数据
          const sss = processedRecords.map(item => item.date)
          if (sss) {
            for (let i = 0; i < sss.length; i++) {
              const s = sss[i];
              if (typeof s !== "string" || s.length === 0) continue;
              const suffix = s.length >= 4 ? s.substring(s.length - 4) : ""
              sss[i] = `${suffix}`
            }
            this.xAxis = sss
            console.log("xAxis: ", this.xAxis)
          }

          // 赋值到图表
          // 折线图
          this.seriesLine = [] // 一定要清空数组
          const fieldsLine = ['eppa', 'eppb', 'eppc', 'epps'];
          fieldsLine.forEach(field => {
            this.seriesLine.push({
              name: field,
              data: processedRecords.map(item => item[field])
            });
            console.log(`${field}: `, processedRecords.map(item => item[field]))
          });
          // 柱状图
          this.seriesBar = [] // 一定要清空数组
          const fieldsBar = ['a', 'b', 'c', 's'];
          fieldsBar.forEach(field => {
            this.seriesBar.push({
              name: field,
              data: processedRecords.map(item => item[field])
            });
            console.log(`${field}: `, processedRecords.map(item => item[field]))
          });
          // 热力图
          this.seriesHeatmap = [
            [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0],
            [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1],
            [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3],
            [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0],
            [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5],
            [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7],
            [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1],
            [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0],
            [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10],
            [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2],
            [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0],
            [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7],
            [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10],
            [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0],
            [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2],
            [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12],
            [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0],
            [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0],
            [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5],
            [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4],
            [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0],
            [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0],
            [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0],
            [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
          ].map(function (item) {
            return [item[1], item[0], item[2] || '-'];
          });

          // 显示查询结果
          this.responseText = `查询 [${response.database}] [${response.collection}] 成功，共加载 ${processedRecords.length} 条记录`
        } else {
          this.showError = true
          this.errorMessage = '未获取到数据'
        }

      } catch (error) {
        console.error('API请求失败:', error)
        this.showError = true
        this.errorMessage = `数据加载失败: ${error.message || '未知错误'}`
      } finally {
        this.loading = false
      }

    }

  }
}
</script>
