<template>
  <div class="dashboard">
    <dashboard-info-widgets></dashboard-info-widgets>
  </div>
</template>

<script>
  import BatuWidget from '../batu-components/batu-widget/BatuWidget'
  import DashboardInfoWidgets from './DashboardInfoWidgets'

  export default {
    name: 'dashboard',
    components: {
      BatuWidget,
      DashboardInfoWidgets
    }
  }
</script>

<style lang="scss">
  @import "../../assets/sass/_variables.scss";
</style>