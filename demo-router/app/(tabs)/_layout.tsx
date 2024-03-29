/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 22:02:34
 */
import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import Icon from '@/components/icon'
import { tabList } from './util'

// tab样式
const tabStyle = {
  color: '#000',
  activeColor: 'blue'
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        const activeTab = tabList.find(tab => tab.name === route.name)!
        return {
          header: () => {
            return <Text style={styles.header}>{activeTab.label}</Text>
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name={activeTab.icon}
              size={20}
              color={focused ? tabStyle.activeColor : tabStyle.color}
            ></Icon>
          ),
          tabBarActiveTintColor: tabStyle.activeColor,
          tabBarStyle: {
            color: tabStyle.color,
            height: 46,
            paddingBottom: 6,
            paddingTop: 6,
            borderTopColor: 'gray'
          }
        }
      }}
    >
      {tabList.map(tab => (
        <Tabs.Screen key={tab.name} name={tab.name}></Tabs.Screen>
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
