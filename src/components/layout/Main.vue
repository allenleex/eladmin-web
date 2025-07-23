<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'ZtMain'
}
</script>

<script lang="ts" setup>
/* 业务代码 */
import Crumbs from '@/components/layout/Crumbs.vue'
</script>

<template>
  <main>
    <Crumbs />
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  height: calc(100% - 68px);
  overflow-y: auto;
}
</style>
