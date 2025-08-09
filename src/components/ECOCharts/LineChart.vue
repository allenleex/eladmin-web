<template>
  <div ref="chartEL" style="width: 100%; min-height: 250px;"></div>
</template>

<script>
import { BaseLineChart, DashedLineChart, AreaChart } from './BaseLineChart';

export default {
  name: "LineChart",
  props: {
    type: '', // ''=default, dashed, area
    xAxis: [],
    series: []
  },
  data() {
    return {

    }
  },
  mounted() {
    if (this.type == 'dashed') {
      this.chart = new DashedLineChart(this.$refs.chartEL, {
        xAxis: this.xAxis,
        series: this.series
      });
    } else if (this.type == 'area') {
      this.chart = new AreaChart(this.$refs.chartEL, {
        xAxis: this.xAxis,
        series: this.series
      });
    } else {
      this.chart = new BaseLineChart(this.$refs.chartEL, {
        xAxis: this.xAxis,
        series: this.series
      });
    }

    this.chart.init();
  },
  beforeDestroy() {
    this.chart.destroy();
  }
};
</script>