import React from 'react'
import { Ionicons} from '@expo/vector-icons';
import { View, StyleSheet, Text, Button } from 'react-native'

const CategoryPage = (props: any) => {
  
  return (
    <View style={styles.container}>
      <Ionicons 
        onPress={() => props.navigation.goBack()}
        name='ios-arrow-dropleft-circle'  
        size={32}
      />
      <Text>CategoryPage</Text>
    </View>
  )
}

export default CategoryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    padding: 10
  }
})