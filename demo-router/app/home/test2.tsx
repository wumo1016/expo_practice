/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 10:06:30
 */
import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import CommonLayout from '@/components/common-layout'

export default function () {
  const params = useLocalSearchParams()
  console.log(123, params)
  return (
    <CommonLayout title="测试2">{() => <Text>测试页面</Text>}</CommonLayout>
  )
}
