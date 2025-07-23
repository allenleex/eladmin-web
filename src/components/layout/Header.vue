<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'RkHeader'
}
</script>

<script lang="ts" setup>
/* 业务代码 */
import { ref } from 'vue'

import { useRouter } from 'vue-router'
import {
  Fold,
  Expand,
  House,
  Bell,
  RefreshRight,
  FullScreen,
  UserFilled
} from '@element-plus/icons-vue'
import { useOpenStore } from '@/stores/modules/open'
const openStore = useOpenStore()
console.log(openStore.isCollapse)

const router = useRouter()

// 退出登录
function outLogin() {
  localStorage.clear()
  router.replace('/')
}
const navList = ['固定资产云看板']
const currentNav = ref('固定资产云看板')
</script>

<template>
  <header>
    <div class="header_top">
      <div class="header_logo">
        <img src="@/assets/logo.png" alt="">
        <span>中建三局三公司华南分公司资产智能管理系统</span>
      </div>
      <div class="header_rihgt">
        <div class="header_title" />
        <div class="header_user">
          <el-icon style="margin-right: 20px" size="18" color="#000"><Bell /></el-icon>
          <el-icon style="margin-right: 20px" size="18" color="#000"><RefreshRight /></el-icon>
          <el-icon style="margin-right: 20px" size="18" color="#000"><FullScreen /> </el-icon>
          <div class="header_user">
            <el-avatar :size="30" :icon="UserFilled" />
            <span style="margin-left: 10px; font-size: 12px">long</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header_nav">
      <div style="white-space: nowrap">中建三局三公司华南分公司资产智能管理系统</div>
      <div class="header_icon">
        <div class="icon_item" style="border-right: 1px solid #e5e5e5">
          <el-icon
            v-if="openStore.isCollapse"
            size="16"
            color="#000"
            @click="openStore.setCollapse(!openStore.isCollapse)"
          ><Expand /></el-icon>

          <el-icon
            v-else
            size="16"
            color="#000"
            @click="openStore.setCollapse(!openStore.isCollapse)"
          ><Fold /></el-icon>
        </div>
        <div class="icon_item">
          <el-icon size="15" color="#000"><House /></el-icon>
        </div>
      </div>
      <el-scrollbar>
        <div class="nav_box">
          <div
            v-for="item in navList"
            :key="item"
            class="nav_item"
            :class="{ 'nav-active': currentNav == item }"
          >
            {{ item }}
          </div>
        </div>
      </el-scrollbar>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header_top {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .header_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2a6598;
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    img {
      width: 30px;
      height: 30px;
      margin: 0 10px;
    }
  }

  .header_rihgt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100vw - 220px);
    padding: 0 20px;

    .header_title {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
    .header_user {
      display: flex;
      align-items: center;
    }

    .outLogin {
      width: 14px;
      height: 14px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
.header_nav {
  display: flex;
  align-items: center;
  height: 26px;
  background-color: #f6f6f6;
  font-size: 12px;
  color: #989898;
  padding: 0 10px;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  .header_icon {
    display: flex;
    align-items: center;
    height: 100%;

    .icon_item {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      cursor: pointer;
    }
  }
  .nav_box {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    max-width: 80%;
    // overflow-x: auto;
    flex: 1;
    line-height: 28px;
    margin-left: 2px;
    color: #000;
    font-size: 11px;
    font-weight: 500;
    .nav_item {
      height: 100%;
      white-space: nowrap;
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
.nav-active {
  background-color: #fff;
  border-top: 1px solid #b57744;
}
</style>
