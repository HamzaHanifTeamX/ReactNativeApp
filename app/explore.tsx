import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AppBar, Surface, Stack } from "@react-native-material/core";

interface Post {
  id: number;
  title: string;
  body: string;
}

const explore = () => {
  const [data, setData] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])
  return (
    <View style={styles.container}>
      <AppBar title="Explore"  />
      <ScrollView>
      <Stack direction="column" spacing={4}>
        {data.map((post) => (
          <Surface key={post.id} style={styles.card}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{post.title}</Text>
            <Text>{post.body}</Text>
          </Surface>
        ))}
      </Stack>
      </ScrollView>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10
  }
})