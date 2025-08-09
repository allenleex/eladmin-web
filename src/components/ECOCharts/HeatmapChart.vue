<template>
  <div ref="chartEl" style="width: 100%; min-height: 250px;"></div>
</template>

<script>
import { BaseHeatmapChart } from './BaseHeatmapChart';

export default {
  name: "HeatmapChart",
  props: {
    xAxis: Array,
    yAxis: Array,
    data: Array
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    data(newVal) {
      this.chart.updateData({
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        data: newVal
      });
    }
  },
  mounted() {
    this.chart = new BaseHeatmapChart(this.$refs.chartEl, {
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      data: this.data
    });
    this.chart.init();
  },
  beforeDestroy() {
    this.chart.destroy();
  }
};
</script>