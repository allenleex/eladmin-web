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
              <span class="indicator-title">1,100<sub>元</sub></span>
              <span class="indicator-value">原值</span>
            </div>
            <div class="md-layout-item">
              <span class="indicator-title">11,000<sub>元</sub></span>
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
        <!-- <div class="md-layout-item md-size-20">
          <md-button class="md-raised md-accent" @click="showSidepanel = true">测试弹出功能</md-button>
        </div> -->
      </div>
      <h2>总数量：3333件&nbsp;&nbsp;&nbsp;&nbsp;总价值：33465元</h2>
      <md-table>
        <md-table-row>
          <md-table-head>资产名称</md-table-head>
          <md-table-head>资产分类</md-table-head>
          <md-table-head>规格型号</md-table-head>
          <md-table-head>总数</md-table-head>
          <md-table-head>原值</md-table-head>
          <md-table-head>净残值</md-table-head>
          <md-table-head>操作</md-table-head>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <md-table-row @click="showSidepanel = true">
          <md-table-cell>苹果笔记本电脑MAC book pro</md-table-cell>
          <md-table-cell>办公设备-笔记本电脑</md-table-cell>
          <md-table-cell>MacBook Pro 2023 M2</md-table-cell>
          <md-table-cell>10</md-table-cell>
          <md-table-cell>¥5000</md-table-cell>
          <md-table-cell>¥1200</md-table-cell>
          <md-table-cell> <a @click="showSidepanel = true">查看清单</a></md-table-cell>
        </md-table-row>
        <!-- <md-table-pagination
          :md-page-size="10"
          :md-page-options="[1, 2, 3, 4, 5, 6]"
          :md-update="updatePagination"
          :md-data="users"
          :md-paginated-data.sync="paginatedUsers" /> -->
      </md-table>
    </md-content>
    <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-content>
        <h2>资产详情</h2>
        <md-divider />
        <md-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-66">
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>资产编号：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>资产名称：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>分类代码：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>分类名称：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>规格型号：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50" />
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>资产数量：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>数量单位：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>当前所属单位：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>调入时间：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>资产状态：</label>
                    <md-input v-model="initial" readonly />
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50" />
              </div>
            </div>
            <div class="md-layout-item md-size-34">
              <img :src="wurenji">
            </div>
          </div>
          <md-divider />
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>购入时间：</label>
                <md-input v-model="initial" readonly />
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>使用年限：</label>
                <md-input v-model="initial" readonly />
              </md-field>
            </div>
            <div class="md-layout-item md-size-33" />
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>购入价值：</label>
                <md-input v-model="initial" readonly />
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>净残值率：</label>
                <md-input v-model="initial" readonly />
              </md-field>
            </div>
            <div class="md-layout-item md-size-33">
              <md-field>
                <label>净残值：</label>
                <md-input v-model="initial" readonly />
              </md-field>
            </div>
          </div>
          <md-divider />
          <h3>使用记录</h3>
          <md-table>
            <md-table-row>
              <md-table-head>日期</md-table-head>
              <md-table-head>时间类型</md-table-head>
              <md-table-head>使用人</md-table-head>
              <md-table-head>备注</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell>2024年06月01日 </md-table-cell>
              <md-table-cell>购入</md-table-cell>
              <md-table-cell>张伟</md-table-cell>
              <md-table-cell>初始购入</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>2024年06月15日 </md-table-cell>
              <md-table-cell>个人领用</md-table-cell>
              <md-table-cell>王三</md-table-cell>
              <md-table-cell>用于项目开发 </md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell>2024年07月10日 </md-table-cell>
              <md-table-cell>项目借用</md-table-cell>
              <md-table-cell>李四</md-table-cell>
              <md-table-cell>项目A借用</md-table-cell>
            </md-table-row>
          </md-table>
        </md-content>
      </md-content>
    </md-drawer>
  </div>
</template>

<script>
import wurenji from '@/assets/img/wurenji.png'
export default {
  name: 'DemoZCTZQD',
  data: () => ({
    showSidepanel: true,
    wurenji: wurenji,
    initial: 'NULL',
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null,
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
.md-right {
    width: 640px;
    max-width: calc(100vw / 2);
  }
</style>
