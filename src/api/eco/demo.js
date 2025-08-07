import request from '@/utils/request'

// 测试方法
export function test(params) {
  return request({
    url: 'api/eco/test',
    method: 'get',
    params: params // 关键：GET 请求使用 params 传递
  })
}

export default { test }
