/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 14:26:16
 */
import { StyleSheet, Text, View } from 'react-native'
import { Stack, router } from 'expo-router'
import { IYbLayout } from '@dts'
import YbIcon from '../icon'

// 默认值
const defaultProps: Partial<IYbLayout> = {
  showHeader: true
}

export default function Layout(props: IYbLayout) {
  props = Object.assign({ ...defaultProps }, props)
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: props.showHeader,
          header: () => (
            <View style={styles.header}>
              <YbIcon
                name="back"
                size={18}
                onPress={() => router.back()}
              ></YbIcon>
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
