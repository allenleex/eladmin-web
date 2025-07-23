<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'RkLang'
}
</script>

<script lang="ts" setup>
/* 业务代码 */

import { getCurrentInstance } from 'vue'
import { useLangStore } from '@/stores/modules/lang'
const store = useLangStore()

// 获取当前页面实例
const { proxy } = getCurrentInstance() as any
const handleCommand = (value: 'en' | 'zhCn') => {
  proxy.$i18n.locale = value
  store.changeLang(value)
  store.changeReload()
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      <img class="header_zy" src="@/assets/zy.png" alt="">
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zhCn">{{ $t('menu.zh') }}</el-dropdown-item>
        <el-dropdown-item command="en">{{ $t('menu.en') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.header_zy {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
</style>
