import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet } from 'react-native'

import { Sizing, Typography, Outlines, Colors } from '../styles'

const InfoModalScreen = () => {
  return (
    <View style={style.container}>
      <Text>Information</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizing.x20,
    justifyContent: 'center',
    backgroundColor: Colors.neutral.black,
  },
  button: {
    alignItems: 'center',
    marginHorizontal: Sizing.x40,
    marginBottom: Sizing.x10,
    padding: Sizing.x10,
    borderRadius: Outlines.borderRadius.base,
  },
  mplsBtn: {
    backgroundColor: Colors.primary.brand,
  },
  mplsLabel: {
    ...Typography.subheader.x30,
    color: Colors.neutral.white,
    textTransform: 'uppercase',
  },
  solarBtn: {
    backgroundColor: Colors.solarized.yellow,
  },
  solarLabel: {
    ...Typography.subheader.x30,
    color: Colors.solarized.base2,
    textTransform: 'uppercase',
  },
})

export default InfoModalScreen
