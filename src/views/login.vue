<template>
  <!-- <div class="login" :style="'background-image:url(' + Background + ');'"> -->
  <div class="login">
    <md-card class="login-card">
      <md-card-header>
        <h1>后台管理系统</h1>
      </md-card-header>

      <md-card-content>
        <!-- Tab 切换组件 -->
        <md-tabs v-model="activeTab" class="login-tabs" @md-changed="handleTabChange">
          <!-- 在线登录 Tab -->
          <md-tab id="online" md-label="在线登录">
            <form class="login-form">
              <md-field>
                <label>账号</label>
                <md-input v-model="loginForm.username" required placeholder="请输入账号"></md-input>
              </md-field>

              <md-field>
                <label>密码</label>
                <md-input v-model="loginForm.password" type="password" required placeholder="请输入密码"
                  @keyup.enter.native="handleLogin"></md-input>
              </md-field>

              <div class="captcha-container">
                <md-field class="captcha-input">
                  <label>验证码</label>
                  <md-input v-model="loginForm.code" required placeholder="请输入验证码"
                    @keyup.enter.native="handleLogin"></md-input>
                  <md-icon>verified_user</md-icon>
                </md-field>

                <div class="login-code">
                  <img :src="codeUrl" alt="验证码" @click="getCode" class="captcha-img">
                </div>
              </div>

              <div class="checkbox-group">
                <md-checkbox v-model="loginForm.rememberMe">记住我</md-checkbox>
              </div>
            </form>
          </md-tab>

          <!-- 离线登录 Tab -->
          <md-tab id="offline" md-label="离线登录">
            <div class="offline-content">
              <md-icon class="offline-icon">wifi_off</md-icon>
              <h3>离线登录模式</h3>
              <p>在此模式下，您将直接访问本地静态页面，无需连接网络</p>
              <p>适合在无网络环境或测试场景下使用</p>
            </div>
          </md-tab>
        </md-tabs>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary login-button" @click="handleLogin" :disabled="loading">
          <span v-if="!loading">登录</span>
          <span v-else>登录中...</span>
        </md-button>
      </md-card-actions>
    </md-card>

    <!-- 底部信息 -->
    <div v-if="$store.state.settings.showFooter" id="el-login-footer">
      <span v-html="$store.state.settings.footerTxt" />
      <span v-if="$store.state.settings.caseNumber"> ⋅ </span>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">{{ $store.state.settings.caseNumber }}</a>
    </div>
  </div>
</template>

<script>
import { encrypt } from '@/utils/rsaEncrypt'
import Config from '@/settings'
import { getCodeImg } from '@/api/login'
import Cookies from 'js-cookie'
import qs from 'qs'
import Background from '@/assets/images/background.jpg'

export default {
  name: 'Login',
  data() {
    return {
      Background: Background,
      activeTab: 'online', // 默认激活在线登录Tab
      codeUrl: '',
      cookiePass: '',
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const data = route.query
        if (data && data.redirect) {
          this.redirect = data.redirect
          delete data.redirect
          if (JSON.stringify(data) !== '{}') {
            this.redirect = this.redirect + '&' + qs.stringify(data, { indices: false })
          }
        }
      },
      immediate: true
    }
  },
  created() {
    // 初始化时获取验证码
    this.getCode()
    this.getCookie()
    this.point()
  },
  methods: {
    // 获取验证码
    getCode() {
      getCodeImg().then(res => {
        this.codeUrl = res.img
        this.loginForm.uuid = res.uuid
      }).catch(() => {
        // 失败时显示占位符
        this.codeUrl = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40"><rect width="100" height="40" fill="%23f5f5f5"/><text x="50" y="20" font-family="Arial" font-size="12" fill="%23999" text-anchor="middle">验证码加载失败</text></svg>'
      })
    },

    // Tab切换处理
    handleTabChange(tabId) {
      if (tabId === 'online') {
        // 切换到在线登录时刷新验证码
        this.getCode()
      }
    },

    getCookie() {
      const username = Cookies.get('username')
      let password = Cookies.get('password')
      const rememberMe = Cookies.get('rememberMe')

      this.cookiePass = password === undefined ? '' : password
      password = password === undefined ? this.loginForm.password : password

      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
        code: ''
      }
    },
    handleLogin() {
      // 根据当前激活的Tab执行不同逻辑
      if (this.activeTab === 'offline') {
        // 离线登录逻辑
        this.$router.push('/offline/index')
        return
      }

      // 在线登录逻辑
      if (!this.loginForm.username) {
        this.$toast.error('用户名不能为空')
        return
      }

      if (!this.loginForm.password) {
        this.$toast.error('密码不能为空')
        return
      }

      if (!this.loginForm.code) {
        this.$toast.error('验证码不能为空')
        return
      }

      const user = {
        username: this.loginForm.username,
        password: this.loginForm.password,
        rememberMe: this.loginForm.rememberMe,
        code: this.loginForm.code,
        uuid: this.loginForm.uuid
      }

      if (user.password !== this.cookiePass) {
        user.password = encrypt(user.password)
      }

      this.loading = true

      if (user.rememberMe) {
        Cookies.set('username', user.username, { expires: Config.passCookieExpires })
        Cookies.set('password', user.password, { expires: Config.passCookieExpires })
        Cookies.set('rememberMe', user.rememberMe, { expires: Config.passCookieExpires })
      } else {
        Cookies.remove('username')
        Cookies.remove('password')
        Cookies.remove('rememberMe')
      }

      this.$store.dispatch('Login', user).then(() => {
        this.loading = false
        this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
        this.loading = false
        this.getCode() // 登录失败时刷新验证码
      })
    },
    point() {
      const point = Cookies.get('point') !== undefined
      if (point) {
        this.$toast({
          message: '当前登录状态已过期，请重新登录！',
          position: 'top',
          type: 'warning',
          duration: 5000
        })
        Cookies.remove('point')
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  background: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 20px;

  .login-card {
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    .md-card-header {
      // background: linear-gradient(45deg, #FFA113, #BF127D);
      padding: 12px 8px;
      text-align: center;

      .md-title {
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }

    .md-card-content {
      padding: 0;
    }
  }

  .login-tabs {
    padding: 20px;

    .md-tab {
      height: 300px;
      max-height: 300px;
      padding: 15px 0px;
    }

    .login-form {
      .md-field {
        margin-bottom: 20px;

        label {
          color: #555;
        }

        .md-icon {
          color: #2196F3;
        }
      }

      .captcha-container {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;

        .captcha-input {
          flex: 1;
        }

        .login-code {
          height: 56px;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: none;

          .captcha-img {
            height: 100%;
            padding: 10px 10px;
            cursor: pointer;
            transition: transform 0.3s;
            background-color: transparent;

            &:hover {
              transform: scale(1.05);
            }
          }
        }
      }

      .checkbox-group {
        margin-bottom: 0px;

        .md-checkbox {
          margin: 0;
        }
      }
    }

    .offline-content {
      text-align: center;
      padding: 20px 0;

      .offline-icon {
        font-size: 128px !important;
        color: #888888;
        margin: 50px 0;
      }

      h3 {
        font-size: 20px;
        margin-bottom: 15px;
        color: #333;
      }

      p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 10px;
      }
    }
  }

  .login-button {
    width: 100%;
    // background: linear-gradient(45deg, #FFA113, #BF127D)
  }

  #el-login-footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;

    a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>