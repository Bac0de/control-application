<template>
  <div class="auth-layout">
    <div class="nav hidden-lg-up"><router-link class="i-vuestic" :to="{path: '/'}"></router-link></div>
    <div class="main row">
      <div class="auth-content col-lg-12 col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="scss">
  @import "../../assets/sass/_variables.scss";
  @import '../../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import '../../../../node_modules/bootstrap/scss/variables';
  
  .auth-layout {
    height: 100%;
    margin: 0;
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
    }
    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }
    }
  }
</style>