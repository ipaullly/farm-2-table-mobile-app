import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button } from 'react-native';
import { AuthContext } from '../store/auth-context';
import CategoryPage from './userHomeScreen/category-page.component';
import UserHome from './userHomeScreen/user-home.component';

const UserHomeStack = createStackNavigator();

const UserHomeScreen = (props: any) => {

  const { signOut } = useContext(AuthContext);
  return (
    <UserHomeStack.Navigator>
      <UserHomeStack.Screen 
        name='UserHome' 
        component={UserHome}
        options={{
          title: 'Farm2Table',
        }}
        // options={{ 
        //   title: 'Sign In',
        //   animationTypeForReplace: isSignedOut ? 'pop' : 'push'
        // }}
      />
      <UserHomeStack.Screen 
          name='Category' 
          component={CategoryPage}
          options={{ 
            headerTitle: 'Category',
          }}
        />
    </UserHomeStack.Navigator>

  )
}

export default UserHomeScreen
