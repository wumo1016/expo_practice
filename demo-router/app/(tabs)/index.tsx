/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-01 18:17:07
 */
import { Link, router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>首页</Text>
      <Button
        title="测试12页面"
        onPress={() =>
          router.push({
            pathname: '/home/test1',
            params: {
              name: 'wyb'
            }
          })
        }
      ></Button>
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
