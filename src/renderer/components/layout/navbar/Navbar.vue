<template>
  <nav class="navbar app-navbar navbar-toggleable-md">
    <div class="navbar-brand-container d-flex align-items-center justify-content-start">
      <a class="navbar-brand" href="#">
        <i class="i-logo-text"></i>
      </a>
    </div>

    <div class="row navbar-container">

      <div class="menu-icon-container d-flex align-items-center justify-content-center justify-content-lg-start col">
        <a class="menu-icon i-menu-expanded" href="#" @click.prevent="toggleSidebar(false)" v-if="sidebarOpened"></a>
        <a class="menu-icon i-menu-collapsed" href="#" @click.prevent="toggleSidebar(true)" v-else></a>
      </div>
      <div class=""></div>

      <div class="offset-lg-9"></div>
      <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
        <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#" @click.prevent="closeMenu">
          <i class="menu-icon i-nav-alarm"></i>
        </a>
        <div class="dropdown-menu">
          <div class="dropdown-menu-content">
            <a class="dropdown-item" href="#">
              <span class="ellipsis">메시지 블라블라</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="ellipsis">메시지 블라블라</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
        <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#" @click.prevent="closeMenu">
          <i class="menu-icon i-nav-help"></i>
        </a>
        <div class="dropdown-menu">
          <div class="dropdown-menu-content">
            <a class="dropdown-item" href="#">
              <span class="ellipsis">메시지 블라블라</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="ellipsis">메시지 블라블라</span>
            </a>
            <a class="dropdown-item" href="#">
              <span class="ellipsis">메시지 블라블라</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center" v-dropdown>
        <a class="nav-link dropdown-toggle d-flex align-items-center justify-content" href="#" @click.prevent="closeMenu">
          <i class="menu-icon i-nav-account"></i>
        </a>
        <div class="dropdown-menu last">
          <div class="dropdown-menu-content">
            <div class="dropdown-item plain-link-item">
              <router-link class="plain-link" :to="{name: 'Login'}">Logout</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Dropdown from '@/directives/Dropdown'

  export default {
    name: 'navbar',
    directives: {
      dropdown: Dropdown
    },
    computed: mapGetters([
      'sidebarOpened',
      'toggleWithoutAnimation'
    ]),
    methods: {
      ...mapActions([
        'closeMenu',
        'toggleSidebar',
        'isToggleWithoutAnimation'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/sass/_variables.scss";
  @import "../../../../../node_modules/bootstrap/scss/mixins/breakpoints";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  .navbar.app-navbar {
    .navbar-container {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    height: $top-nav-height;
    padding-left: $nav-padding-left;
    padding-right: $nav-padding-right;
    background-color: $top-nav-bg;
    border-bottom: 1px solid;
    border-bottom-color: $main-color;

    .menu-icon-container {
      padding: 0;
      font-size: $font-size-base;
    }

    .navbar-brand-container {
      position: absolute;
      z-index: 3;
      height: 100%;
      left: $navbar-brand-container-left;
      top: 0;
    }

    .nav-item {
      padding: 0;
      height: 100%;
    }

    .dropdown.navbar-dropdown {
      .dropdown-toggle {
        padding: 0;
        &:after {
           display: none;
         }
      }

      &.show {
        @include media-breakpoint-up(lg) {
          .dropdown-menu {
            left: auto;
            right: 0;
          }
        }
        &:after {
           position: absolute;
           bottom: -$dropdown-show-b;
           right: calc(50% - 10px);
           width: 0;
           height: 0;
           display: block;
           content: '';
           border-left: 10px solid transparent;
           border-right: 10px solid transparent;
           border-bottom: 10px solid $darkest-gray;
         }
      }

      .dropdown-menu {
        margin-top: $dropdown-show-b;
        padding-top: 0;
        width: 100%;
      }

      .dropdown-item {
        height: $navbar-dd-item-height;
        cursor: pointer;
        font-size: $font-size-base;

        &:hover, &:active, &:focus, &.active {
          outline: none;
        }

        &.plain-link-item {
          color: $brand-primary;

          &:hover, &:active, &:focus {
            background: $dropdown-background;
          }

          .plain-link {
            text-decoration: none;
          }
        }
      }
    }

    @include media-breakpoint-down(md) {
      height: $top-mobile-nav-height;
      padding: $nav-mobile-pt $nav-mobile-padding-h $nav-mobile-pb $nav-mobile-padding-h;

      .navbar-brand-container {
        width: $nav-mobile-brand-width;
        top: $nav-mobile-brand-top;
        left: $nav-mobile-brand-left;
        height: auto;
        .navbar-brand {
          height: $font-size-smaller;
          padding: 0;
          font-size: $font-size-smaller;
        }
      }

      .dropdown.navbar-dropdown {
        &.show {
          display: flex;
          &:after {
            bottom: -$dropdown-mobile-show-b;
            z-index: 2;
          }
          .dropdown-menu {
            margin-top: $dropdown-mobile-show-b;
            left: auto;
            &.last {
              right: 0;
            }
          }
        }
      }
    }
  }
</style>