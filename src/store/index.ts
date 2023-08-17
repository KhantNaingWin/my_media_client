import { createStore } from 'vuex'

export default createStore({
  state: {
    userData : {},
    token: ''
  },
  getters: {
    storeToken : state => state.token,
    storeUserData : state => state.userData
  },
  mutations: {
  },
  actions: {
    setToken : ({state},value) => state.token = value,
    getUserData: ({state},value) => state.userData = value
  },
  modules: {
  }
})
