<template>
  <div class="md-container">
    <div class="md-content">
      <md-button class="md-raised md-primary" @click="handleClick">Primary</md-button>
      <br/>
      <span>{{ responseText }}</span>
    </div>
  </div>
</template>

<script>
import { test } from '@/api/eco/demo'

export default {
  name: 'EcoDemo',
  components: {},
  data() {
    return {
      responseText: ''
    }
  },
  methods: {
    handleClick() {
      console.log('==> handleClick')
      test().then(data => {
        console.log('==> api/eco/test')
        this.responseText = data
        console.log(data)
      })
    }
  }
}
</script>
