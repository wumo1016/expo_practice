/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 11:52:50
 */
import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 50 }}>我的</Text>
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
