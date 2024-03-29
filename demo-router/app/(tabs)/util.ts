/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 21:46:28
 */
import { IconType } from '@/components/icon'

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
