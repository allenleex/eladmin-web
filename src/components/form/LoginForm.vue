<!-- 组件命名 -->
<script lang="ts">
export default {
  name: 'LoginForm'
}
</script>

<script lang="ts" setup>
/* 业务代码 */
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import i18n from '@/il8n/index'
const router = useRouter()
const formRef = ref<FormInstance>()
const btnLoad = ref(false)
const { t } = i18n.global
const loginForm = reactive<{
  userName: string
  passWord: string
}>({
  userName: '',
  passWord: ''
})
// 登录验证
const submitForm = (formEl: FormInstance | undefined) => {
  btnLoad.value = true
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      if (loginForm.userName === 'admin' && loginForm.passWord == 'admin123') {
        localStorage.setItem('userInfo', '1')
        router.replace('home')
        btnLoad.value = false
      } else {
        btnLoad.value = false
        ElMessage({
          message: '用户名或密码错误',
          type: 'error'
        })
      }
    } else {
      btnLoad.value = false
      console.log('error submit!')
    }
  })
}
// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-form ref="formRef" style="max-width: 600px" :model="loginForm">
    <el-form-item
      prop="userName"
      :rules="[
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }
      ]"
    >
      <div class="form_item">
        <span class="form_label">用户名：</span>
        <el-input v-model="loginForm.userName" class="login_input" :prefix-icon="User" />
      </div>
    </el-form-item>
    <el-form-item
      prop="passWord"
      :rules="[
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }
      ]"
    >
      <div class="form_item">
        <span class="form_label">密码：</span>
        <el-input
          v-model="loginForm.passWord"
          class="login_input"
          :prefix-icon="Lock"
          type="password"
          show-password
        />
      </div>
    </el-form-item>

    <el-form-item>
      <el-button :loading="btnLoad" size="large" type="primary" @click="submitForm(formRef)">{{
        '登录'
      }}</el-button>
      <el-button size="large" @click="resetForm(formRef)">{{ '重置' }}</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.form_item {
  display: flex;
  flex-direction: column;

  .form_label {
    font-size: 16px;
  }

  .login_input {
    min-width: 320px;
    height: 38px;
  }
}
</style>
