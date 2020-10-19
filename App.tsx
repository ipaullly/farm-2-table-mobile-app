import React, { useEffect, useMemo, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import jwtDecode from 'jwt-decode';
import SignUp from './src/components/sign-up.component';
import Password from './src/components/password.component';
import SignIn from './src/components/sign-in.components';
import HomeScreen from './src/components/screens/home-screen.component';
import SettingsScreen from './src/components/screens/settings-screen.component';
import SplashScreen from './src/components/splash-screen.component';
import authReducer from './src/store/reducer'
import { AuthContext } from './src/store/auth-context';
import AuthAPI from './src/services/auth.services';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VendorScreen from './src/components/screens/vendor-screen.component';
import ProductsAPI from './src/services/products.services';

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState<any>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(false);
  const [role, setRole] = useState('Vendor');
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
        if (responseToken !== null) {
          const decoded: any = jwtDecode(responseToken)
          console.log(decoded, 'decoded token');
          setRole(decoded.role)
          try {
            await AsyncStorage.setItem('userToken', responseToken);
            await AsyncStorage.setItem('id', decoded.id);
          } catch(e) {
            console.log(e, 'error at AsyncStorage');
          }
          setUserToken(responseToken);
          setIsLoading(false)
          dispatch({ type: 'SIGN_IN', token: responseToken });
        }
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' });
        setUserToken(null);
      },
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
      addProduct: async (data: any) => {
        const res = await ProductsAPI.addProduct(data)
        return res;
      }
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
      addProduct: authContext.addProduct
    }}>
      <NavigationContainer>
        {
          userToken === null ? (
            <Stack.Navigator 
              initialRouteName={initialAuthRoute}
              screenOptions={{ 
                headerStyle: { backgroundColor: 'papayawhip' } }}  
            >
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
            role === 'Buyer'? (
              <Stack.Navigator 
                initialRouteName={'home'}
                screenOptions={{ 
                  headerStyle: { backgroundColor: 'purple' },
                  headerTintColor: 'gold',
                  headerRight: () => (
                    <Button
                      onPress={() => authContext.signOut()}
                      title="sign out"
                      color="#909"
                    />
                  ),
                }}
                >
                <Stack.Screen 
                  name='home' 
                  component={HomeScreen}
                  options={{
                    title: 'Farm2Table',
                  }}
                  />
                <Stack.Screen 
                  name='settings' 
                  component={SettingsScreen}
                  options={{ title: 'Sign Up' }}
                />
              </Stack.Navigator>
            ):(
              <Stack.Navigator 
                initialRouteName={'Vendor'}
                screenOptions={{ 
                  headerStyle: { backgroundColor: 'navy' },
                  headerTintColor: 'gold',
                  headerRight: () => (
                    <Button
                      onPress={() => setRole('Buyer')}
                      title="Switch to Buyer"
                      color="#409"
                    />
                  ),
                }}
                >
                <Stack.Screen 
                  name='Vendor' 
                  component={VendorScreen}
                  options={{
                    title: 'Vendor',
                  }}
                  />
                <Stack.Screen 
                  name='settings' 
                  component={SettingsScreen}
                  options={{ title: 'Settings' }}
                />
              </Stack.Navigator>
            )
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
