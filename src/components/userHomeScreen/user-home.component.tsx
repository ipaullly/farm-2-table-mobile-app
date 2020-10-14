import React, { useState } from 'react'
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';


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

const UserHome = (props: any) => {

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
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
          onPress={() => props.navigation.push("Category")} style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              <View style={styles.logo} key={index}>
                <Image
                  source={{ uri: category.uri }}
                />
              </View>
            </TouchableOpacity>
        
        )
      }
      )}
    </View>
  </View>
  )
}

export default UserHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    padding: 10
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '90%'
  },
  logo: {
    width: 66,
    height: 58,
  },
  categoryCard: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    padding: 2
  },
  categoryTitle: {
    paddingLeft: 3,
    paddingRight: 3
  }
})
