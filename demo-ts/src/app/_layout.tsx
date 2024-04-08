/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-08 21:32:40
 */
import { StyleSheet } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@s'

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <GluestackUIProvider config={config}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Stack>
                <Stack.Screen name="tabs" options={{ headerShown: false }} />
              </Stack>
            </PersistGate>
          </Provider>
        </GluestackUIProvider>
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
