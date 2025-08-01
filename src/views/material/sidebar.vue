<template>
  <md-drawer class="sidebar" :md-active="mdActive" @update:mdActive="$emit('update:mdActive', $event)" md-swipeable>
    <md-toolbar class="md-primary" md-elevation="0">
      <md-icon>menu</md-icon>
      <span class="md-title">功能导航</span>
    </md-toolbar>
    <material-menu />
  </md-drawer>
</template>

<script>
import MaterialMenu from './menu'
export default {
  name: 'MaterialSidebar',
  components: {
    MaterialMenu
  },
  props: ['mdActive'], // 接收父组件传递的状态
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 240px;
  max-width: calc(100vw / 3);

  .md-icon {
    margin: 0 1rem 0 0 !important;
  }

  .md-toolbar .md-button~.md-title,
  .md-toolbar .md-icon~.md-title {
    margin-left: 0px !important;
  }

  .md-button {
    width: 100%;
    text-align: left;
  }

  .md-button .md-ripple {
    align-items: left;
  }
}
</style>
