/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 17:15:33
 */
import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import CommonLayout from '@c/common-layout'

export default function () {
  const params = useLocalSearchParams()
  console.log(123, params)
  return (
    <CommonLayout title="测试2">
      <Text>测试2页面</Text>
    </CommonLayout>
  )
}
