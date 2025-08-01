<template>
  <md-list :md-expand-single="true">
    <md-list-item md-expand>
      <md-icon>whatshot</md-icon>
      <span class="md-list-item-text">一级链接</span>
      <md-list slot="md-expand">
        <md-list-item class="md-inset">World</md-list-item>
        <md-list-item class="md-inset">Europe</md-list-item>
        <md-list-item class="md-inset">South America</md-list-item>
      </md-list>
    </md-list-item>
    <md-list-item md-expand>
      <md-icon>videogame_asset</md-icon>
      <span class="md-list-item-text">一级链接</span>
      <md-list slot="md-expand">
        <md-list-item class="md-inset">Console</md-list-item>
        <md-list-item class="md-inset">PC</md-list-item>
        <md-list-item class="md-inset">Phone</md-list-item>
      </md-list>
    </md-list-item>
    <md-list-item md-expand>
      <md-icon>video_library</md-icon>
      <span class="md-list-item-text">一级链接</span>
      <md-list slot="md-expand">
        <md-list-item class="md-inset">Humor</md-list-item>
        <md-list-item class="md-inset">Music</md-list-item>
        <md-list-item class="md-inset">Movies</md-list-item>
        <md-list-item class="md-inset">TV Shows</md-list-item>
      </md-list>
    </md-list-item>
    <md-list-item>
      <md-icon>shopping_basket</md-icon>
      <span class="md-list-item-text">一级链接</span>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  name: 'MaterialMenu',
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
  .md-icon {
    margin: 0 1rem 0 0 !important;
  }

  .md-button {
    width: 100%;
    text-align: left;
  }

  .md-button .md-ripple {
    align-items: left;
  }
</style>
