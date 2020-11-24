import { user } from '@/api/app'
const state = {
  appName: '测试app'
}

const mutations = {
  SET_APP_NAME: (state, name) => {
    state.appName = name
  }
}

const actions = {
  getUserInfo ({ state, commit }) {
    user.getUserInfo().then(res => {
      console.log('userinfo', res)
      const { name } = res.data
      commit('SET_APP_NAME', name)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
