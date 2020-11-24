import Mock from 'mockjs'

const data = Mock.mock({
  id: '@id',
  name: '@name'
})

export default Mock.mock(/\/user\/info/, 'get', () => {
  return {
    code: '200',
    data
  }
})
