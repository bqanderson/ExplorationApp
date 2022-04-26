import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pressable } from 'react-native'
import { useTheme } from '../themes'

import { DarkTheme, LightTheme } from '../constants'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { InfoModal, SoloarizedScreen, MplsDarkScreen } from '../screens'
import { RootStackParamList, RootTabParamList } from '../../types'
import LinkingConfiguration from './LinkingConfiguration'

import { Colors } from '../styles'

export default function Navigation() {
  const { mode } = useTheme()

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={mode === 'dark' ? DarkTheme : LightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen
          name="InfoModal"
          options={{ title: 'Information' }}
          component={InfoModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const { mode } = useTheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Solarized"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          shadowColor: 'transparent',
        },
        title: 'Exploration App',
        headerRight: ({ tintColor }) => (
          <Pressable
            onPress={() => navigation.navigate('InfoModal')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <FontAwesome5
              name="cog"
              size={25}
              color={tintColor}
              style={{ marginRight: 18 }}
            />
          </Pressable>
        ),
      })}
    >
      <BottomTab.Screen
        name="Solarized"
        component={SoloarizedScreen}
        options={() => ({
          title: 'Solarized',
          headerTintColor: Colors.solarized.base01,
          tabBarActiveTintColor: Colors.solarized.yellow,
          tabBarIcon: ({ color }) => <TabBarIcon name="adjust" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="MplsDark"
        options={() => ({
          title: 'MPLS Dark Pro',
          headerStyle: {
            backgroundColor:
              mode === 'light' ? Colors.neutral.s150 : Colors.neutral.s700,
          },
          tabBarStyle: {
            backgroundColor:
              mode === 'light' ? Colors.neutral.s150 : Colors.neutral.s700,
          },
          headerTintColor:
            mode === 'light' ? Colors.neutral.s700 : Colors.neutral.s400,
          tabBarActiveTintColor:
            mode === 'light' ? Colors.primary.brand : Colors.secondary.s600,
          tabBarIcon: ({ color }) => <TabBarIcon name="city" color={color} />,
        })}
        component={MplsDarkScreen}
      />
    </BottomTab.Navigator>
  )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name']
  color: string
}) {
  return <FontAwesome5 size={24} {...props} />
}
