import 'react-native-gesture-handler';
import React from 'react';
import { Button, PanResponder, View, StyleSheet, TouchableOpacity, Text, Image, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MyStack from './src/navigation/stacks';

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1EAFB3', 
      background: '#fff', 
      card: '#000',
      text: '#000',
      border: 'grey',
      notification: '#1EAFB3',
    },
  };
  
  return (
    <View
      style={{ flex: 1, backgroundColor: '#FFFFFF' }}
    >
      <NavigationContainer theme={MyTheme}>
        <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
        <MyStack />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
});
export default App;
