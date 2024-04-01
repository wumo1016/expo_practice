/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-01 14:59:06
 */
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)'
}

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar></StatusBar>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
