import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserProfileScreen = () => {
  return (
    <View>
      <Text>User Profile</Text>
    </View>
  )
}

export default UserProfileScreen

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