<template>
  <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
    <md-toolbar class="md-transparent" md-elevation="0">
      <span>Navigation</span>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button md-dense" @click="toggleMenu">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <material-menu />
  </md-app-drawer>
</template>

<script>
import MaterialMenu from './menu'
export default {
  name: 'MaterialSidebar',
  components: {
    MaterialMenu
  },
  data: () => ({
    menuVisible: true
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.md-drawer {
    width: 240px;
    max-width: calc(100vw / 3);
  }
</style>
