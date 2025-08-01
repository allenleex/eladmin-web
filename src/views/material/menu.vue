<template>
  <md-list>
      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Inbox</span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
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
