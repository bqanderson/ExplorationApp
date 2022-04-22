import React, { FunctionComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Sizing, Typography, Outlines } from '../styles'

interface ColorBoxProps {
  color: string
  label: string
  labelColor: string
}

const ColorBox: FunctionComponent<ColorBoxProps> = ({
  color,
  label,
  labelColor,
}) => {
  return (
    <View style={{ ...style.colorBoxContainer, backgroundColor: color }}>
      <Text
        style={{ ...style.colorBoxLabel, color: labelColor }}
      >{`${label}: ${color}`}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  colorBoxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Sizing.x10,
    padding: Sizing.x10,
    borderRadius: Outlines.borderRadius.small,
  },
  colorBoxLabel: {
    ...Typography.subheader.x30,
  },
})

export default ColorBox
