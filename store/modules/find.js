import Cookies from 'js-cookie'
import * as types from '../mutation-types'

const find = {
  state: {

  },
  mutations: {
    [types.SET_TOGGLE_SIDEBAR] (state, sidebarStatus) {
      state.sidebar.opened = sidebarStatus
    }
  },
  actions: {
    // 切换左侧导航栏
    ToggleSideBar ({ commit, state }) {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      commit(types.SET_TOGGLE_SIDEBAR, !state.sidebar.opened)
    }
  }
}

export default find
