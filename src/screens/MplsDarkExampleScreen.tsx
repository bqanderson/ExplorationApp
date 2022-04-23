import React from 'react'
import { StyleSheet, SectionList } from 'react-native'

import { MPLS_DARK_COLORS } from '../constants'
import { ColorBox, Text, View } from '../components'
import { useColorScheme } from '../hooks'
import { Sizing, Typography, Outlines, Colors } from '../styles'

const MplsDarkExampleScreen = () => {
  const colorScheme = useColorScheme()

  return (
    <View
      style={{
        ...style.container,
        backgroundColor:
          colorScheme === 'light' ? Colors.neutral.white : Colors.neutral.black,
      }}
    >
      <View
        style={{
          ...style.headerContainer,
          backgroundColor:
            colorScheme === 'light'
              ? Colors.neutral.white
              : Colors.neutral.black,
        }}
      >
        <Text
          style={{
            ...style.header,
            color:
              colorScheme === 'light'
                ? Colors.primary.brand
                : Colors.secondary.brand,
          }}
        >
          MPLS Dark Pro
        </Text>
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
            border={item.border}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View
            style={{
              ...style.sectionHeaderContainer,
              backgroundColor:
                colorScheme === 'light'
                  ? Colors.neutral.white
                  : Colors.neutral.black,
            }}
          >
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
  },
  sectionHeaderContainer: {
    paddingVertical: Sizing.x10,
  },
  sectionHeader: {
    ...Typography.subheader.x30,
    textTransform: 'uppercase',
  },
  divider: {
    marginTop: Sizing.x10,
    borderBottomWidth: Outlines.borderWidth.hairline,
  },
})

export default MplsDarkExampleScreen
