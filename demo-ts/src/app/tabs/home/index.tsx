/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 13:46:56
 */
import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useToast } from 'native-base'
import { Storage } from '@u/storage'
import { SystemApi } from '@a/system'

export default function Home() {
  const toast = useToast()
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
      <Button
        title="登录"
        onPress={() => {
          SystemApi.login({
            username: 'sysadmin',
            password: '123456',
            verifycode: '',
            mode: 'LOCAL'
          }).then(res => {
            console.log(res)
          })
        }}
      ></Button>
      <Button
        title="提示"
        onPress={() => {
          toast.show({
            title: '你好啊',
            placement: 'top'
          })
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
