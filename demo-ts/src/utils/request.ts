/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 11:50:35
 */
import axios from 'axios'
import { IObject } from '@dts'

const request = axios.create({
  baseURL: 'http://192.168.2.205:3039',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截
request.interceptors.request.use(
  config => {
    config.headers.Authorization = ''
    return config
  },
  err => handleError(err)
)

// 响应拦截
request.interceptors.response.use(
  response => {
    // 二进制流文件
    if (response.config['responseType'] === 'blob') {
      return response
    } else {
      let { code, Code, data, Data } = response.data || {}
      code ||= Code
      data ||= Data
      if (code !== 200) {
        return handleError(response.data)
      } else {
        return data
      }
    }
  },
  err => handleError(err)
)

/**
 * @Author: wyb
 * @Descripttion: 处理错误
 * @param {IObject} err
 */
async function handleError(err: IObject) {
  // 提示报错信息
  // 过期等需要进入登录页
}

export default request
