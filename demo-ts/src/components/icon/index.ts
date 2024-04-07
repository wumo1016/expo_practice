/*
 * @Description: 公共 icon 组件
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 14:56:55
 */
import { createIconSet } from '@expo/vector-icons'
import iconJson from '@ats/icon/iconfont.json'

export default createIconSet(
  iconJson,
  'iconfont',
  require('@ats/icon/iconfont.ttf')
)

export type IconType = keyof typeof iconJson
