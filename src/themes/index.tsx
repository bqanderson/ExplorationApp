import React, { createContext, useContext, useEffect, useState } from 'react'
import { Appearance, AppearanceProvider } from 'react-native-appearance'

const defaultMode = Appearance.getColorScheme()

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode: 'light' | 'dark' | 'no-preference') => mode,
})

export const useTheme = () => useContext(ThemeContext)

type Props = {
  children: JSX.Element
}

const ManageThemeProvider = ({ children }: Props) => {
  const [themeState, SetThemeState] = useState(defaultMode)
  const setMode = (mode: 'light' | 'dark' | 'no-preference') =>
    SetThemeState(mode)

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) =>
      SetThemeState(colorScheme),
    )
    return () => subscription.remove()
  }, [])

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeManager = ({ children }: Props) => (
  <AppearanceProvider>
    <ManageThemeProvider>{children}</ManageThemeProvider>
  </AppearanceProvider>
)

export default ThemeManager
