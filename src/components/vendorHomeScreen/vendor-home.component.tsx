import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorShop from './shop.component';
import AddProduct from './add-product.component';

const VendorHomeStack = createStackNavigator();

const VendorHomeScreen = (props: any) => {
  return (
    <VendorHomeStack.Navigator initialRouteName={'VendorShop'}>
      <VendorHomeStack.Screen 
        name='VendorShop' 
        component={VendorShop}
        options={{
          title: 'Farm2Table',
        }}
        // options={{ 
        //   title: 'Sign In',
        //   animationTypeForReplace: isSignedOut ? 'pop' : 'push'
        // }}
      />
      <VendorHomeStack.Screen 
          name='AddProduct' 
          component={AddProduct}
          options={{ 
            headerTitle: 'Category',
          }}
        />
    </VendorHomeStack.Navigator>
  )
}

export default VendorHomeScreen
