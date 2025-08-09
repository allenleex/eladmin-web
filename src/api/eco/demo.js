import request from '@/utils/request'

// 测试方法
export function test(params) {
  console.log('api function test():', params)
  return request({
    url: 'api/eco/test',
    method: 'get',
    params: params // 关键：GET 请求使用 params 传递
  })
}

// 指定bid/mid/start_date/end_date，每天的用电量
export function energy_daily(params) {
  console.log('api function energy_daily():', params)
  return request({
    url: 'api/eco/energy/daily',
    method: 'get',
    params: params // 关键：GET 请求使用 params 传递
  })
}

export default { test, energy_daily }
