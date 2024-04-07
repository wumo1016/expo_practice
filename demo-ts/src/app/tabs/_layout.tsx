/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 11:52:38
 */
import { Tabs } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

// tab样式
const tabStyle = {
  color: '#000',
  activeColor: 'blue'
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home/index"></Tabs.Screen>
      <Tabs.Screen name="mine/index"></Tabs.Screen>
    </Tabs>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    height: 50,
    lineHeight: 50,
    backgroundColor: '#fff',
    fontSize: 18
  },
  tab: {
    fontSize: 12
  }
})
