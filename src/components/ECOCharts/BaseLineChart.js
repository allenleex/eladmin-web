// BaseLineChart.js
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export class BaseLineChart {
  constructor(domRef, data) {
    this.chartInstance = null;
    this.domRef = domRef;
    this.data = data; // 结构: { xAxis: ['周一','周二'], series: [{name:'数据1', data:[10,20]}] }
    this.defaultOptions = {
      grid: {
        top: "15%",
        left: "3%",
        right: "4%",
        bottom: "10%",
        containLabel: true
      },
      yAxis: {
        min: "dataMin",
        max: "dataMax"
      },
      tooltip: { trigger: "axis" },
      legend: { type: "scroll" }
    };
  }

  // 初始化图表
  init() {
    if (!this.domRef) return;
    this.chartInstance = echarts.init(this.domRef);
    this.updateChart();
    window.addEventListener("resize", this.handleResize);
    // 实时数据更新
    // setInterval(() => {
    //   this.chartInstance.updateData(fetchNewData());
    // }, 5000);
  }

  // 生成核心配置
  generateBaseOptions() {
    return {
      xAxis: { type: "category", data: this.data.xAxis },
      yAxis: { type: "value" },
      series: this.data.series.map(series => ({
        name: series.name,
        type: "line",
        data: series.data,
        smooth: true,
        ...this.customizeSeriesStyle(series) // 子类样式扩展点
      }))
    };
  }

  // 子类可重写的样式扩展方法
  customizeSeriesStyle(series) {
    return {}; // 默认空实现
  }

  // 更新数据
  updateData(newData) {
    this.data = newData;
    this.updateChart();
  }

  // 响应式调整
  handleResize = () => {
    this.chartInstance && this.chartInstance.resize();
  };

  // 销毁实例
  destroy() {
    window.removeEventListener("resize", this.handleResize);
    this.chartInstance && this.chartInstance.dispose();
  }

  // 核心更新方法
  updateChart() {
    if (!this.chartInstance) return;
    const finalOptions = {
      ...this.defaultOptions,
      ...this.generateBaseOptions(),
      legend: {
        data: this.data.series.map(s => s.name),
        ...this.defaultOptions.legend
      }
    };
    this.chartInstance.setOption(finalOptions, true);
  }
}

// 面积图扩展
export class AreaChart extends BaseLineChart {
  constructor(domRef, data) {
    super(domRef, data);
  }

  customizeSeriesStyle(series) {
    return {
      areaStyle: { color: "rgba(75, 192, 192, 0.2)" },
      lineStyle: { width: 3 }
    };
  }
}

// 虚线样式扩展
export class DashedLineChart extends BaseLineChart {
  constructor(domRef, data) {
    super(domRef, data);
  }

  customizeSeriesStyle(series) {
    return {
      lineStyle: { type: "dashed", width: 2 },
      symbol: "emptyCircle"
    };
  }
}
