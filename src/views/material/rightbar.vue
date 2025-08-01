<template>
  <md-drawer class="md-right" :md-active="mdActive" @update:mdActive="$emit('update:mdActive', $event)">
    <md-toolbar class="md-primary" md-elevation="0">
      <md-icon>settings</md-icon>
      <span class="md-title">系统设置</span>
    </md-toolbar>
    <md-list>
      <md-list-item>
        <span class="md-list-item-text">Abbey Christansen</span>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">chat_bubble</md-icon>
        </md-button>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text">Alex Nelson</span>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">chat_bubble</md-icon>
        </md-button>
      </md-list-item>
      <md-list-item>
        <span class="md-list-item-text">Mary Johnson</span>
        <md-button class="md-icon-button md-list-action">
          <md-icon>chat_bubble</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </md-drawer>
</template>

<script>
export default {
  name: 'MaterialRightbar',
  components: {},
  props: ['mdActive'], // 接收父组件传递的状态
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
.rightbar {
  width: 240px;
  max-width: calc(100vw / 3);

  .md-toolbar .md-button~.md-title,
  .md-toolbar .md-icon~.md-title {
    margin-left: 0px !important;
  }

  .md-toolbar {
    .md-icon {
      margin: 0 1rem 0 0 !important;
    }
  }

}
</style>
