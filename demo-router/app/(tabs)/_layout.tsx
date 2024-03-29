/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 17:15:59
 */
import { StyleSheet, Text } from 'react-native'
import { Tabs } from 'expo-router'
import { tabList } from './util'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        return {
          header: () => {
            const activeTab = tabList.find(tab => tab.name === route.name)
            return <Text style={styles.header}>{activeTab?.label}</Text>
          }
        }
      }}
    >
      {tabList.map(tab => (
        <Tabs.Screen name={tab.name}></Tabs.Screen>
      ))}
    </Tabs>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: '#fff'
  }
})
