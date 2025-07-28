<template>
  <div class="md-container">
    <h1>周转物资收益</h1>
    <md-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <h2>周转物资概况</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">电子设备</span>
              <span class="indicator-value">大类</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">电子设备</span>
              <span class="indicator-value">细类</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">200</span>
              <span class="indicator-value">总数量</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">500,000<sub>元</sub></span>
              <span class="indicator-value">总价值</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title red bigger">72%</span>
              <span class="indicator-value red bigger">周转率</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">144</span>
              <span class="indicator-value">在用资产数</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">56</span>
              <span class="indicator-value">闲置资产数</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">168%</span>
              <span class="indicator-value">ROI</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">500,000<sub>元</sub></span>
              <span class="indicator-value">资产总值</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title red bigger">84,000<sub>元</sub></span>
              <span class="indicator-value red bigger">当月收益</span>
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
