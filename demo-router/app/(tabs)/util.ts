/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 17:15:32
 */

export interface ITabItem {
  name: string
  label: string
  icon: string
}

/**
 * @Author: wyb
 * @Descripttion: tab列表
 */
export const tabList: ITabItem[] = [
  {
    name: 'index',
    label: '首页',
    icon: ''
  },
  {
    name: 'mine',
    label: '我的',
    icon: ''
  }
]
