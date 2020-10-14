import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserCartScreen = () => {
  return (
    <View>
      <Text>User Cart Screen </Text>
    </View>
  )
}

export default UserCartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
  }
})