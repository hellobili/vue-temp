import Vue from 'vue'

const componentsContext = require.context('./modules', true, /\.js$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
