/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-07 17:15:06
 */
import { StyleSheet, Text, View } from 'react-native'
import { Stack, router } from 'expo-router'
import Icon from '@c/icon'
import { ICommonLayout } from '@dts'

// 默认值
const defaultProps: Partial<ICommonLayout> = {
  showHeader: true
}

export default function CommonLayout(props: ICommonLayout) {
  props = Object.assign({ ...defaultProps }, props)
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: props.showHeader,
          header: () => (
            <View style={styles.header}>
              <Icon name="back" size={18} onPress={() => router.back()}></Icon>
              <Text style={styles.headerText} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          )
        }}
      />
      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  headerText: {
    lineHeight: 50,
    marginLeft: 18,
    fontSize: 20
  }
})
