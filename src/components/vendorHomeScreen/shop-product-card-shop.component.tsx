import React from 'react'
import { Ionicons} from '@expo/vector-icons';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ShopProductCard = (props: any) => {
  const { index, item } = props;
  const handleAddToCart = () => {
    // add selected item to the cart
  }

  const handleAddToWishList = () => {
    // handle adding selected item to wish list
  }
  return (
    <TouchableOpacity
      onPress={() => props.navigation.push("EditProduct", item)} 
      style={styles.productCard}
      key={index}
    >
      <View style={{ display: 'flex', alignItems: 'center' }}>
        {item.uri? (
          <Image
            source={{ uri: item.uri }}
            style = {{ width: 90, height: 50, borderRadius: 6 }}
          />
          ):(
            <Text style={styles.productName}>{item.id}</Text>
          )}
      </View>
      <View style={{
        marginLeft: 10,
      }}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Ksh. {item.price}</Text>
        <Text style={styles.productUnit}>{item.quantity}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ShopProductCard

const styles = StyleSheet.create({
  productCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0e3ff',
    marginBottom: 5,
    marginTop: 4,
  },
  productCardGrid: {
    marginTop: 10,
  },
  productTag: {},
  productTitle: {},
  productPrice: {
    fontStyle: 'italic',
    color: 'gray'
  },
  productUnit: {
    color: 'gray'
  },
  productName: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '500',
    width: 180
  },
  productActionIcons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
})