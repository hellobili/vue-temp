import Vue from 'vue'
import Vuex from 'vuex'
import camelCase from 'lodash/camelCase'

Vue.use(Vuex)

/**
 * 自动引入 modules 下模块文件。
 * 统一放在modules下第一层目录，子目录不引入。
 * 统一使用export default 导出，可省略 namespaded:true。
 * 模块名使用文件名的驼峰格式
 *
 * */
const modules = {}
const files = require.context('./modules', false, /\.js$/)

files.keys().forEach(file => {
  const fileName = camelCase(file.replace(/(\.\/|\.js)/g, ''))
  const moduleConfig = files(file).default

  modules[fileName] = {
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
