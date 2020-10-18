import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>

  )
}

export default SettingsScreen

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