import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ThemeManager, { useTheme } from './src/themes'
import { useCachedResources, useColorScheme } from './src/hooks'
import Navigation from './src/navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <ThemeManager>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeManager>
    )
  }
}
