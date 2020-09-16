import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './components/welcome-page.component';
import SignUp from './components/sign-up.component';
import Password from './components/password.component';
import SignIn from './components/sign-in.components';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'home'}>
        <Stack.Screen 
          name='home' 
          component={WelcomePage}
          options={{ title: 'Farm2Table'}}
          />
        <Stack.Screen 
          name='register' 
          component={SignUp}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen 
          name='password' 
          component={Password}
          options={{ title: 'Enter Password' }}
        />
        <Stack.Screen 
          name='login' 
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
