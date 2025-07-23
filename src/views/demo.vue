<template>
  <div class="home_box">
    <!-- 全局资产健康度 -->
    <div class="health_box">
      <div class="health_title_box">
        <div class="health_title">全局资产健康度</div>
        <div class="health_title_right">
          <span>查看详情</span>
          <el-icon>
            <component :is="'DArrowRight'" />
          </el-icon>
        </div>
      </div>
      <div class="health_content">
        <el-row :gutter="10">
          <el-col :span="6">
            <div class="cont_box">
              <div class="cont_head">资产总数 8,642</div>
              <div class="cont_type">
                <div class="cont_type_box">
                  <div class="type_item">
                    <span class="type_item_title">设备类</span>
                    <span class="type_item_num">5,210台</span>
                  </div>
                  <div class="type_item">
                    <span class="type_item_title">车辆类</span>
                    <span class="type_item_num">382辆</span>
                  </div>
                  <div class="type_item">
                    <span class="type_item_title">仓储类</span>
                    <span class="type_item_num">3,050辆</span>
                  </div>
                </div>
                <div class="cont_chart">
                  <CakeChart id="chart1" :series-data="data1" />
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="cont_box">
              <div class="cont_head">异常资产 127台(1.47%)</div>
              <div class="cont_type">
                <div class="cont_type_box">
                  <div class="type_item">
                    <span class="type_item_title">故障</span>
                    <span class="type_item_num">68台</span>
                  </div>
                  <div class="type_item">
                    <span class="type_item_title">闲置超过30天</span>
                    <span class="type_item_num">42台</span>
                  </div>
                  <div class="type_item">
                    <span class="type_item_title">位置异常</span>
                    <span class="type_item_num">17台</span>
                  </div>
                </div>
                <div class="cont_chart">
                  <CakeChart id="chart2" :series-data="data2" />
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="cont_box">
              <div class="cont_head">资源利用率 82.3%</div>
              <div class="cont_type">
                <div class="cont_type_box">
                  <div class="type_item">
                    <span class="type_item_title">生产区</span>
                    <span class="type_item_num">94%</span>
                  </div>
                  <div class="type_item">
                    <span class="type_item_title">仓库区</span>
                    <span class="type_item_num">76%</span>
                  </div>
                  <div class="type_item">
                    <span class="type_item_title">办公区</span>
                    <span class="type_item_num">69%</span>
                  </div>
                </div>
                <div class="cont_chart" style="margin-left: 10px">
                  <BarChart id="chart4" :series-data="data3" />
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="cont_box">
              <div class="cont_head">实时预警信息(每分钟滚动)</div>
              <div class="cont_list">
                <div class="cont_list_item">06-28 09:08 叉车H023超速(生产B区)</div>
                <div class="cont_list_item">06-28 09:06 大型机械设备X81温度异常(3楼东)</div>
                <div class="cont_list_item">06-28 08:55 围栏告警:AGV驶入禁入区</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 电子标签核心效能-移动流程中枢-无人机巡检成果 -->
    <el-row :gutter="10" style="margin-bottom: 20px">
      <el-col :span="8">
        <div class="health_box">
          <div class="health_title_box">
            <div class="health_title">电子标签核心效能</div>
            <div class="health_title_right">
              <span>查看详情</span>
              <el-icon>
                <component :is="'DArrowRight'" />
              </el-icon>
            </div>
          </div>
          <div class="health_content">
            <div class="cont_box">
              <div class="cont_type" style="align-items: inherit">
                <div class="cont_type_box">
                  <div class="type_item">
                    <span class="type_item_title" style="padding: 15px 0">定位覆盖率</span>
                    <span class="type_item_num">97%</span>
                  </div>
                  <div style="height: 200px">
                    <GaugeChart id="chart5" />
                  </div>
                </div>
                <div class="cont_type_box">
                  <div class="type_item" style="width: 100%">
                    <span class="type_item_title" style="padding: 15px 0">盘点效率</span>
                    <span class="type_item_num" style="padding-right: 10px">38秒/100件</span>
                  </div>
                  <div class="type_item" style="width: 100%">
                    <span class="type_item_title" style="padding: 15px 0">电子围栏告警</span>
                    <span class="type_item_num" style="padding-right: 10px">本周24次</span>
                  </div>
                  <div>
                    <LBarChart id="chart6" :series-data="data6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="health_box">
          <div class="health_title_box">
            <div class="health_title">移动流程中枢</div>
            <div class="health_title_right">
              <span>查看详情</span>
              <el-icon>
                <component :is="'DArrowRight'" />
              </el-icon>
            </div>
          </div>
          <div class="health_content">
            <div class="cont_box">
              <div class="cont_type" style="align-items: inherit">
                <div class="cont_type_box" style="justify-content: space-between">
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 28px 0">审批时效</span>
                    <span class="type_item_num">2.3/h</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 28px 0">扫码操作率</span>
                    <span class="type_item_num">89%</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 28px 0">待办任务</span>
                    <span class="type_item_num">42项</span>
                  </div>
                </div>
                <div class="cont_chart" style="height: 255px">
                  <LBarChart id="chart7" :series-data="data7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="health_box">
          <div class="health_title_box">
            <div class="health_title">无人机巡检成果</div>
            <div class="health_title_right">
              <span>查看详情</span>
              <el-icon>
                <component :is="'DArrowRight'" />
              </el-icon>
            </div>
          </div>
          <div class="health_content">
            <div class="cont_box">
              <div class="cont_type" style="align-items: inherit">
                <div class="cont_type_box" style="justify-content: space-between">
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 28px 0">巡检覆盖率</span>
                    <span class="type_item_num">94%/周</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 28px 0">异常识别率</span>
                    <span class="type_item_num">98.2%</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 28px 0">人工替代</span>
                    <span class="type_item_num">37.5h/周</span>
                  </div>
                </div>
                <div class="cont_chart" style="height: 255px">
                  <div class="progress_padding">
                    <div class="cont_progress">
                      <div class="progress_bg" :style="{ width: progressWidth, height: '100%' }" />
                      <div class="progress_text">{{ progressWidth }}</div>
                    </div>
                    <div class="progress_num">上周巡检覆盖率89%</div>
                  </div>
                  <div style="height: 100%">
                    <LineChart id="chart9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 资产效能分析-车辆专项监控-仓储智能管理 -->
    <el-row :gutter="10" style="margin-bottom: 20px">
      <el-col :span="8">
        <div class="health_box">
          <div class="health_title_box">
            <div class="health_title">资产效能分析</div>
            <div class="health_title_right">
              <span>查看详情</span>
              <el-icon>
                <component :is="'DArrowRight'" />
              </el-icon>
            </div>
          </div>
          <div class="health_content">
            <div class="cont_box">
              <div class="cont_type" style="align-items: inherit">
                <div class="cont_type_box">
                  <div class="type_item" style="width: 100%; margin-bottom: 20px">
                    <span class="type_item_title" style="padding: 15px 0">关键设备OEE</span>
                    <span class="type_item_num" style="padding-right: 10px">86.4%</span>
                  </div>
                  <div style="height: 100%">
                    <LBarChart id="chart10" :series-data="data10" />
                  </div>
                </div>
                <div class="cont_type_box">
                  <div class="type_item" style="width: 100%; margin-bottom: 20px">
                    <span class="type_item_title" style="padding: 15px 0">故障预测准确率</span>
                    <span class="type_item_num" style="padding-right: 10px">92分</span>
                  </div>
                  <div style="height: 100%">
                    <LBarChart id="chart11" :series-data="data11" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="health_box">
          <div class="health_title_box">
            <div class="health_title">车辆专项监控</div>
            <div class="health_title_right">
              <span>查看详情</span>
              <el-icon>
                <component :is="'DArrowRight'" />
              </el-icon>
            </div>
          </div>
          <div class="health_content">
            <div class="cont_box">
              <div class="cont_type" style="align-items: inherit">
                <div class="cont_type_box" style="justify-content: space-between">
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 15px 0">路线合规率</span>
                    <span class="type_item_num">91.7%</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 15px 0">出勤/闲置</span>
                    <span class="type_item_num">73%/27%</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 15px 0">油耗异常</span>
                    <span class="type_item_num">2辆(告警)</span>
                  </div>
                </div>
                <div class="cont_chart">
                  <div class="progress_padding">
                    <div class="cont_progress">
                      <div class="progress_bg" :style="{ width: progressWidth1, height: '100%' }" />
                      <div class="progress_text">{{ progressWidth1 }}</div>
                    </div>
                    <div class="progress_num">主要偏离点: 物流园入口(3次)</div>
                  </div>
                  <div>
                    <LBarChart id="chart12" :series-data="data12" />
                  </div>
                  <div class="prop_list">
                    <div class="prop_item">
                      <span>货车A32</span>
                      <span>+28%异常</span>
                    </div>
                    <div class="prop_item">
                      <span>工程车H77</span>
                      <span>怠速超时</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="health_box">
          <div class="health_title_box">
            <div class="health_title">仓储智能管理</div>
            <div class="health_title_right">
              <span>查看详情</span>
              <el-icon>
                <component :is="'DArrowRight'" />
              </el-icon>
            </div>
          </div>
          <div class="health_content">
            <div class="cont_box">
              <div class="cont_type" style="align-items: inherit">
                <div class="cont_type_box" style="justify-content: space-between">
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 15px 0">盘点差异率</span>
                    <span class="type_item_num">0.17%</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 15px 0">定位耗时</span>
                    <span class="type_item_num">平均45秒</span>
                  </div>
                  <div class="type_item" style="height: 100%">
                    <span class="type_item_title" style="padding: 15px 0">防盗告警</span>
                    <span class="type_item_num">本周8次</span>
                  </div>
                </div>
                <div class="cont_chart">
                  <div class="progress_padding">
                    <div style="display: flex">
                      <div class="progress_first">0.17%</div>

                      <div class="cont_progress">
                        <div
                          class="progress_bg"
                          :style="{
                            width: progressWidth2,
                            height: '100%',
                            backgroundColor: '#fe8081'
                          }"
                        />
                        <!-- <div class="progress_text">{{ progressWidth2 }}</div> -->
                      </div>
                    </div>
                    <div class="progress_num">
                      <span class="progress_tip" />
                      <span>警戒线 0.59</span>
                    </div>
                  </div>
                  <div class="cont_chart" style="margin-top: 20px">
                    <CakeChart id="chart15" :series-data="data15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 决策支持看板 -->
    <div class="health_box">
      <div class="health_title_box">
        <div class="health_title">决策支持看板</div>
        <div class="health_title_right">
          <span>查看详情</span>
          <el-icon>
            <component :is="'DArrowRight'" />
          </el-icon>
        </div>
      </div>
      <div class="health_content">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="cont_box">
              <div class="cont_type">
                <div class="cont_type_box">
                  <div class="type_item" style="flex-direction: column">
                    <span class="type_item_title" style="width: 100%; padding: 20px 0; font-size: 16px">资产总价值</span>
                    <span class="type_item_zz">
                      <span style="font-size: 32px; margin-bottom: 10px;">￥3.26亿</span>
                      <span style="font-size: 15px">同比增长3.8%</span>
                    </span>
                  </div>
                </div>
                <div class="cont_chart" style="margin-left: 10px">
                  <BarChart id="chart14" :series-data="data14" />
                </div>
              </div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="cont_box">
              <div class="cont_head">生命周期预测</div>
              <el-row :gutter="10">
                <el-col :span="8">
                  <div class="col_title">设备类</div>
                </el-col>
                <el-col :span="8">
                  <div class="col_title">车辆类</div>
                </el-col>
                <el-col :span="8">
                  <div class="col_title">仓储类</div>
                </el-col>
              </el-row>
              <el-row :gutter="10" style="margin-top: 5px">
                <el-col :span="8">
                  <div class="col_text">
                    <span>维修成本</span>
                    <span class="col_text_f">↗28%/年</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="col_text">
                    <span>维修成本</span>
                    <span class="col_text_f">↗23%/年</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="col_text">
                    <span>维修成本</span>
                    <span class="col_text_f">↗16%/年</span>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10" style="margin-top: 5px">
                <el-col :span="8">
                  <div class="col_text">
                    <span>剩余价值</span>
                    <span class="col_text_t">↘ 15%/年</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="col_text">
                    <span>剩余价值</span>
                    <span class="col_text_t">↘ 14%/年</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="col_text">
                    <span>剩余价值</span>
                    <span class="col_text_t">↘ 12%/年</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="cont_box">
              <div class="cont_head">优化建议(由AI大模型分析生成)</div>
              <div class="cont_list">
                <div class="cont_list_item">
                  <span>【建议】基于闲置资产时空特征分析的再分配方案</span>
                  <div class="health_title_right">
                    <span>查看详情</span>
                    <el-icon>
                      <component :is="'DArrowRight'" />
                    </el-icon>
                  </div>
                </div>
                <div class="cont_list_item">
                  <span>【建议】基于闲置资产时空特征分析的再分配方案</span>
                  <div class="health_title_right">
                    <span>查看详情</span>
                    <el-icon>
                      <component :is="'DArrowRight'" />
                    </el-icon>
                  </div>
                </div>
                <div class="cont_list_item">
                  <span>【建议】基于闲置资产时空特征分析的再分配方案</span>
                  <div class="health_title_right">
                    <span>查看详情</span>
                    <el-icon>
                      <component :is="'DArrowRight'" />
                    </el-icon>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CakeChart from '@/components/chart/CakeChart.vue'
import BarChart from '@/components/chart/BarChart.vue'
import LBarChart from '@/components/chart/LBarChart.vue'
import GaugeChart from '@/components/chart/GaugeChart.vue'
import LineChart from '@/components/chart/LineChart.vue'
const data1 = [
  { value: 5210, name: '设备类' },
  { value: 382, name: '车辆类' },
  { value: 3050, name: '仓储类' }
]
const data2 = [
  { value: 68, name: '故障' },
  { value: 42, name: '闲置' },
  { value: 17, name: '位置异常' }
]
const data15 = [
  { value: 68, name: '非授权出入(5)' },
  { value: 42, name: '信号丢失(2)' },
  { value: 17, name: '暴力破坏(1)' }
]
const data3 = {
  xAxisData: ['生产区', '仓库区', '办公区'],
  legendData: ['生产区', '仓库区', '办公区'],
  series: [
    {
      name: '生产区',
      type: 'bar',
      barWidth: '30',
      data: [94]
    },
    {
      name: '仓库区',
      type: 'bar',
      barWidth: '30',
      data: [76]
    },
    {
      name: '办公区',
      type: 'bar',
      barWidth: '30',
      data: [65],
      label: {
        formatter: (data) => {
          if (data.value > 0) {
            return `${data.value}%`
          }
          return ''
        },

        show: true,
        position: 'inside'
      }
    }
  ]
}
const data14 = {
  xAxisData: ['生产设备', '仓储物资', '运输工具', '其他'],
  legendData: ['生产设备', '仓储物资', '运输工具', '其他'],
  series: [
    {
      name: '生产设备',
      type: 'bar',
      barWidth: 40,
      data: [94]
    },
    {
      name: '仓储物资',
      type: 'bar',
      barWidth: 40,
      data: [76]
    },
    {
      name: '运输工具',
      type: 'bar',
      barWidth: 40,
      data: [65]
    },
    {
      name: '其他',
      type: 'bar',
      barWidth: 40,
      data: [65]
    }
  ]
}
const data6 = {
  showxAxis: false,
  showyAxis: false,
  showlegend: true,
  inverse: false,
  grid: {
    left: '5%',
    top: '20%',
    right: '10%',
    bottom: '20%'
  },
  yAxisData: [],
  legend: ['中危区', '高危区'],
  color: ['#c10003', '#004cca'],
  max: 12,
  series: [
    {
      realtimeSort: true,
      name: '中危区',
      type: 'bar',
      data: [5],
      barWidth: 30,

      label: {
        show: true,
        position: 'left',
        valueAnimation: true
      }
    },
    {
      realtimeSort: true,
      name: '高危区',
      type: 'bar',
      data: [8],
      barWidth: 30,

      label: {
        show: true,
        position: 'left',
        valueAnimation: true
      }
    }
  ]
}
const data7 = {
  showxAxis: false,
  showyAxis: true,
  showlegend: false,
  max: 100,

  inverse: true,
  grid: {
    left: '20%',
    top: '5%',
    right: '10%',
    bottom: '5%'
  },
  yAxisData: ['申请', '审核中', '已完成'],
  legend: ['申请', '审核中', '已完成'],
  color: ['#c10003', '#004cca'],
  series: [
    {
      realtimeSort: true,
      type: 'bar',
      data: [100, 72, 28]
    }
  ]
}

const progressWidth = '89%'
const progressWidth1 = '91.7%'
const progressWidth2 = '59%'
const data10 = {
  showxAxis: false,
  showyAxis: false,
  showlegend: true,
  inverse: false,
  grid: {
    left: '5%',
    top: '20%',
    right: '20%',
    bottom: '20%'
  },
  yAxisData: [],

  legend: ['性能率', '良品率', '可用率'],
  color: ['#c10003', '#04af53', '#004cca'],
  max: 120,
  series: [
    {
      realtimeSort: true,
      name: '性能率',
      type: 'bar',
      data: [94],
      barWidth: 30
    },
    {
      realtimeSort: true,
      name: '良品率',
      type: 'bar',
      data: [98],
      barWidth: 30
    },
    {
      realtimeSort: true,
      name: '可用率',
      type: 'bar',
      data: [92],
      barWidth: 30
    }
  ]
}
const data11 = {
  showxAxis: false,
  showyAxis: false,
  showlegend: true,
  inverse: false,
  grid: {
    left: '5%',
    top: '20%',
    right: '20%',
    bottom: '20%'
  },
  yAxisData: [],

  legend: ['实时性', '特征重要性', '数据完备性'],
  color: ['#c10003', '#04af53', '#004cca'],
  max: 120,
  series: [
    {
      realtimeSort: true,
      name: '实时性',
      type: 'bar',
      data: [90],
      barWidth: 30
    },
    {
      realtimeSort: true,
      name: '特征重要性',
      type: 'bar',
      data: [88],
      barWidth: 30
    },
    {
      realtimeSort: true,
      name: '数据完备性',
      type: 'bar',
      data: [95],
      barWidth: 30
    }
  ]
}
const data12 = {
  showxAxis: false,
  showyAxis: false,
  showlegend: true,
  inverse: false,
  grid: {
    left: '5%',
    top: '20%',
    right: '10%',
    bottom: '20%'
  },
  yAxisData: [],
  legend: ['出勤率', '闲置率'],
  color: ['#05b050', '#c10003'],
  max: 100,
  series: [
    {
      realtimeSort: true,
      name: '出勤率',
      type: 'bar',
      data: [73],
      barWidth: 30
    },
    {
      realtimeSort: true,
      name: '闲置率',
      type: 'bar',
      data: [27],
      barWidth: 30
    }
  ]
}
</script>

<!-- <script>

export default {
  name: 'Demo',
  components: {
  },
  data: () => ({
    users: [
      {
        id: 1,
        name: 'Shawna Dubbin',
        email: 'sdubbin0@geocities.com',
        gender: 'Male',
        title: 'Assistant Media Planner'
      },
      {
        id: 2,
        name: 'Odette Demageard',
        email: 'odemageard1@spotify.com',
        gender: 'Female',
        title: 'Account Coordinator'
      },
      {
        id: 3,
        name: 'Vera Taleworth',
        email: 'vtaleworth2@google.ca',
        gender: 'Male',
        title: 'Community Outreach Specialist'
      },
      {
        id: 4,
        name: 'Lonnie Izkovitz',
        email: 'lizkovitz3@youtu.be',
        gender: 'Female',
        title: 'Operator'
      },
      {
        id: 5,
        name: 'Thatcher Stave',
        email: 'tstave4@reference.com',
        gender: 'Male',
        title: 'Software Test Engineer III'
      },
      {
        id: 6,
        name: 'Karim Chipping',
        email: 'kchipping5@scribd.com',
        gender: 'Female',
        title: 'Safety Technician II'
      },
      {
        id: 7,
        name: 'Helge Holyard',
        email: 'hholyard6@howstuffworks.com',
        gender: 'Female',
        title: 'Internal Auditor'
      },
      {
        id: 8,
        name: 'Rod Titterton',
        email: 'rtitterton7@nydailynews.com',
        gender: 'Male',
        title: 'Technical Writer'
      },
      {
        id: 9,
        name: 'Gawen Applewhite',
        email: 'gapplewhite8@reverbnation.com',
        gender: 'Female',
        title: 'GIS Technical Architect'
      },
      {
        id: 10,
        name: 'Nero Mulgrew',
        email: 'nmulgrew9@plala.or.jp',
        gender: 'Female',
        title: 'Staff Scientist'
      },
      {
        id: 11,
        name: 'Cybill Rimington',
        email: 'crimingtona@usnews.com',
        gender: 'Female',
        title: 'Assistant Professor'
      },
      {
        id: 12,
        name: 'Maureene Eggleson',
        email: 'megglesonb@elpais.com',
        gender: 'Male',
        title: 'Recruiting Manager'
      },
      {
        id: 13,
        name: 'Cortney Caulket',
        email: 'ccaulketc@cbsnews.com',
        gender: 'Male',
        title: 'Safety Technician IV'
      },
      {
        id: 14,
        name: 'Selig Swynfen',
        email: 'sswynfend@cpanel.net',
        gender: 'Female',
        title: 'Environmental Specialist'
      },
      {
        id: 15,
        name: 'Ingar Raggles',
        email: 'iragglese@cbc.ca',
        gender: 'Female',
        title: 'VP Sales'
      },
      {
        id: 16,
        name: 'Karmen Mines',
        email: 'kminesf@topsy.com',
        gender: 'Male',
        title: 'Administrative Officer'
      },
      {
        id: 17,
        name: 'Salome Judron',
        email: 'sjudrong@jigsy.com',
        gender: 'Male',
        title: 'Staff Scientist'
      },
      {
        id: 18,
        name: 'Clarinda Marieton',
        email: 'cmarietonh@theatlantic.com',
        gender: 'Male',
        title: 'Paralegal'
      },
      {
        id: 19,
        name: 'Paxon Lotterington',
        email: 'plotteringtoni@netvibes.com',
        gender: 'Female',
        title: 'Marketing Assistant'
      },
      {
        id: 20,
        name: 'Maura Thoms',
        email: 'mthomsj@webeden.co.uk',
        gender: 'Male',
        title: 'Actuary'
      }
    ]
  }),
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort
        if (this.currentSortOrder === 'desc') {
          return a[sortBy].localeCompare(b[sortBy])
        }
        return b[sortBy].localeCompare(a[sortBy])
      })
    }
  }
}
</script> -->

<style rel="stylesheet/scss" lang="scss" scoped>
.md-card {
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-list {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, .12);
}
</style>

<style lang="scss" scoped>
.home_box {
  padding: 10px 20px;
}

.health_box {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 20px;

  .health_title_box {
    display: flex;
    justify-content: space-between;

    .health_title {
      width: 200px;
      text-align: center;
      padding: 5px 0;
      background-color: #cd752e;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }

    .health_title_right {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #000;

      span {
        margin-bottom: 1px;
        margin-right: 2px;
      }
    }
  }

  .health_content {
    height: 100%;
    border: 2px solid #cd752e;
    border-bottom: 0;

    .cont_box {
      padding: 5px;
      font-size: 13px;
      font-weight: 500;
      height: 100%;

      .cont_head {
        padding: 7px 0;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        background-color: #f2f2f2;
        border-radius: 4px;
        margin-bottom: 5px;
      }

      .col_title {
        padding: 7px 0;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        background-color: #f2f2f2;
      }

      .col_text {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .col_text_f {
          display: block;
          padding: 10px;
          background-color: #bfffdd;
        }

        .col_text_t {
          display: block;
          padding: 10px;
          background-color: #fdc1c3;
        }
      }

      .cont_list {
        .cont_list_item {
          display: flex;
          justify-content: space-between;
          padding: 8px 10px;
        }

        .cont_list_item:nth-child(even) {
          background-color: #f2f2f2;
        }
      }

      .cont_type {
        display: flex;
        align-items: center;

        .cont_type_box {
          display: flex;
          flex-direction: column;
          width: 50%;

          .type_item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;

            .type_item_title {
              display: block;
              width: 130px;
              padding: 7px 0;
              font-size: 14px;
              font-weight: 500;
              text-align: center;
              background-color: #f2f2f2;
              margin-bottom: 5px;
            }

            .type_item_zz {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }
        }

        .cont_chart {
          width: 100%;

          .progress_padding {
            padding: 0 20px;

            .progress_first {
              background-color: #00b150;
              padding: 0 10px;
              color: #fff;
            }
          }

          .cont_progress {
            width: 100%;
            height: 20px;
            border: 3px solid #00b150;
            position: relative;

            .progress_bg {
              background-color: #00b150;
            }

            .progress_text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
              color: #fff;
            }
          }

          .progress_num {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .progress_tip {
              display: block;
              width: 10px;
              height: 10px;
              background-color: #fe8081;
              margin-right: 5px;
            }
          }
        }

        .prop_list {
          display: flex;
          margin-left: 20px;

          .prop_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            font-size: 12px;
            background-color: #febf00;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
