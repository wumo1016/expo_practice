/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 17:59:58
 */
import { MMKV } from 'react-native-mmkv'

const mmkv = new MMKV()

export class Storage {
  /**
   * @Author: wyb
   * @Descripttion: 获取缓存
   * @param {string} key
   */
  static get<T>(key: string): T {
    const value = mmkv.getString(key)
    return value ? JSON.parse(value) || null : null
  }
  /**
   * @Author: wyb
   * @Descripttion: 设置缓存
   * @param {string} key
   * @param {T} value
   */
  static set<T>(key: string, value: T) {
    mmkv.set(key, JSON.stringify(value))
  }
  /**
   * @Author: wyb
   * @Descripttion: 移除缓存
   * @param {string} key
   */
  static delete(key: string) {
    mmkv.delete(key)
  }
  /**
   * @Author: wyb
   * @Descripttion: 清除所有缓存
   */
  static clearAll() {
    mmkv.clearAll()
  }
}
