import React from 'react'
import { Ionicons} from '@expo/vector-icons';
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ProductCard = (props: any) => {
  const { index, item } = props;
  const handleAddToCart = () => {
    // add selected item to the cart
  }

  const handleAddToWishList = () => {
    // handle adding selected item to wish list
  }
  return (
    <TouchableOpacity
      onPress={() => props.navigation.push("Category")} 
      style={styles.productCard}
      key={index}
    >
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          source={{ uri: item.uri }}
          style = {{ width: 90, height: 50 }}
        />
      </View>
      <View style={{
        marginLeft: 10,
      }}>
        <Text style={styles.productPrice}>Ksh. {item.price}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productUnit}>{item.unit}</Text>
      </View>
      <View style={styles.productActionIcons}>
        <>
          <Ionicons 
            onPress={() => handleAddToWishList()}
            name='ios-heart-empty' 
            size={24}
          />
        </>
        <>
          <Ionicons 
            onPress={() => handleAddToCart()}
            name='ios-add-circle-outline' 
            size={24}
            style={{
              backgroundColor: '#ccff66',
              borderRadius: 50,
              height: 23
            }}
          />
        </>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
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
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '800',
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