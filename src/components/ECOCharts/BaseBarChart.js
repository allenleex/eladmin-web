// BaseBarChart.js
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export class BaseBarChart {
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
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" } // 柱状图专用提示样式
      },
      legend: { type: "scroll" },
      xAxis: { type: "category" },
      yAxis: { type: "value" }
    };
  }

  // 初始化图表
  init() {
    if (!this.domRef) return;
    this.chartInstance = echarts.init(this.domRef);
    this.updateChart();
    window.addEventListener("resize", this.handleResize);
  }

  // 生成核心配置
  generateBaseOptions() {
    return {
      xAxis: { data: this.data.xAxis },
      series: this.data.series.map(series => ({
        name: series.name,
        type: "bar",
        data: series.data,
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

// 水平柱状图扩展
export class HorizontalBarChart extends BaseBarChart {
  constructor(domRef, data) {
    super(domRef, data);
  }

  generateBaseOptions() {
    const baseOptions = super.generateBaseOptions();
    return {
      ...baseOptions,
      xAxis: { type: "value" },
      yAxis: { type: "category", data: this.data.xAxis }
    };
  }
}

// 堆叠柱状图扩展
export class StackedBarChart extends BaseBarChart {
  constructor(domRef, data) {
    super(domRef, data);
  }

  customizeSeriesStyle(series) {
    return {
      stack: "total", // 堆叠标识
      emphasis: { focus: "series" } // 高亮时聚焦当前系列
    };
  }
}
