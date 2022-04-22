import React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'

import { useColorScheme } from '../hooks'
import { ColorBox } from '../components'
import { SOLARIZED_COLORS } from '../constants'
import { DarkTheme, LightTheme } from '../constants'
import { Sizing, Typography, Outlines, Colors } from '../styles'


const SolarizedExampleScreen: React.ReactNode = () => {
  const colorScheme = useColorScheme()
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Solarized</Text>
        <Text style={style.subheader}>
          Colors Palette of the 'Solaized' theme.
        </Text>
      </View>
      <SectionList
        style={style.colorBoxContainer}
        sections={SOLARIZED_COLORS}
        keyExtractor={(item, index) => `${item.hexCode}_0${index}`}
        renderItem={({ item }) => (
          <ColorBox
            color={item.hexCode}
            label={item.colorName}
            labelColor={item.labelColor}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View style={{ ...style.sectionHeaderContainer, backgroundColor: colorScheme === 'dark' ? DarkTheme.colors.background : LightTheme.colors.background }}>
            <Text style={style.sectionHeader}>{section.title}</Text>
          </View>
        )}
        renderSectionFooter={() => <View style={style.divider} />}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Sizing.x10,
    paddingHorizontal: Sizing.x20,
  },
  headerContainer: {
    paddingBottom: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.solarized.base1,
  },
  header: {
    ...Typography.header.x60,
    color: Colors.solarized.yellow,
    letterSpacing: 6,
    textAlign: 'center',
  },
  subheader: {
    ...Typography.subheader.x20,
    textAlign: 'center',
  },
  colorBoxContainer: {
    flex: 1,
    padding: Sizing.x10,
    paddingTop: 0,
  },
  sectionHeaderContainer: {
    paddingVertical: Sizing.x10,
    backgroundColor: Colors.solarized.base03,
  },
  sectionHeader: {
    ...Typography.subheader.x30,
    color: Colors.solarized.base01,
    textTransform: 'uppercase',
  },
  divider: {
    marginTop: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.hairline,
    borderColor: Colors.solarized.base2,
  },
})

export default SolarizedExampleScreen