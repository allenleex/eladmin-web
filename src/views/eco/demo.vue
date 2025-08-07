<template>
  <div class="md-container">
    <div class="md-content">
      <md-button class="md-raised md-primary" @click="handleClick">调用远程api</md-button>
      <!-- <md-progress-bar id="nprogress" v-if="loading" md-mode="indeterminate" class="md-accent" style="width:80%"></md-progress-bar> -->
      <!-- <md-progress-spinner v-if="loading" :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner> -->
      <div v-if="tableData.length > 0" class="md-content" style="margin: 10px 10px;">
        <md-table v-model="tableData" md-sort="_id" md-sort-order="asc" md-card md-fixed-header>
          <md-table-toolbar>
            <p class="md-title">{{ this.responseText }}</p>
          </md-table-toolbar>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="_ID" md-sort-by="_id">{{ item._id }}</md-table-cell>
            <md-table-cell md-label="bid" md-sort-by="bid">{{ item.bid }}</md-table-cell>
            <md-table-cell md-label="time" md-sort-by="time">{{ item.time }}</md-table-cell>
            <md-table-cell md-label="mid" md-sort-by="mid">{{ item.mid }}</md-table-cell>
            <md-table-cell md-label="ua" md-sort-by="ua">{{ item.ua }}</md-table-cell>
            <md-table-cell md-label="ub" md-sort-by="ub">{{ item.ub }}</md-table-cell>
            <md-table-cell md-label="uc" md-sort-by="uc">{{ item.uc }}</md-table-cell>
            <md-table-cell md-label="ia" md-sort-by="ia">{{ item.ia }}</md-table-cell>
            <md-table-cell md-label="ib" md-sort-by="ib">{{ item.ib }}</md-table-cell>
            <md-table-cell md-label="ic" md-sort-by="ic">{{ item.ic }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>
import { test } from '@/api/eco/demo'

export default {
  name: 'EcoDemo',
  components: {},
  data() {
    return {
      loading: false,
      tableData: [],         // 表格数据
      tableHeaders: [],      // 表头（动态生成）
      showError: false,      // 错误提示显示状态
      errorMessage: '',      // 错误信息
      responseText: '',       // 保留原有文本显示
      users: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        },
        {
          id: 2,
          name: "Odette Demageard",
          email: "odemageard1@spotify.com",
          gender: "Female",
          title: "Account Coordinator"
        }
      ]
    }
  },
  methods: {
    async handleClick() {
      console.log('==> handleClick')
      this.loading = true
      this.tableData = []

      try {
        const response = await test()
        console.log('API响应:', response)

        if (response && response.records && response.records.length > 0) {
          // 处理数据
          const processedRecords = response.records

          // 设置表格数据
          this.tableData = processedRecords

          // 动态生成表头
          if (processedRecords.length > 0) {
            this.tableHeaders = Object.keys(processedRecords[0])
          }

          // 保留文本显示
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
