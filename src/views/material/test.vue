<template>
  <div class="page-container">
    <md-app md-waterfall>
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Title</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="confirm = true">
              <md-icon>logout</md-icon>
            </md-button>
          </div>
        </div>
        <md-dialog-confirm :md-active.sync="confirm" md-title="提示" md-content="确定注销并退出系统吗？" md-confirm-text="确定"
          md-cancel-text="取消" @md-cancel="onCancel" @md-confirm="onConfirm" />
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-default" md-elevation="0">
          <span class="md-title">Navigation</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-divider></md-divider>
        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="main">
        <md-tabs class="md-default">
          <md-tab id="tab-home" md-label="首页"></md-tab>
          <md-tab id="tab-a" md-label="功能页面"></md-tab>
          <md-tab id="tab-b" md-label="功能页面"></md-tab>
          <md-tab id="tab-c" md-label="功能页面"></md-tab>
        </md-tabs>
        <material-demo />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import MaterialDemo from './demo'
export default {
  name: 'MaterialTest',
  data: () => ({
    menuVisible: false,
    confirm: false
  }),
  components: {
    MaterialDemo
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
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
.md-app-drawer {
  width: calc(100vw / 6);
  max-width: calc(100vw / 3);
  margin-top: 32px;
  border: none !important;
}

.md-tabs {
  width: 100%;
  margin: 0 0;
}

.md-content {
  padding: 0 0 !important;
}

.main {
  background-color: #EEEEEE !important;
}

.md-title {
  height: 48px;
  line-height: 48px;
}
</style>