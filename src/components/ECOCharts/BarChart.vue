<template>
  <div ref="chartEL" style="width: 100%; min-height: 250px;"></div>
</template>

<script>
import { BaseBarChart, HorizontalBarChart, StackedBarChart } from './BaseBarChart';

export default {
  name: "BarChart",
  props: {
    type: '', // ''=default, horizontal, stacked
    xAxis: Array,
    series: Array
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    series(newVal) {
      if (this.chart) {
        this.chart.updateData({
          xAxis: this.xAxis,
          series: newVal
        });
      }
    },
    xAxis(newVal) {
      if (this.chart) {
        this.chart.updateData({
          xAxis: newVal,
          series: this.series
        });
      }
    }
  },
  mounted() {
    if (this.type === 'horizontal') {
      this.chart = new HorizontalBarChart(this.$refs.chartEL, {
        xAxis: this.xAxis,
        series: this.series
      });
    } else if (this.type === 'stacked') {
      this.chart = new StackedBarChart(this.$refs.chartEL, {
        xAxis: this.xAxis,
        series: this.series
      });
    } else {
      this.chart = new BaseBarChart(this.$refs.chartEL, {
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