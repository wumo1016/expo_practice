/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 11:35:14
 */

import { ExpoRoot } from 'expo-router'

// 公共布局组件 props
export interface ICommonLayout {
  showHeader?: boolean // 是否显示header
  title: string // 标题
  children: React.ReactNode
}

// 未知属性对象
export interface IObject {
  [key: string]: any
}
