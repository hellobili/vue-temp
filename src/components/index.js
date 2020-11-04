import Vue from 'vue'

/**
 * 注册全局组件
 * 自动引入 modules 下各组件内的 js文件
 */
const componentsContext = require.context('./modules', true, /\.js$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
