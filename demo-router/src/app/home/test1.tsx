/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 14:42:04
 */
import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import CommonLayout from '@c/common-layout'

export default function () {
  const params = useLocalSearchParams()
  console.log(123, params)
  return (
    <CommonLayout title="测试1">{() => <Text>测试1页面</Text>}</CommonLayout>
  )
}
