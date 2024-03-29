/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 17:03:48
 */
import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"></Tabs.Screen>
      <Tabs.Screen name="mine"></Tabs.Screen>
    </Tabs>
  )
}

const styles = StyleSheet.create({})
