/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-02 10:13:43
 */
import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>首页</Text>
      <Button
        title="测试1页面"
        onPress={() =>
          router.push({
            pathname: '/home/test1',
            params: {
              name: 'test1'
            }
          })
        }
      ></Button>
      <Button
        title="测试2页面"
        onPress={() =>
          router.push({
            pathname: '/home/test2',
            params: {
              name: 'test2'
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
