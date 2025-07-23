<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'ZtAside'
}
</script>

<script lang="ts" setup>
import { useOpenStore } from '@/stores/modules/open'
const openStore = useOpenStore()

const menuList = [
  {
    id: 1,
    title: '固定资产云看版',
    path: '/home',
    icon: 'DataLine'
  },
  {
    id: 2,
    title: '基础数据',
    path: '/base',
    icon: 'PriceTag',

    children: [
      {
        id: 11,
        title: '项目工程',
        path: '/base-1'
      },
      {
        id: 11,
        title: '场地档案',
        path: '/base-2'
      },
      {
        id: 11,
        title: '供应商档案',
        path: '/base-3'
      },
      {
        id: 11,
        title: 'AP设备档案',
        path: '/base-4'
      }
    ]
  },
  {
    id: 3,
    title: '周转物资管理',
    path: '/wz',
    icon: 'PriceTag',
    children: [
      {
        id: 21,
        title: '周转物资类别',
        path: '/wz-1'
      },
      {
        id: 22,
        title: '周转物资清单',
        path: '/wz-2'
      },
      {
        id: 23,
        title: '周转物资供应商到货',
        path: '/wz-3'
      },
      {
        id: 24,
        title: '周转物资调拨',
        path: '/wz-4'
      },
      {
        id: 25,
        title: '周转物资调拨发货',
        path: '/wz-5'
      },
      {
        id: 26,
        title: '周转物资调拨在途',
        path: '/wz-6'
      },
      {
        id: 27,
        title: '周转物资调拨收货',
        path: '/wz-7'
      },
      {
        id: 28,
        title: '周转物资调拨台账',
        path: '/wz-8'
      },
      {
        id: 29,
        title: '周转物资库存台账',
        path: '/wz-9'
      },
      {
        id: 30,
        title: '电子标签实时盘点',
        path: '/wz-10'
      },
      {
        id: 30,
        title: '标签扫码查询',
        path: '/wz-11'
      },
      {
        id: 31,
        title: '周转物资智能看板',
        path: '/wz-12'
      }
    ]
  },
  {
    id: 4,
    title: '电子标签管理',
    path: '/tag',
    icon: 'PriceTag',
    children: [
      {
        id: 41,
        title: '电子标签绑定',
        path: '/tag-1'
      },
      {
        id: 42,
        title: '电子标签绑定记录',
        path: '/tag-2'
      },
      {
        id: 43,
        title: '未用电子标签清单',
        path: '/tag-3'
      },
      {
        id: 44,
        title: '标签扫码查询',
        path: '/tag-4'
      }
    ]
  }
]

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <aside>
    <div class="rk_menu">
      <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        :collapse="openStore.isCollapse"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item in menuList" :key="item.id">
          <template v-if="item && item.children">
            <el-sub-menu :index="item.path">
              <template #title>
                <el-icon> <component :is="item.icon" /></el-icon>

                <span>{{ item.title }}</span>
              </template>
              <el-menu-item v-for="sitem in item.children" :key="sitem.id" :index="sitem.path">
                <span> {{ sitem.title }} </span>
              </el-menu-item>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path">
              <el-icon> <component :is="item.icon" /></el-icon>

              <template #title>
                <span>{{ item.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  cursor: pointer;
}
.menu_item {
  display: flex;
  padding: 10px 15px;
  color: #fff;
}
.rk_menu {
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid #eee;
  &::-webkit-scrollbar {
    width: 0; /* 对于垂直滚动条 */
    height: 0; /* 对于水平滚动条 */
  }
}
.rk_menu_active {
  color: #000;
  // background-color: rgba(0, 0, 0, .3);
  background-color: #eee;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
}
</style>
