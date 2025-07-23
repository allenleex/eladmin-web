<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'RkTable'
}
</script>

<script lang="ts" setup>
import { toRefs } from 'vue'
/* 业务代码 */
const props = defineProps(['tableData', 'tableHeader', 'tableHeaderColor', 'cellStyle', 'hcr'])
const { tableData, tableHeader, hcr } = toRefs(props)
// 声明事件
const emit = defineEmits(['current-change'])

const handleCurrentChange = (val: any) => {
  emit('current-change', val)
}
</script>

<template>
  <el-table
    :highlight-current-row="hcr"
    class="table"
    border
    :data="tableData"
    style="width: 100%; height: 100%"
    :header-cell-style="tableHeaderColor"
    :cell-style="cellStyle"
    :row-style="cellStyle"
    @current-change="handleCurrentChange"
  >
    <template v-for="item in tableHeader" :key="item.prop">
      <el-table-column
        v-if="item?.type == 'function'"
        :label="item.label"
        :prop="item.prop"
        :width="item?.width"
      >
        <template #default="scope">
          {{ (scope.row[item.prop] / 600).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column v-else :label="item.label" :prop="item.prop" :width="item?.width">
        <!-- <template #default="scope">
                    {{ scope.row[item.label] }}
                </template> -->
      </el-table-column>
    </template>
  </el-table>
</template>

<style lang="scss" scoped>
.table {
  border-radius: 10px;
  // color: rgb(217, 211, 196);
}
</style>
