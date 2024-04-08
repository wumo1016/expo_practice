/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 13:59:15
 */
import { router } from 'expo-router'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function TabLayout() {
  const [value, onChangeText] = useState('Useless Placeholder')
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
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
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
