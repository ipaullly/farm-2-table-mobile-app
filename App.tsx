import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/components/welcome-page.component';
import SignUp from './src/components/sign-up.component';
import Password from './src/components/password.component';
import SignIn from './src/components/sign-in.components';
import HomeScreen from './src/components/home-screen.component';
import SettingsScreen from './src/components/settings-screen.component';
import SplashScreen from './src/components/splash-screen.component';
import authReducer from './src/store/reuducer'
import { AuthContext } from './src/store/auth-context';
import AuthAPI from './src/services/auth.services';

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(false);
  const [initialAuthRoute, setInitialAuthRoute] = useState('login');
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isSignedOut: false,
    userToken: null,
  });

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // restoration of token failed throw error
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }
    bootstrapAsync();
  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        setIsLoading(true);
        const responseToken = await AuthAPI.login(data);
        console.log(responseToken, 'token login');
        try {
          await AsyncStorage.setItem('userToken', responseToken)
        } catch(e) {
          console.log(e, 'error at AsyncStorage');
        }
        setUserToken(responseToken);
        setIsLoading(false)
        dispatch({ type: 'SIGN_IN', token: responseToken });

      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        const { name, phone, email, password } = data;
        const registrationBody = {
          password,
          phone,
          email,
          name,
          is_active: true,
          role: "Buyer",
          is_staff: true
        }
        // setIsLoading(true);
        const res = await AuthAPI.register(registrationBody);
        return res
      },
    }), [])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <AuthContext.Provider value={{
      isSignout: state.isSignout,
      isLoading: state.isLoading,
      userToken: state.userToken,
      signIn: authContext.signIn,
      signOut: authContext.signOut,
      signUp: authContext.signUp,
    }}>
      <NavigationContainer>
        {
          userToken === null ? (
            <Stack.Navigator initialRouteName={initialAuthRoute}>
              <Stack.Screen 
                name='login' 
                component={SignIn}
                options={{ 
                  title: 'Sign In',
                  animationTypeForReplace: isSignedOut ? 'pop' : 'push'
                }}
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
            </Stack.Navigator>
          ) : (
            <Stack.Navigator initialRouteName={'home'}>
              <Stack.Screen 
                name='home' 
                component={HomeScreen}
                options={{
                  title: 'Farm2Table',
                  headerRight: () => (
                    <Button
                      onPress={() => authContext.signOut()}
                      title="Log Out"
                      color="#994"
                    />
                  ),
                }}
                />
              <Stack.Screen 
                name='settings' 
                component={SettingsScreen}
                options={{ title: 'Sign Up' }}
              />
            </Stack.Navigator>
          )
        }
      
      </NavigationContainer>
    </AuthContext.Provider>
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
