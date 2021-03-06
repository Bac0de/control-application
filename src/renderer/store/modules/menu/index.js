import * as types from '../../mutation-types'
import login from './login'
import dashboard from './dashboard'
import network from './network'
import images from './images'
import events from './events'

const state = {
  items: [
    login,
    dashboard,
    network,
    images,
    events
  ]
}

const mutations = {
  [types.TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    let menuItem = payload.menuItem
    let expand = payload.expand
    if (menuItem.children && menuItem.meta) {
      menuItem.meta.expanded = expand
    }
  }
}

const actions = {
  toggleExpandMenuItem ({commit}, payload) {
    commit(types.TOGGLE_EXPAND_MENU_ITEM, payload)
  }
}

export default {
  state,
  mutations,
  actions
}
