<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'RkPagination'
}
</script>
<!-- 业务代码 -->
<script lang="ts" setup>
import { ref } from "vue";
import type { ComponentSize } from 'element-plus';
import { defineProps, reactive } from "vue";
const { currentPage, pageSize, total } = defineProps(['currentPage', 'pageSize', 'total'])
const size = ref<ComponentSize>('default');
// 页码信息
const pageInfo = reactive({
    page: currentPage,
    pageSize: pageSize,
});

// 声明事件
const emit = defineEmits(['change-page', 'change-page-size']);
// 数量变化
const handleSizeChange = (val: number) => {
    emit('change-page-size', val)
};
// 页数变化
const handleCurrentChange = (val: number) => {
    emit('change-page', val)

};
</script>
<template>
  <el-pagination
    v-model:current-page="pageInfo.page"
    v-model:page-size="pageInfo.pageSize"
    :size="size"
    layout="total, sizes, prev, pager, next"
    :page-sizes="[25, 50, 100, 300, 500]"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<style lang="scss" scoped></style>
