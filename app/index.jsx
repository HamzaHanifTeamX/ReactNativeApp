import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const coffeebg = require('@/assets/images/coffeebg.jpg')

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeebg} resizeMode='cover' style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
        <Link href='/explore' style={styles.link}>Explore</Link>
      </ImageBackground>
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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  image:{
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  link: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textDecorationLine: 'underline',
    padding: 10
  }
})