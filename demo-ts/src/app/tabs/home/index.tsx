/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 21:52:08
 */
import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Toast, useToast } from '@gluestack-ui/themed'
import { SystemApi } from '@a/system'
import { TState, setToken } from '@src/store'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const toast = useToast()
  const token = useSelector((state: TState) => state.global.token)
  const dispatch = useDispatch()

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
        title="设置缓存"
        onPress={() => {
          dispatch(setToken(123456))
        }}
      ></Button>
      <Button
        title="清除缓存"
        onPress={() => {
          dispatch(setToken(''))
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
            placement: 'top',
            render: () => (
              <Toast testID="aaa" action="attention" variant="solid">
                <Text>测试消息</Text>
              </Toast>
            )
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
