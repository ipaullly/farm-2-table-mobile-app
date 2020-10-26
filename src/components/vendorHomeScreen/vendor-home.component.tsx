import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorShop from './shop.component';
import AddProduct from './add-product.component';
import ShopProductCard from './shop-product-card-shop.component';
import ProductList from './product-list.component';
import EditProduct from './edit-product.component';

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
          title: 'Category',
        }}
      />
      <VendorHomeStack.Screen 
        name='ProductList' 
        component={ProductList}
        options={{ 
          title: 'My Products',
        }}
      />
      <VendorHomeStack.Screen 
        name='EditProduct' 
        component={EditProduct}
        options={{ 
          title: 'Edit',
        }}
      />
    </VendorHomeStack.Navigator>
  )
}

export default VendorHomeScreen
