<template>
  <!-- <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

        <el-tooltip content="项目文档" effect="dark" placement="bottom">
          <Doc class="right-menu-item hover-effect" />
        </el-tooltip>

        <el-tooltip content="全屏缩放" effect="dark" placement="bottom">
          <screenfull id="screenfull" class="right-menu-item hover-effect" />
        </el-tooltip>

        <el-tooltip content="布局设置" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>

      </template>

<el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
  <div class="avatar-wrapper">
    <img :src="user.avatarName ? baseApi + '/avatar/' + user.avatarName : Avatar" class="user-avatar">
    <i class="el-icon-caret-bottom" />
  </div>
  <el-dropdown-menu slot="dropdown">
    <span style="display:block;" @click="show = true">
      <el-dropdown-item>
        布局设置
      </el-dropdown-item>
    </span>
    <router-link to="/user/center">
      <el-dropdown-item>
        个人中心
      </el-dropdown-item>
    </router-link>
    <span style="display:block;" @click="open">
      <el-dropdown-item divided>
        退出登录
      </el-dropdown-item>
    </span>
  </el-dropdown-menu>
</el-dropdown>
</div>
</div> -->
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <hamburger id="hamburger-container" :is-active="sidebar.opened" @toggleClick="toggleSideBar" />
      <span class="md-title">
        <breadcrumb id="breadcrumb-container" />
      </span>
      <div v-if="device !== 'mobile'" class="md-toolbar-section-end">
        <!-- 搜索 -->
         <search id="header-search" />
        <!-- <md-button class="md-icon-button" @click=";">
          <span class="material-icons">
            search
          </span>
          <md-tooltip md-direction="bottom">搜索</md-tooltip>
        </md-button> -->
        <!-- 项目文档 -->
        <md-button class="md-icon-button" @click=";">
          <span class="material-icons">
            article
          </span>
          <md-tooltip md-direction="bottom">项目文档</md-tooltip>
        </md-button>
        <!-- 全屏缩放 -->
        <screenfull id="screenfull" />
        <!-- 布局设置 -->
         <size-select id="size-select" class="right-menu-item hover-effect" />
        <!-- <md-button class="md-icon-button" @click=";">
          <span class="material-icons">
            auto_awesome_mosaic
          </span>
          <md-tooltip md-direction="bottom">布局设置</md-tooltip>
        </md-button> -->
        <!-- 个人中心 -->
        <md-button class="md-icon-button" to="/user/center">
          <span class="material-icons">
            perm_identity
          </span>
          <md-tooltip md-direction="bottom">个人中心</md-tooltip>
        </md-button>
        <!-- 退出登录 -->
        <md-button class="md-icon-button" @click="confirm = true">
          <span class="material-icons">
            logout
          </span>
          <md-tooltip md-direction="bottom">退出登录</md-tooltip>
        </md-button>
      </div>
      <md-dialog-confirm
        :md-active.sync="confirm"
        md-title="提示"
        md-content="确定注销并退出系统吗？"
        md-confirm-text="确定"
        md-cancel-text="取消"
        @md-cancel="onCancel"
        @md-confirm="onConfirm"
      />
    </md-app-toolbar></md-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Doc from '@/components/Doc'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'
import Avatar from '@/assets/images/avatar.png'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    SizeSelect,
    Search,
    Doc
  },
  data() {
    return {
      Avatar: Avatar,
      dialogVisible: false,
      confirm: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'user',
      'baseApi'
    ]),
    show: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    onConfirm() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    onCancel() {
      // confirm = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
