import routers from '@/router/routers'
import {getMenuByRouter} from '@/libs/app'
export default {
  namespaced: true,
  state: {
    access: [],   // 用户权限      
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers,state.access) // 菜单列表
  },
  mutations: {
    setAccess (state, access) {
      state.access = access
    },
  },
  actions: {

  }
}
