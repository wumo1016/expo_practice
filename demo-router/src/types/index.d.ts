/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 14:58:35
 */

// 公共布局组件 props
export interface ICommonLayout {
  showHeader?: boolean // 是否显示header
  title: string // 标题
  children: () => React.ReactNode // 内容区
}
