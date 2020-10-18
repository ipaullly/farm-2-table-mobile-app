import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import UserProfileScreen from './user-profile-screen.component';
import VendorHomeScreen from '../vendorHomeScreen/vendor-home.component';

const Tab = createBottomTabNavigator();

const VendorScreen = () => {
  return (

    <>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Shop') {
            iconName = 'ios-home'
          } else if (route.name === 'Cart') {
            iconName = 'ios-cart';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Shop" component={VendorHomeScreen}/>
      <Tab.Screen name="Profile" component={UserProfileScreen}/>
    </Tab.Navigator>
    </>
  )
}

export default VendorScreen
