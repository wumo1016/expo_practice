/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 14:24:23
 */
import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { YbLayout } from '@c'

export default function () {
  const params = useLocalSearchParams()
  console.log(123, params)
  return (
    <YbLayout title="测试1">
      <Text>测试1页面</Text>
    </YbLayout>
  )
}
