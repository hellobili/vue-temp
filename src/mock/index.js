import camelCase from 'lodash/camelCase'

const apis = {}
const files = require.context('./', false, /\.js$/)

files.keys().forEach(key => {
  if (key === './index.js') return
  const fileName = camelCase(key.replace(/(\.\/|\.js)/g, ''))
  const moduleConfig = files(key).default

  apis[fileName] = {
    ...moduleConfig
  }
})
console.log(apis)

export default apis
