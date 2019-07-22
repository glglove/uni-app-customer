import * as types from '../mutation-types'

const sign = {
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

      commit(types.SET_TOGGLE_SIDEBAR, !state.sidebar.opened)
    }
  }
}

export default sign
