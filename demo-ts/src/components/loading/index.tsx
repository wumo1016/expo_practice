/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 14:30:45
 */
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { TState } from '@s'

export default function Loading() {
  const loading = useSelector((state: TState) => state.global.loading)
  return (
    loading && (
      <View style={styles.container}>
        <ActivityIndicator color="#0000ff" size="large" />
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    width: '100%',
    top: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    backgroundColor: 'rgba(255, 255, 255, .6)'
  }
})
