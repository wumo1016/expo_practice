/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 14:40:59
 */
import { StyleSheet, Text } from 'react-native'
import { Tabs } from 'expo-router'
import Icon from '@c/icon'
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
          tabBarStyle: {
            color: tabStyle.color,
            height: 50,
            paddingBottom: 6,
            paddingTop: 2
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.tab,
                color: focused ? tabStyle.activeColor : tabStyle.color
              }}
            >
              {activeTab.label}
            </Text>
          )
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
    height: 50,
    lineHeight: 50,
    backgroundColor: '#fff',
    fontSize: 18
  },
  tab: {
    fontSize: 12
  }
})
