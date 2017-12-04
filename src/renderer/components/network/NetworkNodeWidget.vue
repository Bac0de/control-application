<template>
  <div class="row network-node-widget">
    <div class="col-md-2 col-xl-2">
      <a class="i-network-node-active" @click="showModal()"></a>
      <p>{{node.address}}</p>
    </div>
    <batu-modal :show.sync="show" ref="modal">
      <div slot="title">{{node.address}}</div>
      <div
        class="col"
        align="center"
        v-for="vm in vms"
        :key="vm.id"
        slot="vm">
        <a class="i-network-node-vm-active"></a>
        <p>{{vm.nickname}}</p>
        <div>
          <multiselect
            :value="findOptionForItem(vm)"
            @input="updateOptionForItem(vm, $event)"
            :options="selectOptions"
            :searchable="false"
            :show-labels="false"
            label="name"
            track-by="name"
            plcaeholder="명령 선택">
          </multiselect>
          <button
            type="button"
            v-on:click="executeCMD(vm)"
          >
          </button>
        </div>
      </div>
    </batu-modal>
  </div>
</template>

<script>
  import BatuModal from '../batu-components/batu-modal/BatuModal'
  import Multiselect from 'vue-multiselect'
  import host from 'conf/host_config'

  export default {
    name: 'network-node-widget',
    props: {
      node: {}
    },
    components: {
      BatuModal,
      Multiselect
    },
    data () {
      return {
        vms: [],
        selectOptions: [
          {
            name: '종료',
            cmdID: '1'
          },
          {
            name: '재부팅',
            cmdID: '2'
          },
          {
            name: '시작',
            cmdID: '3'
          },
          {
            name: '복구',
            cmdID: '4'
          }
        ],
        cmdID: '',
        selectedVM: '',
        show: true
      }
    },
    mounted () {
      this.getVMs()
    },
    methods: {
      showModal () {
        this.$refs.modal.open()
      },

      getVMs () {
        const baseURI = 'http://' + host['master'] + ':10000'
        // const baseURI = 'http://127.0.0.1:10000'
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
            this.vms = res.data
            Object.keys(this.vms).map(
              (key) => {
                this.vms[key].cmdID = ''
              }
            )
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
      },
      findOptionForItem (vm) {
        return this.selectOptions.find(opt => opt.cmdID === vm.cmdID)
      },
      updateOptionForItem (vm, value) {
        vm.cmdID = value.cmdID
      },
      executeCMD (vm) {
        console.log(vm)
        switch(vm.cmdID) {
          case '1':
            // shut down
            break;
          case '2':
            // restart
            break;
          case '3':
            // start
            break;
          case '4':
            // restore
            this.restoreVM(vm.cmdID)
            break;
          default:
            break;
        }
      },
      restoreVM (to) {
        const baseURI = 'http://' + host['master'] + ':10000'
        // const baseURI = 'http://127.0.0.1:10000'
        this.$http.post(`${baseURI}/common/vm/restore`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest, XDomainRequest',
            'Content-Type': 'application/multipart/form-data; charset=UTF-8'
          },
          data: {
            from: "1",
            to: to
          }
        })
          .then((res) => {
            console.log(res)
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

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
