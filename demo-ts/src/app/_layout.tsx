/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-04-09 14:34:06
 */
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@s'
import { YbLoading } from '@c'

export default function AppLayout() {
  return (
    <GluestackUIProvider config={config}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <YbLoading></YbLoading>
          <SafeAreaView style={styles.safeArea}>
            <Stack>
              <Stack.Screen name="tabs" options={{ headerShown: false }} />
            </Stack>
          </SafeAreaView>
        </PersistGate>
      </ReduxProvider>
    </GluestackUIProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
