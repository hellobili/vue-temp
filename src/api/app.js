import request from '@/utils/request'

export const user = {
  getUserInfo: () => request({
    url: '/user/info'
  })
}
