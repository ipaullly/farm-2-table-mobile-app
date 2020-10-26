import React, { useContext, useState } from 'react'
import { View,Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { products } from '../userHomeScreen/user-home.component';
import ShopProductCard from './shop-product-card-shop.component';
import { AuthContext } from '../../store/auth-context';
import { useEffect } from 'react';

const ProductList = (props: any) => {
  const [productList, setProductList] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useContext(AuthContext);

  const listProducts = async () => {
    return await getProducts();
  }

  useEffect(() => {
    const returnedList = listProducts();
    returnedList.then((promisedData: any) => {

      setProductList(promisedData.data);
      setLoading(false);
    });
    return () => {
      setProductList(null);
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.vendorTitle}>
        <Text style={styles.vendorTag}>Products</Text>
        <Text style={styles.seeAll}> </Text>
      </View>
      <ScrollView
        style={styles.productCardGrid}
      >
        {loading? (<View>
          <ActivityIndicator size="large" color="#33e026" />
        </View>) : null}
        {
          productList.map((item: any, index: any) => (
            <ShopProductCard 
              item={item} 
              key={index}
              navigation={props.navigation}
            />
          ))
        }
      </ScrollView>
    </ScrollView>
  )
}

export default ProductList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  seeAll: {},
  vendorTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  vendorTag: {
    backgroundColor: '#ff9999',
    textTransform: "uppercase",
    padding: 5,
    color: '#fff',
    borderRadius: 4
  },
  productCardGrid: {
    marginTop: 10,
  },
  addIcon: {
    position: "absolute",
    top: '72vh',
    left:'83vw'
  }
})
