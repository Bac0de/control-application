// import Alert from 'src/components/batu-components/batu-alert/BatuAlert.vue'
// import Chart from 'src/components/batu-components/batu-chart/BatuChart.vue'
// import Chat from 'src/components/batu-components/batu-chat/BatuChat.vue'
// import DataTable from 'src/components/batu-components/batu-datatable/BatuDataTable.vue'
// import Feed from 'src/components/batu-components/batu-feed/BatuFeed.vue'
// import Modal from 'src/components/batu-components/batu-modal/BatuModal.vue'
// import MultiSelect from 'src/components/batu-components/batu-multi-select/BatuMultiSelect.vue'
// import PreLoader from 'src/components/batu-components/batu-preloader/BatuPreLoader.vue'
// import ProfileCard from 'src/components/batu-components/batu-profile-card/BatuProfileCard.vue'
// import ProgressBar from 'src/components/batu-components/batu-progress-bar/BatuProgressBar.vue'
import Scrollbar from './batu-scrollbar/BatuScrollbar.vue'
// import SimpleSelect from 'src/components/batu-components/batu-simple-select/BatuSimpleSelect.vue'
// import SocialNews from 'src/components/batu-components/batu-social-news/BatuSocialNews.vue'
// import Switch from 'src/components/batu-components/batu-switch/BatuSwitch.vue'
// import Tabs from 'src/components/batu-components/batu-tabs/BatuTabs.vue'
import Widget from './batu-widget/BatuWidget.vue'
// import Wizard from 'src/components/batu-components/batu-wizard/BatuWizard.vue'

const BatuComponentsPlugin = {
  install (Vue, options) {
    // Vue.component(Alert.name, Alert)
    // Vue.component(Chart.name, Chart)
    // Vue.component(Chat.name, Chat)
    // Vue.component(DataTable.name, DataTable)
    // Vue.component(Feed.name, Feed)
    // Vue.component(Modal.name, Modal)
    // Vue.component(MultiSelect.name, MultiSelect)
    // Vue.component(PreLoader.name, PreLoader)
    // Vue.component(ProfileCard.name, ProfileCard)
    // Vue.component(ProgressBar.name, ProgressBar)
    Vue.component(Scrollbar.name, Scrollbar)
    // Vue.component(SimpleSelect.name, SimpleSelect)
    // Vue.component(SocialNews.name, SocialNews)
    // Vue.component(Switch.name, Switch)
    // Vue.component(Tabs.name, Tabs)
    Vue.component(Widget.name, Widget)
    // Vue.component(Wizard.name, Wizard)
  }
}

export default BatuComponentsPlugin
