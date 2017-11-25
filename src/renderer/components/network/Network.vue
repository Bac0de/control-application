<template>
  <div class="network">
    <network-node-widget></network-node-widget>
  </div>
</template>

<script>
  import NetworkNodeWidget from './NetworkNodeWidget'

  export default {
    name: 'network',
    components: {
      NetworkNodeWidget
    }
  }
</script>

<style lang="scss">
  @import "../../assets/sass/_variables.scss";
</style>