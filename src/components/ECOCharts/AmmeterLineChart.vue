<template>
  <line-chart ref="chartEL" type="area" :xAxis="xAxis" :series="series" />
</template>

<script>
import { ammeter_daily } from '@/api/eco/demo'
import LineChart from "@/components/ECOCharts/LineChart"

export default {
  name: "AmmeterLineChart",
  props: {
    date: {
      type: String,
      default: '20250701'
    },
    bid: {
      type: String,
      default: '201'
    }
  },
  components: {
    LineChart
  },
  data() {
    return {
      xAxis: [],
      series: []
    }
  },
  mounted() {
    this.fetchData(1); ///////////
  },
  methods: {
    async fetchData(mid) {
      try {
        const response = await ammeter_daily({
          date: this.date,
          bid: this.bid,
          mid: mid
        });
        console.log(`response: `, response);

        if (response && response.records && response.records.length > 0) {
          this.xAxis = response.data.map(item => item.hour);
          const fields = ['ia', 'ib', 'ic'];
          fields.forEach(field => {
            this.seriesLine.push({
              name: field,
              data: response.records.map(item => item[field])
            });
            console.log(`${field}: `, response.records.map(item => item[field]))
          });
        } else {
          this.xAxis = [];
          this.series = [];
        }
      } catch (error) {
        console.error("Error fetching ammeter data:", error);
      }
    }
  },
};
</script>