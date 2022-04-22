/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName, Pressable, View } from 'react-native'

import { DarkTheme, LightTheme } from '../constants'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { InfoModal, SoloarizedScreen, MplsDarkScreen } from '../screens'
import { RootStackParamList, RootTabParamList } from '../../types'
import LinkingConfiguration from './LinkingConfiguration'

import { Colors } from '../styles'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : LightTheme}
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
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Solarized"
      screenOptions={({ navigation }) => ({
        title: 'Exploration App',
        tabBarActiveTintColor: Colors.solarized.yellow,
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('InfoModal')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <FontAwesome5
              name="info-circle"
              size={25}
              color={Colors.solarized.yellow}
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.navigate('InfoModal')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <FontAwesome5
              name="exclamation-triangle"
              size={25}
              color={Colors.solarized.yellow}
              style={{ marginLeft: 15 }}
            />
          </Pressable>
        ),
      })}
    >
      <BottomTab.Screen
        name="Solarized"
        component={SoloarizedScreen}
        options={() => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="adjust" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="MplsDark"
        component={MplsDarkScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="city" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
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
