import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text:{
    fontSize: 42,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})