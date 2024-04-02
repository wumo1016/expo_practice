/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 14:47:40
 */
import { IconType } from '@c/icon'

export interface ITabItem {
  name: string
  label: string
  icon: IconType
}

/**
 * @Author: wyb
 * @Descripttion: tab列表
 */
export const tabList: ITabItem[] = [
  {
    name: 'index',
    label: '首页',
    icon: 'tab-home'
  },
  {
    name: 'mine',
    label: '我的',
    icon: 'tab-mine'
  }
]
