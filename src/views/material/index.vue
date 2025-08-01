<template>
  <div>
    <material-navbar :sidebar-visible="sidebarVisible" @toggle-sidebar="toggleSidebar" :rightbar-visible="rightbarVisible" @toggle-rightbar="toggleRightbar" />
    <material-sidebar :md-active="sidebarVisible" @update:mdActive="sidebarVisible = $event" />
    <!-- <material-rightbar :md-active="rightbarVisible" @update:mdActive="rightbarVisible = $event" /> -->
    <div class="md-container">
      <material-demo/>
    </div>
  </div>
</template>

<script>
import MaterialNavbar from './navbar'
import MaterialSidebar from './sidebar'
import MaterialRightbar from './rightbar'
import MaterialMenu from './menu'
import MaterialDemo from './demo'
export default {
  name: 'MaterialLayout',
  components: {
    MaterialNavbar, MaterialSidebar, MaterialMenu, MaterialRightbar, MaterialDemo
  },
  data: () => ({
    sidebarVisible: false,
    rightbarVisible: false
  }),
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
    },
    toggleRightbar() {
      this.rightbarVisible = !this.rightbarVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.md-layout-item {
  &:after {
    width: 100%;
    height: 100%;
    display: block;
    background: md-get-palette-color(green, 200);
    content: " ";
  }
}

.toolbar-actions {
  display: flex;
  max-width: 100px;
}

.md-content {
  padding: 16px;
}
</style>
