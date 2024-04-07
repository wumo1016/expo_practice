/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 11:53:22
 */
import { StyleSheet, Text, View } from 'react-native'

// tab样式
const tabStyle = {
  color: '#000',
  activeColor: 'blue'
}

export default function TabLayout() {
  return (
    <View>
      <Text>首页</Text>
    </View>
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
