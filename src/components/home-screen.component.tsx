import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import UserHomeScreen from './user-home-screen.component';
import UserCartScreen from './user-cart-screen.component';
import UserProfileScreen from './user-profile-screen.component';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
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
      <Tab.Screen name="Home" component={UserHomeScreen}/>
      <Tab.Screen name="Cart" component={UserCartScreen}/>
      <Tab.Screen name="Profile" component={UserProfileScreen}/>
    </Tab.Navigator>
    </>
    // <View style={styles.container}>
    //   <Text>Home page</Text>
    // </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
  }
})