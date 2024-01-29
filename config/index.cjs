/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2017b5aa2016a414',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c127a0067d4a2f33af5eed54bfaca89c',


  PROVINCE: '宁夏',
  CITY: '银川',

  /**
 * 获取天气icon
 * @param {*} weather
 * @returns
 */
export const getWeatherIcon = (weather) => {
  let weatherIcon = '🌈'
  const weatherIconList = ['☀️', '☁️', '⛅️',
    '☃️', '⛈️', '🏜️', '🏜️', '🌫️', '🌫️', '🌪️', '🌧️']
  const weatherType = ['晴', '阴', '云', '雪', '雷', '沙', '尘', '雾', '霾', '风', '雨']

  weatherType.forEach((item, index) => {
    if (weather.indexOf(item) !== -1) {
      weatherIcon = weatherIconList[index]
    }
  })

  return weatherIcon
}

/**
 * 获取天气情况
 * @param {*} province 省份
 * @param {*} city 城市
 */
export const getWeather = async (province, city) => {
  if (config.SWITCH && config.SWITCH.weather === false) {
    return {}
  }

 const result = {
      // 湿度
      shidu: commonInfo.shidu,
      // PM2.5
      pm25: commonInfo.pm25,
      // PM1.0
      pm10: commonInfo.pm10,
      // 空气质量
      quality: commonInfo.quality,
      // 预防感冒提醒
      ganmao: commonInfo.ganmao,
      // 日出时间
      sunrise: info.sunrise,
      // 日落时间
      sunset: info.sunset,
      // 空气质量指数
      aqi: info.aqi,
      // 天气情况
      weather: info.type,
      // 最高温度
      maxTemperature: info.high.replace(/^高温\s*/, ''),
      // 最低温度
      minTemperature: info.low.replace(/^低温\s*/, ''),
      // 风向
      windDirection: info.fx,
      // 风力等级
      windScale: info.fl,
      // 温馨提示
      notice: info.notice,
    }

    RUN_TIME_STORAGE[`${province}_${city}`] = cloneDeep(result)

    return result
  }
  console.error('天气情况获取失败', res)
  return {}
}


  
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝媳妇儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oo7wX6S-aXuN7X3Go0pVqJCDDbMg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'BIdcZBHNGV6ytQVIOWdr1ITy-_3KP4ts_6OI-2ZZwh8',
      // 所在省份或城市，也可以不填
      province: '宁夏',
      // 所在城市或县区
      city: '银川',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-11',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝媳妇儿', year: '2000', date: '10-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝媳妇儿', year: '2000', date: '11-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '03-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'rNKJf-pntqVwHkaJ6oF7czGfFyIS7SCgE_vyixh6KVE',

  CALLBACK_USERS: [
    {
      name: '马龙',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oo7wX6fgQ1hFrmsae8kjqY47Wmxs',
    }
  ],

}

module.exports = USER_CONFIG

