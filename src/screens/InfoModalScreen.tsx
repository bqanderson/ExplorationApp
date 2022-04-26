import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Switch } from 'react-native'

import { Text, View } from '../components'
import { Sizing, Typography, Outlines, Colors } from '../styles'
import { useTheme } from '../themes'

const InfoModalScreen = () => {
  const { mode, setMode } = useTheme()
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Color Settings</Text>
        <Text style={style.subheader}>
          Choose if you want a 'Dark' or 'Light' color theme
        </Text>
      </View>
      <View>
        <Switch
          value={mode === 'dark'}
          onValueChange={(value: boolean) => {
            setMode(value ? 'dark' : 'light')
          }}
        />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    paddingVertical: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.thin,
  },
  header: {
    ...Typography.header.x60,
    letterSpacing: 6,
    textAlign: 'center',
  },
  subheader: {
    ...Typography.subheader.x20,
    textAlign: 'center',
  },
})

export default InfoModalScreen
