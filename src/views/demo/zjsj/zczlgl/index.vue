<template>
  <div class="md-container">
    <h1>资产租赁管理</h1>
    <md-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <h2>租赁概括</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">10<sub>件</sub></span>
              <span class="indicator-value">租出办公设备</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">5<sub>个</sub></span>
              <span class="indicator-value">服务项目</span>
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <h2>资产状态</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">2<sub>件</sub></span>
              <span class="indicator-value">已逾期</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">20<sub>件</sub></span>
              <span class="indicator-value">1个月内到期</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">20<sub>件</sub></span>
              <span class="indicator-value">3个月内到期</span>
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <h2>资产价值</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">30,000<sub>元</sub></span>
              <span class="indicator-value">当月效益</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">90,000<sub>元</sub></span>
              <span class="indicator-value">当季效益</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">300,000<sub>元</sub></span>
              <span class="indicator-value">本年累计</span>
            </div>
          </div>
        </div>
      </div>
    </md-content>
    <md-content>
      <div class="md-layout md-gutter" style="padding-left: 20px;">
        <div class="md-layout-item md-size-20">
          <md-field>
            <md-select id="movie" name="movie" placeholder="默认按租赁单位排序">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item md-size-20">
          <md-field>
            <md-select id="movie" name="movie" placeholder="全部租赁单位">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item md-size-20">
          <md-field>
            <md-select id="movie" name="movie" placeholder="已逾期">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>标签ID</md-table-head>
          <md-table-head md-numeric>资产代码</md-table-head>
          <md-table-head>资产名称</md-table-head>
          <md-table-head>资产分类</md-table-head>
          <md-table-head>规格型号</md-table-head>
          <md-table-head>标签状态</md-table-head>
          <md-table-head>标签信号强弱</md-table-head>
          <md-table-head>最后通讯时间</md-table-head>
          <md-table-head>最后通讯设备</md-table-head>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>无人机2</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell md-numeric>000001</md-table-cell>
          <md-table-cell>无人机</md-table-cell>
          <md-table-cell>流动资产</md-table-cell>
          <md-table-cell>HP LaserJet Pro MFP M227fdw </md-table-cell>
          <md-table-cell>正常</md-table-cell>
          <md-table-cell>较强</md-table-cell>
          <md-table-cell>20230513 13:40:55</md-table-cell>
          <md-table-cell>基站1</md-table-cell>
        </md-table-row>
        <!-- <md-table-pagination
          :md-page-size="10"
          :md-page-options="[1, 2, 3, 4, 5, 6]" /> -->
      </md-table>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'DemoZCSSPD',
  data: () => ({
    users: null,
    paginatedUsers: null
  }),
  methods: {
    updatePagination(page, pageSize, sort, sortOrder) {
      console.log('pagination has updated', page, pageSize, sort, sortOrder)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/zjsj.scss";
</style>
