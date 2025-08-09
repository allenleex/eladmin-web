import * as echarts from "echarts";

export class BaseHeatmapChart {
  constructor(domRef, data) {
    this.chartInstance = null;
    this.domRef = domRef;
    this.data = data; // 结构: { xAxis: [], yAxis: [], data: [[x,y,value]] }
    this.defaultOptions = {
      grid: { top: 50, right: 30, bottom: 80, left: 80 },
      xAxis: {
        type: "category",
        splitArea: {
          show: true
        }
      },
      yAxis: {
        type: "category",
        splitArea: {
          show: true
        }
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: 20
      },
      tooltip: { position: "top" }
    };
  }

  init() {
    if (!this.domRef) return;
    this.chartInstance = echarts.init(this.domRef);
    this.updateChart();
    window.addEventListener("resize", this.handleResize);
  }

  generateBaseOptions() {
    return {
      xAxis: { type: "category", data: this.data.xAxis },
      yAxis: { type: "category", data: this.data.yAxis },
      series: [
        {
          type: "heatmap",
          data: this.data.data,
          emphasis: { itemStyle: { shadowBlur: 10 } },
          ...this.customizeHeatmapStyle() // 样式扩展点
        }
      ]
    };
  }

  // 子类可重写热力图样式
  customizeHeatmapStyle() {
    return {}; // 默认空实现
  }

  updateData(newData) {
    this.data = newData;
    this.updateChart();
  }

  handleResize = () => {
    this.chartInstance.resize();
  };

  destroy() {
    window.removeEventListener("resize", this.handleResize);
    this.chartInstance.dispose();
  }

  updateChart() {
    if (!this.chartInstance) return;
    const finalOptions = {
      ...this.defaultOptions,
      ...this.generateBaseOptions()
    };
    this.chartInstance.setOption(finalOptions, true);
  }
}
