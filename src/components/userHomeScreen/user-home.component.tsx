import React, { useState } from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ProductCard from './product-card.component';


const categories = [
  {
    name: 'vegetables',
    uri: 'https://i.ibb.co/SX7VFcP/vegatable-icon.png'
  },
  {
    name: 'fruits',
    uri: 'https://i.ibb.co/16zwfb3/fruit-icon.png'
  },
  {
    name: 'grains',
    uri: 'https://i.ibb.co/sCK1FYp/grain-icon.png'
  },
  {
    name: 'meat & dairy',
    uri: 'https://i.ibb.co/NyhCkQx/meats-icon.png'
  }
]

const vendors = [
  {
    name: 'Wafula Farms',
    location: 'Githunguri',
    uri: 'https://i.ibb.co/SDSsNs1/farmer-img.png'
  },
  {
    name: 'Shona Holdings',
    location: 'Lower Kabete',
    uri: 'https://i.ibb.co/sVLC4Xm/farmer-img-2.jpg'
  }

]

export const products = [
  {
    name: 'Cabbage',
    price: '300',
    unit: '1kg',
    uri: 'https://i.ibb.co/hmMDn87/cabbage.jpg',
    id: 'asjdbajdg67dquJADAK9p'
  },
  {
    name: 'Red/Yellow Capsicum',
    price: '2000',
    unit: '1kg',
    uri: 'https://i.ibb.co/ySJqXnW/capsicum.jpg',
    id: 'asjdhbajsdhajsAS676367nasASKCJ'
  },
  {
    name: 'Banana',
    price: '700',
    unit: '1kg',
    uri: 'https://i.ibb.co/yyBHRMj/banana.jpg',
    id: 'aalkQWTD977823hjdbsjbhaj'
  },

]

const UserHome = (props: any) => {

  const [searchText, setSearchText] = useState('');

  return (
    <ScrollView style={styles.container}>
    <View>
    <SearchBar
      platform='android'
      containerStyle={{
        borderRadius: 5
      }}
      inputContainerStyle={{

      }}
      inputStyle={
        {
          fontSize: 14
        }
      }
      placeholder="Type Here..."
      onChangeText={(e) => setSearchText(e)}
      value={searchText}
    />
    </View>
    <View style={styles.categories}>
      {categories.map((category, index) => {
        return (
          <TouchableOpacity
            onPress={() => props.navigation.push("Category")} style={styles.categoryCard}
          >
            <Text style={styles.categoryTitle}>{category.name}</Text>
            <View style={styles.logo} key={index}>
              <Image
                source={{ uri: category.uri }}
                style = {{ width: 50, height: 40, borderRadius: 4 }}
              />
            </View>
          </TouchableOpacity>
        )
      }
      )}
    </View>
    <View style={styles.vendorTitle}>
      <Text style={styles.vendorTag}>Vendors</Text>
      <Text style={styles.seeAll}>SEE ALL</Text>
    </View>
    <View style={styles.vendorCardGrid}>
      {
        vendors.map((vendor, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.push("Category")} 
              style={styles.vendorCard}
              key={index}
            >
              <View style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  source={{ uri: vendor.uri }}
                  style = {{ width: 60, height: 60 }}
                />
              </View>
              <Text style={styles.vendorName}>{vendor.name}</Text>
              <Text style={styles.vendorLocation}>{vendor.location}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
    <View style={styles.vendorTitle}>
      <Text style={styles.vendorTag}>DAILY NEEDS</Text>
      <Text style={styles.seeAll}>SEE ALL</Text>
    </View>
    <ScrollView
      style={styles.productCardGrid}
    >
      {
        products.map((item, index) => (
          <ProductCard item={item} index={index}/>
        ))
      }  
    </ScrollView>
  </ScrollView>
  )
}

export default UserHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
    padding: 10,
    overflow: 'scroll'
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '90%'
  },
  logo: {
    width: 66,
    height: 58,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryCard: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    padding: 2,
    borderColor: 'lightgrey',
    borderWidth: 0.2,
    borderStyle: 'solid'
  },
  categoryTitle: {
    paddingLeft: 3,
    paddingRight: 3
  },
  vendorCardGrid: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  vendorCard: {
    padding: 10,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: 'white'
  },
  vendorTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  vendorLocation: {
    padding: 2,
    fontStyle: 'italic'
  },
  vendorName: {
    textTransform: 'uppercase',
    fontWeight: '600',
    padding: 5 
  },
  seeAll: {},
  vendorTag: {
    backgroundColor: '#ff9999',
    textTransform: "uppercase",
    padding: 5,
    color: '#fff',
    borderRadius: 4
  },
  productCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 5,
    marginTop: 4
  },
  productCardGrid: {
    marginTop: 10,
  },
})
