/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 20:39:45
 */
import { IconType } from '@c/icon'

export interface ITabItem {
  name: string
  label: string
  icon: IconType
}

// tab列表
export const tabList: ITabItem[] = [
  {
    name: 'home/index',
    label: '首页',
    icon: 'tab-home'
  },
  {
    name: 'mine/index',
    label: '我的',
    icon: 'tab-mine'
  }
]
