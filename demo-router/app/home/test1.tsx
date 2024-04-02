/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 09:55:59
 */
import { Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import CommonLayout from '@/components/common-layout'

export default function () {
  const params = useLocalSearchParams()
  console.log(123, params)
  return (
    <CommonLayout title="测试1页面在看陌生的风景">
      {() => <Text>456789</Text>}
    </CommonLayout>
  )
}
