/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-01 14:50:22
 */
import { Link } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>首页</Text>
      <Link href="/home/test1" asChild>
        <Button title="测试1页面"></Button>
      </Link>
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
