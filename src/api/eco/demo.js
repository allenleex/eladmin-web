import request from '@/utils/request'

// 测试方法
export function test() {
  return request({
    url: 'api/eco/test', // 'api/eco/test',
    method: 'get'
  })
}

export default { test }
