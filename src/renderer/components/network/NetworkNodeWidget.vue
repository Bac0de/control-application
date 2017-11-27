<template>
  <div class="row network-node-widget">
    <div class="col-md-2 col-xl-2">
      <a class="i-network-node-active" @click="showModal()"></a>
      <p>{{node.address}}</p>
    </div>

    <batu-modal :show.sync="show" ref="modal">
      <div slot="title">Modal Test</div>
      <a class="i-network-node-vm-active" slot="vm">
      </a>
    </batu-modal>
  </div>
</template>

<script>
  import BatuModal from '../batu-components/batu-modal/BatuModal'
  // import host from 'conf/host_config'

  export default {
    name: 'network-node-widget',
    props: {
      node: {}
    },
    components: {
      BatuModal
    },
    data () {
      return {
        vms: [],
        show: true
      }
    },
    methods: {
      showModal () {
        this.$refs.modal.open()
      },

      getVMs () {
        const baseURI = 'http://127.0.0.1:10000'
        this.$http.get(`${baseURI}/common/vm/list`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest, XDomainRequest',
            'Content-Type': 'application/multipart/form-data; charset=UTF-8'
          }
          /*
          proxy: {
            host: host['master'],
            port: 10000
          }
          */
        })
          .then((res) => {
            this.vms = res.data.members
            console.log(this.nodes)
          })
          .catch((err) => {
            if (err.response) {
              console.log(err.response.headers)
            } else if (err.request) {
              console.log(err.request)
            } else {
              console.log(err.message)
            }
            console.log(err.config)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/_variables.scss";

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
