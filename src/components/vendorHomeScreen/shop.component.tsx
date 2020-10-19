import React from 'react'
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ProductCard from '../userHomeScreen/product-card.component';
import { products } from '../userHomeScreen/user-home.component';

const VendorShop = (props: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.vendorTitle}>
        <Text style={styles.vendorTag}>Top Selling</Text>
        <Text style={styles.seeAll}>SEE ALL</Text>
      </View>
      <ScrollView
        style={styles.productCardGrid}
      >
        {
          products.map((item, index) => (
            <ProductCard item={item} key={index}/>
          ))
        }  
      </ScrollView>
      <View>
        <Ionicons 
          onPress={() => props.navigation.push('AddProduct')}
          name='ios-add-circle-outline' 
          size={32}
          // style={{
          //   backgroundColor: 'black',
          // }}
        />
      </View>
    </ScrollView>
  )
}

export default VendorShop

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
})
