<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'RkDev'
}
</script>

<script lang="ts" setup>
import useReal from '@/hooks/useReal'
import { onMounted } from 'vue'

const { currentDevid, deviceList, setIdLoad, setCurrentDeviceId, getCurrentDeviceId } = useReal()

onMounted(() => {
  // 获取当前设备ID
  getCurrentDeviceId()
})
const changeDev = (val: number) => {
  currentDevid.value = val
}
</script>

<template>
  <div class="device_box">
    <span>{{ $t('btn.cdev') }}：</span>
    <el-select
      v-model="currentDevid"
      placeholder=""
      size="large"
      style="width: 200px; margin-right: 10px; background-color: #fff"
      @change="changeDev"
    >
      <el-option
        v-for="item in deviceList"
        :key="item.DevTmid"
        :label="item.DevName"
        :value="item.DevTmid"
      />
    </el-select>
    <el-button :loading="setIdLoad" size="large" type="warning" @click="setCurrentDeviceId">{{
      $t('btn.set')
    }}</el-button>
  </div>
</template>

<style lang="scss" scoped>
.device_box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  border-radius: 8px;
  padding-right: 20px;
  span {
    white-space: nowrap;
    margin-right: 10px;
  }
}
</style>
