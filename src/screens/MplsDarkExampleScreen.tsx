import React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'
import { ColorBox } from '../components'
import { MPLS_DARK_COLORS } from '../constants'

import { Sizing, Typography, Outlines, Colors } from '../styles'

const MplsDarkExampleScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.header}>MPLS Dark Pro</Text>
        <Text style={style.subheader}>
          Accent colors of the 'MPLS Dark Pro' theme.
        </Text>
      </View>
      <SectionList
        style={style.colorBoxContainer}
        sections={MPLS_DARK_COLORS}
        keyExtractor={(item, index) => `${item.hexCode}_0${index}`}
        renderItem={({ item }) => (
          <ColorBox
            color={item.hexCode}
            label={item.colorName}
            labelColor={item.labelColor}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View style={style.sectionHeaderContainer}>
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
    backgroundColor: Colors.neutral.black,
  },
  headerContainer: {
    paddingBottom: Sizing.x10,
    backgroundColor: Colors.neutral.black,
    borderBottomWidth: Outlines.borderWidth.thin,
    borderColor: Colors.neutral.s500,
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
  colorBoxContainer: {
    flex: 1,
    padding: Sizing.x10,
    paddingTop: 0,
    backgroundColor: Colors.neutral.black,
  },
  sectionHeaderContainer: {
    paddingVertical: Sizing.x10,
    backgroundColor: Colors.neutral.black,
  },
  sectionHeader: {
    ...Typography.subheader.x30,
    textTransform: 'uppercase',
  },
  divider: {
    marginTop: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.hairline,
    borderColor: Colors.neutral.s400,
  },
})

export default MplsDarkExampleScreen
