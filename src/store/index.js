import Vue from 'vue'
import Vuex from 'vuex'
import camelCase from 'lodash/camelCase'

Vue.use(Vuex)

const modules = {}
const requireModule = require.context('./modules', false, /\.js$/)

requireModule.keys().forEach(fileName => {
  const modulesName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
  const moduleConfig = requireModule[fileName].default

  modules[modulesName] = {
    namespaced: true,
    ...moduleConfig
  }
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...modules
  }
})
