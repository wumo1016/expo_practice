/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 10:37:47
 */
import { Storage } from '@u/storage'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
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
        title="设置缓存"
        onPress={() => Storage.set('token', 123456)}
      ></Button>
      <Button title="清除缓存" onPress={() => Storage.delete('token')}></Button>
      <Button
        title="获取缓存"
        onPress={() => {
          console.log(Storage.get('token'))
        }}
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
