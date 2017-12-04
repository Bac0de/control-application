<template>
  <transition name="modal" :duration="duration">
    <div v-show="show" class="modal-container">
      <div class="modal" @click.self="clickMask">
        <div class="modal-dialog" :class="modalClass">
          <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
              <slot name="header">
                <div class="modal-title">
                  <slot name="title"></slot>
                </div>
                <a class="modal-close" @click="cancel"></a>
              </slot>
            </div>
            <!--Container-->
            <div class="modal-body">
              <div class="row">
                <slot name="vm"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'batu-modal',
    props: {
      transition: {
        type: String,
        default: 'modal'
      },
      small: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      force: {
        type: Boolean,
        default: false
      },
      okText: {
        type: String,
        default: 'CONFIRM'
      },
      cancelText: {
        type: String,
        default: 'CANCEL'
      },
      cancelClass: {
        type: String,
        default: 'btn btn-secondary'
      }
    },
    data () {
      return {
        show: false,
        duration: 500
      }
    },
    computed: {
      modalClass () {
        return {
          'modal-lg': this.large,
          'modal-sm': this.small
        }
      }
    },
    created () {
      if (this.show) {
        document.body.className += ' modal-open'
      }
    },
    beforeDestroy () {
      document.body.className = document.body.className.replace(/\s?modal-open/, '')
    },
    watch: {
      show (value) {
        if (value) {
          document.body.className += ' modal-open'
        } else {
          window.setTimeout(() => {
            document.body.className = document.body.className.replace(/\s?modal-open/, '')
          }, this.duration)
        }
      }
    },
    methods: {
      close () {
        this.$emit('close')
        this.show = false
      },
      cancel () {
        this.$emit('cancel')
        this.show = false
      },
      clickMask () {
        if (!this.force) {
          this.cancel()
        }
      },
      open () {
        this.show = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/sass/variables";
  @import "../../../../../node_modules/bootstrap/scss/variables";

  // For Transitioning
  .modal {
    display: block;
  }

  .modal-dialog, .modal-backdrop {
    transition: all .5s ease;
  }

  .modal-enter .modal-dialog, .modal-leave-active .modal-dialog {
    opacity: 0;
    transform: translateY(-30%);
  }

  .modal-enter .modal-backdrop, .modal-leave-active .modal-backdrop {
    opacity: 0;
  }

  .modal-backdrop {
    opacity: 0.5;
  }

  //Modal styles

  .modal-header {
    height: $modal-header-height;
    padding: $modal-header-padding-y $modal-header-padding-x;
    font-size: $font-size-larger;
    color: $main-color;
    display: flex;
    align-items: center;
  }

  .modal-content {
    border-radius: $modal-content-border-radius;
  }

  .modal-dialog {
    max-width: 700px !important;
    box-shadow: $modal-content-sm-up-box-shadow;
  }
</style>
