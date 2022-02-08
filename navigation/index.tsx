/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CentreScreen from '../screens/CentreScreen';
import SpaceCraftScreen from '../screens/SpaceCraftScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LauncherScreen from "../screens/LauncherScreen";
import CustomerSatelliteScreen from "../screens/CustomerSatelliteScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Centre"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
          tabBarStyle:{
            backgroundColor: Colors[colorScheme].background
          }
      }}>
      <BottomTab.Screen
        name="Centre"
        component={CentreScreen}
        options={{
            tabBarLabel: "Centres",
            tabBarIcon: ({ color }) => <MaterialIcons name="place" size={26} color={color} />,
            headerShown: false
        }}
      />
      <BottomTab.Screen
        name="SpaceCraft"
        component={SpaceCraftScreen}
        options={{
            tabBarLabel: "Spacecrafts",
            tabBarIcon: ({ color }) => <FontAwesome5 name="space-shuttle" size={26} color={color} />,
            headerShown: false
        }}
      />
        <BottomTab.Screen
            name="Launcher"
            component={LauncherScreen}
            options={{
                tabBarLabel: "Launchers",
                tabBarIcon: ({ color }) => <FontAwesome name="space-shuttle" size={26} color={color} />,
                headerShown: false
            }}
        />
        <BottomTab.Screen
            name="CustomerSatellite"
            component={CustomerSatelliteScreen}
            options={{
                tabBarLabel: "Satellites",
                tabBarIcon: ({ color }) => <FontAwesome5 name="satellite" size={26} color={color} />,
                headerShown: false
            }}
        />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
