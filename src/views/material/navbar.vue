<template>
  <div>
    <md-toolbar class="md-primary navbar">
      <div class="md-toolbar-row">
        <md-button class="md-icon-button" @click="$emit('toggle-sidebar')">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">后台管理系统</span>
        <div class="md-toolbar-section-end">
          <md-button class="md-dense" @click="$emit('toggle-rightbar')">系统设置</md-button>
          <md-button class="md-dense" @click="confirm = true">注销用户</md-button>
        </div>
        <md-dialog-confirm :md-active.sync="confirm" md-title="提示" md-content="确定注销并退出系统吗？" md-confirm-text="确定"
          md-cancel-text="取消" @md-cancel="onCancel" @md-confirm="onConfirm" />
      </div>
    </md-toolbar>
    <md-tabs class="md-default" md-alignment="centered">
      <md-tab id="tab-1" md-label="功能页面1"></md-tab>
      <md-tab id="tab-2" md-label="功能页面2"></md-tab>
      <md-tab id="tab-3" md-label="功能页面3"></md-tab>
      <md-tab id="tab-4" md-label="功能页面4"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'MaterialNavbar',
  data: () => ({
    confirm: false
  }),
  props: ['sidebarVisible'], // 接收父组件传递的状态
  methods: {
    onConfirm() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    onCancel() {
      confirm = false
    }
  }
}
</script>

<style lang="scss" scoped>
.md-toolbar.navbar {
  box-shadow: none !important;
}
</style>
