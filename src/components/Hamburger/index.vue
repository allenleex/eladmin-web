<template>
  <div style="padding: 0 15px;">
    <md-button class="md-icon-button" @click="toggleClick">
      <md-icon>menu</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped></style>
