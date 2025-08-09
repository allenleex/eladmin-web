<template>
  <div class="md-container">
    <div class="md-content">
      <h1>ECOCharts</h1>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <line-chart ref="chart1" style="width: 100%; height: 400px;" :xAxis="xAxis1" :series="series1" />
        </div>
        <div class="md-layout-item">
          <line-chart ref="chart2" type="dashed" style="width: 100%; height: 400px;" :xAxis="xAxis1" :series="series1" />
        </div>
        <div class="md-layout-item">
          <line-chart ref="chart3" type="area" style="width: 100%; height: 400px;" :xAxis="xAxis1" :series="series1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/ECOCharts/LineChart"

export default {
  name: "ECOCharts",
  components: {
    LineChart
  },
  data() {
    return {
      xAxis1: ['Mon', 'Tue', 'Wed', 'Thu'],
      series1: [
        { name: '流量', data: [120, 200, 150, 80] },
        { name: '销量', data: [85, 92, 45, 120] }
      ]
    }
  },
  methods: {}
}
</script>