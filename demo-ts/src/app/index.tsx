/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 20:43:17
 */
import { getToken } from '@u/store'
import { Stack, router, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function () {
  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState.key) return
    // TODO: 登录鉴权
    console.log('token', getToken())

    router.replace('/tabs/home')
  }, [navigationState.key])

  return (
    <View>
      <Text>加载中</Text>
      <Stack.Screen options={{ headerShown: false }} />
    </View>
  )
}
