/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-29 18:13:47
 */
import { StyleSheet, Text, View } from 'react-native'
import Icon from '@/components/icon'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>首页</Text>
      <Icon
        name="tab-home"
        size={30}
        color="red"
        style={{ marginTop: 10 }}
      ></Icon>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
