<template>
  <div class="md-container">
    <h1>资产台账总览</h1>
    <md-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <h2>资产数量</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">10</span>
              <span class="indicator-value">大类</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">110</span>
              <span class="indicator-value">细类</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">120<sub>件</sub></span>
              <span class="indicator-value">总计</span>
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <h2>资产状态</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">20</span>
              <span class="indicator-value">在用</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">20</span>
              <span class="indicator-value">租赁</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">20</span>
              <span class="indicator-value">借出</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">20</span>
              <span class="indicator-value">在库</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">20</span>
              <span class="indicator-value">维保</span>
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <h2>资产价值</h2>
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <span class="indicator-title">1100<sub>元</sub></span>
              <span class="indicator-value">原值</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">11000<sub>元</sub></span>
              <span class="indicator-value">净残值</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">23%</span>
              <span class="indicator-value">净残值率</span>
            </div>
          </div>
        </div>
      </div>
    </md-content>
    <md-content>
      <div class="md-layout md-gutter" style="padding-left: 20px;">
        <div class="md-layout-item md-size-20">
          <md-field>
            <md-select id="movie" name="movie" placeholder="全部资产分类">
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
            <md-select id="movie" name="movie" placeholder="全部机构与项目">
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
      <h2>总数量：3333件&nbsp;&nbsp;&nbsp;&nbsp;总价值：33465元</h2>
      <md-table>
        <md-table-row>
          <md-table-head>资产名称</md-table-head>
          <md-table-head>资产分类</md-table-head>
          <md-table-head>规格型号</md-table-head>
          <md-table-head md-numeric>总数</md-table-head>
          <md-table-head>原值</md-table-head>
          <md-table-head>净残值</md-table-head>
          <md-table-head>操作</md-table-head>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell md-numeric>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell><a>查看清单</a></md-table-cell>
        </md-table-row>
        <!-- <md-table-pagination
          :md-page-size="10"
          :md-page-options="[1, 2, 3, 4, 5, 6]"
          :md-update="updatePagination"
          :md-data="users"
          :md-paginated-data.sync="paginatedUsers" /> -->
      </md-table>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'DemoZCTZQD',
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
