<template>
  <div>
    <!-- 单级菜单项 -->
    <md-list-item v-if="!hasChildren" :to="resolvePath(item.path)" exact>
      <md-icon v-if="item.meta.icon">{{ item.meta.icon }}</md-icon>
      <span class="md-list-item-text">
        <span>{{ item.meta.title }}</span>
        <span v-if="item.meta.description">{{ item.meta.description }}</span>
      </span>
    </md-list-item>

    <!-- 多级菜单项 -->
    <template v-else>
      <md-list-item @click="expanded = !expanded">
        <md-icon v-if="item.meta.icon">{{ item.meta.icon }}</md-icon>
        <span class="md-list-item-text">{{ item.meta.title }}</span>
        <md-icon class="expand-icon" :class="{ 'rotate': expanded }">
          keyboard_arrow_down
        </md-icon>
      </md-list-item>

      <transition name="slide">
        <div v-show="expanded" class="submenu">
          <sidebar-item v-for="child in item.children" :key="child.path" :item="child"
            :base-path="resolvePath(child.path)" />
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    // 检查是否有子菜单
    hasChildren() {
      return this.item.children && this.item.children.length > 0
    }
  },
  methods: {
    // 解析完整路径
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss" scoped>
.submenu {
  padding-left: 56px;
  background-color: rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.expand-icon {
  transition: transform 0.3s ease;
  margin-left: auto;

  &.rotate {
    transform: rotate(180deg);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.slide-enter,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.md-list-item {
  border-left: 4px solid transparent;
  transition: border-color 0.3s;

  &.md-active {
    border-left-color: var(--md-theme-default-primary);
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>