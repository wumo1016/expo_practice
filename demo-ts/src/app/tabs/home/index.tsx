/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 16:32:14
 */
import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SystemApi } from '@a/system'
import { TState, setToken } from '@src/store'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@s/modules/global'
import { useMessgae } from '@h'

export default function Home() {
  const token = useSelector((state: TState) => state.global.token)
  const dispatch = useDispatch()

  const message = useMessgae()

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>首页</Text>
      <Text style={{ marginBottom: 20 }}>token: {token}</Text>
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
        title="登录"
        onPress={() => {
          dispatch(setLoading(true))
          SystemApi.login({
            username: 'sysadmin',
            password: '123456',
            verifycode: '',
            mode: 'LOCAL'
          })
            .then(res => {
              dispatch(setToken(res.Token))
              message.error('登录成功')
            })
            .finally(() => {
              dispatch(setLoading(false))
            })
        }}
      ></Button>
      <Button
        title="清除缓存"
        onPress={() => {
          dispatch(setToken(''))
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
