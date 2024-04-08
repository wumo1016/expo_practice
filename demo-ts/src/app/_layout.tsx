/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 13:40:46
 */
import { StyleSheet } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { NativeBaseProvider } from 'native-base'

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <NativeBaseProvider>
          <Stack>
            <Stack.Screen name="tabs" options={{ headerShown: false }} />
          </Stack>
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
