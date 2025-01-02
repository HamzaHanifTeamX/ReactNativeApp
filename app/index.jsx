import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const coffeebg = require('@/assets/images/coffeebg.jpg')

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeebg} resizeMode='cover' style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
        <Link href='/explore' style={{ marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 4
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
  }
})