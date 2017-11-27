// import Alert from './batu-alert/BatuAlert.vue'
// import Chart from './batu-chart/BatuChart.vue'
// import Chat from './batu-chat/BatuChat.vue'
// import DataTable from './batu-datatable/BatuDataTable.vue'
// import Feed from './batu-feed/BatuFeed.vue'
import Modal from './batu-modal/BatuModal.vue'
// import MultiSelect from './batu-multi-select/BatuMultiSelect.vue'
// import PreLoader from './batu-preloader/BatuPreLoader.vue'
// import ProfileCard from './batu-profile-card/BatuProfileCard.vue'
// import ProgressBar from './batu-progress-bar/BatuProgressBar.vue'
import Scrollbar from './batu-scrollbar/BatuScrollbar.vue'
// import SimpleSelect from './batu-simple-select/BatuSimpleSelect.vue'
// import SocialNews from './batu-social-news/BatuSocialNews.vue'
// import Switch from './batu-switch/BatuSwitch.vue'
// import Tabs from './batu-tabs/BatuTabs.vue'
import Widget from './batu-widget/BatuWidget.vue'
// import Wizard from './batu-wizard/BatuWizard.vue'

const BatuComponentsPlugin = {
  install (Vue, options) {
    // Vue.component(Alert.name, Alert)
    // Vue.component(Chart.name, Chart)
    // Vue.component(Chat.name, Chat)
    // Vue.component(DataTable.name, DataTable)
    // Vue.component(Feed.name, Feed)
    Vue.component(Modal.name, Modal)
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
