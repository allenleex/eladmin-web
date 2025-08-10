<template>
  <div class="md-container">
    <div class="md-content">
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-datepicker v-model="formData.date" md-immediately :md-open-on-focus="true" required>
            <label>日期</label>
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
    </div>
    <div class="md-content" v-if="tableData.length > 0" style="margin: 0px 10px;">
      <md-table v-model="tableData" md-sort="_id" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <p class="md-title">{{ this.responseText }}</p>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <!-- <md-table-cell md-label="_ID" md-sort-by="_id">{{ item._id }}</md-table-cell> -->
          <md-table-cell md-label="bid" md-sort-by="bid">{{ item.bid }}</md-table-cell>
          <md-table-cell md-label="date" md-sort-by="date">{{ item.date }}</md-table-cell>
          <md-table-cell md-label="hour" md-sort-by="hour">{{ item.hour }}</md-table-cell>
          <md-table-cell md-label="mid" md-sort-by="mid">{{ item.mid }}</md-table-cell>
          <md-table-cell md-label="ia" md-sort-by="ia">{{ item.ia }}</md-table-cell>
          <md-table-cell md-label="ib" md-sort-by="ib">{{ item.ib }}</md-table-cell>
          <md-table-cell md-label="ic" md-sort-by="ic">{{ item.ic }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import { ammeter_daily } from '@/api/eco/demo'
import LineChart from "@/components/ECOCharts/LineChart"

export default {
  name: 'EcoAmmeterDaily',
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
        date: '2025-07-01', // 默认日期
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
          date: this.formData.date.replace(/-/g, '')
        };
        console.log('params:', params)

        // 调用api ammeter_daily
        const response = await ammeter_daily(params)
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
          this.xAxis = processedRecords.map(item => item.hour)

          // 赋值到图表
          // 折线图
          this.seriesLine = [] // 一定要清空数组
          const fieldsLine = ['ia', 'ib', 'ic'];
          fieldsLine.forEach(field => {
            this.seriesLine.push({
              name: field,
              data: processedRecords.map(item => item[field])
            });
            console.log(`${field}: `, processedRecords.map(item => item[field]))
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
