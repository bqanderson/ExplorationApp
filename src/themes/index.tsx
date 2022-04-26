import React, { createContext, useContext, useEffect, useState } from 'react'
import { Appearance, AppearanceProvider } from 'react-native-appearance'

const defaultMode = Appearance.getColorScheme()

type ThemeContextType = {
  mode: 'light' | 'dark' | 'no-preference' | undefined
  setMode: (mode: 'light' | 'dark' | 'no-preference' | undefined) => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: defaultMode,
  setMode: (mode: 'light' | 'dark' | 'no-preference' | undefined) => mode,
})

export const useTheme = () => useContext(ThemeContext)

type Props = {
  children: JSX.Element
}

const ManageThemeProvider = ({ children }: Props) => {
  const [themeState, SetThemeState] = useState<
    'light' | 'dark' | 'no-preference' | undefined
  >(defaultMode)
  const setMode = (mode: 'light' | 'dark' | 'no-preference' | undefined) =>
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
