/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'

import { ThemeColors } from '../constants'
import useColorScheme from '../hooks/useColorScheme'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ThemeColors.light & keyof typeof ThemeColors.dark,
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return ThemeColors[theme][colorName]
  }
}

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color }, style]} {...otherProps} />
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'border',
  )

  return (
    <DefaultView
      style={[{ backgroundColor, borderColor }, style]}
      {...otherProps}
    />
  )
}
