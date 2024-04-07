/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 14:05:44
 */
import { StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Icon from '@c/icon'
import { tabList } from '@u'

// tab样式
const tabStyle = {
  color: '#000',
  activeColor: 'blue'
}

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor="#fff"></StatusBar>
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
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
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
