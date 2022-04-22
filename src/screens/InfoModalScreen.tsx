import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'

import { Text, View } from '../components'
import { Sizing, Typography, Outlines, Colors } from '../styles'

const InfoModalScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Exploration App</Text>
        <Text style={style.subheader}>
          An native mobile app build with React Navite
        </Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    paddingBottom: Sizing.x10,
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
