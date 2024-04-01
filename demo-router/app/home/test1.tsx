/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-01 17:28:03
 */
import { StyleSheet, Text, View } from 'react-native'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import Icon from '@/components/icon'

export default function () {
  const params = useLocalSearchParams()
  console.log(123, params)
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                overflow: 'hidden',
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              <Icon name="back" size={18} onPress={() => router.back()}></Icon>
              <Text
                style={{
                  marginLeft: 20,
                  height: 50,
                  lineHeight: 50,
                  fontSize: 20,
                  alignSelf: 'center',
                  flex: 1,
                  width: 100,
                  overflow: 'hidden'
                }}
              >
                测试1页面
              </Text>
            </View>
          )
        }}
      />
      <Text>测试1页面</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: '#fff'
  }
})
