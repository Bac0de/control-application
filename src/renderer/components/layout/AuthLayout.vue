<template>
  <div class="auth-layout">
    <div class="nav hidden-lg-up">
      <router-link class="i-batu" :to="{path: '/'}">
      </router-link>
      <div class="main row">
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