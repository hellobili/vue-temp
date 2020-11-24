import Mock from 'mockjs'

const data = Mock.mock({
  id: '@id',
  name: '@name'
})

export default [
  {
    url: '/user/info',
    method: 'get',
    response: config => {
      return {
        code: '200',
        data
      }
    }
  }
]
