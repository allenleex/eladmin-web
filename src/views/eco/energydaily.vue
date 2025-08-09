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
        <div class="md-layout-item md-size-100">
          <line-chart height="250px" :chartData="{
            xAxisData: xAxisData,
            legend: legend,
            a: lineChartData.eppa,
            b: lineChartData.eppb,
            c: lineChartData.eppc
          }" />
        </div>
      </div>
    </div>
    <div class="md-content" v-if="tableData.length > 0" style="margin: 0px 10px;">
      <md-table v-model="tableData" md-sort="_id" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <p class="md-title">{{ this.responseText }}</p>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="_ID" md-sort-by="_id">{{ item._id }}</md-table-cell>
          <md-table-cell md-label="bid" md-sort-by="bid">{{ item.bid }}</md-table-cell>
          <md-table-cell md-label="date" md-sort-by="time">{{ item.date }}</md-table-cell>
          <md-table-cell md-label="mid" md-sort-by="mid">{{ item.mid }}</md-table-cell>
          <md-table-cell md-label="eppa" md-sort-by="eppa">{{ item.eppa }}</md-table-cell>
          <md-table-cell md-label="eppb" md-sort-by="eppb">{{ item.eppb }}</md-table-cell>
          <md-table-cell md-label="eppc" md-sort-by="eppc">{{ item.eppc }}</md-table-cell>
          <md-table-cell md-label="epps" md-sort-by="epps">{{ item.eppc }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import { energy_daily } from '@/api/eco/demo'
import LineChart from '@/components/Echarts/LineChart'
// import RadarChart from '@/components/Echarts/RadarChart'
// import PieChart from '@/components/Echarts/PieChart'
// import BarChart from '@/components/Echarts/BarChart'
// import HeatMap from '@/components/Echarts/HeatMap'
// import Scatter from '@/components/Echarts/Scatter'

export default {
  name: 'EcoEnergyDaily',
  components: {
    LineChart
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
      lineChartData: {},
      xAxisData: {},
      legend: ['eppa', 'eppb', 'eppc']
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
            this.xAxisData = sss
            console.log("xAxisData: ", this.xAxisData)
          }

          // 赋值到图表
          const fields = ['eppa', 'eppb', 'eppc', 'epps'];
          fields.forEach(field => {
            this.lineChartData[field] = response.records.map(item => item[field]);
            console.log(`${field}: `, this.lineChartData[field])
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
