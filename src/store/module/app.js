import routers from '@/router/routers'
import {getMenuByRouter,getBreadCrumbList} from '@/libs/app'
export default {
  namespaced: true,
  state: {
    access: [],   // 用户权限    
    breadCrumbList:[] // 面包屑  
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers,state.access) // 菜单列表
  },
  mutations: {
    setAccess (state, access) {
      state.access = access
    },
    setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
  },
  actions: {

  }
}
