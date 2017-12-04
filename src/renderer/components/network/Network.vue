<template>
  <div class="network">
    <network-node-widget
      v-for="node in nodes"
      v-bind:key="node.id"
      :node="node">
    </network-node-widget>
  </div>
</template>

<script>
  import NetworkNodeWidget from './NetworkNodeWidget'
  import host from 'conf/host_config'

  export default {
    name: 'network',
    components: {
      NetworkNodeWidget
    },
    data () {
      return {
        nodes: []
      }
    },
    mounted () {
      this.getNodes()
    },
    methods: {
      getNodes () {
        const baseURI = 'http://' + host['master'] + ':10000'
        // const baseURI = 'http://127.0.0.1:10000'
        this.$http.get(`${baseURI}/master/group/list`, {
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
            this.nodes = res.data.members
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

<style lang="scss">
  @import "../../assets/sass/_variables.scss";

  //Selector styles
  .multiselect__option--highlight {
    background: $main-color !important;
  }
</style>