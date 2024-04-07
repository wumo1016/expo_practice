/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 11:51:40
 */
import { router, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'

export default function AppLayout() {
  const navigationState = useRootNavigationState()
  useEffect(() => {
    if (!navigationState?.key) return
    // TODO: 登录鉴权
    router.replace('/tabs/home')
  }, [navigationState.key])
}
