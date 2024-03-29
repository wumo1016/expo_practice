/*
 * @Description: 公共 icon 组件
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 21:47:09
 */
import { createIconSet } from '@expo/vector-icons'
import iconJson from '@/assets/icon/iconfont.json'

export default createIconSet(
  iconJson,
  'iconfont',
  require('@/assets/icon/iconfont.ttf')
)

export type IconType = keyof typeof iconJson
