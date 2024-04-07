import { Stack, router, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function () {
  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState.key) return
    // TODO: 登录鉴权
    router.replace('/tabs/home')
  }, [navigationState.key])

  return (
    <View>
      <Text>加载中</Text>
      <Stack.Screen options={{ headerShown: false }} />
    </View>
  )
}
