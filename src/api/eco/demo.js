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

// 指定bid/mid/start_date/end_date，每小时的用电量
export function energy_hourly(params) {
  console.log('api function energy_hourly():', params)
  return request({
    url: 'api/eco/energy/hourly',
    method: 'get',
    params: params // 关键：GET 请求使用 params 传递
  })
}

// 指定bid/mid/date，当天天的电流变化
export function ammeter_daily(params) {
  console.log('api function ammeter_daily():', params)
  return request({
    url: 'api/eco/ammeter/daily',
    method: 'get',
    params: params // 关键：GET 请求使用 params 传递
  })
}

export default { test, energy_daily, energy_hourly, ammeter_daily }
