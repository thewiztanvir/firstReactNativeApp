import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Mate!</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        flexDirection: 'column',
    },
    text: {
        fontSize: 30,    
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})