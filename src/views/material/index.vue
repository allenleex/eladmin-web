<template>
  <div>
    <material-navbar :sidebar-visible="sidebarVisible" @toggle-sidebar="toggleSidebar" :rightbar-visible="rightbarVisible" @toggle-rightbar="toggleRightbar" />
    <material-sidebar :md-active="sidebarVisible" @update:mdActive="sidebarVisible = $event" />
    <material-rightbar :md-active="rightbarVisible" @update:mdActive="rightbarVisible = $event" />
    <div class="md-container">
      <md-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20">
            <md-content><material-menu /></md-content>
          </div>
          <div class="md-layout-item">
            <md-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et!
              Earum magnam,
              similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo,
              neque.
            </md-content>
          </div>
        </div>
      </md-content>
    </div>
  </div>
</template>

<script>
import MaterialNavbar from './navbar'
import MaterialSidebar from './sidebar'
import MaterialRightbar from './rightbar'
import MaterialMenu from './menu'
export default {
  name: 'MaterialLayout',
  components: {
    MaterialNavbar, MaterialSidebar, MaterialMenu, MaterialRightbar
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
