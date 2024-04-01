/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-01 14:49:43
 */
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function () {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <View>
              <Text>123456</Text>
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
