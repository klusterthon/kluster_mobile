import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
const LoadingPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  )
}

const LoadingScreen = () => {
  return (
    <View style={{
      flex: 1,
      width,
      height: height+50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.7)',
      zIndex: 1000
    }}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  )
}

export { LoadingPage, LoadingScreen }