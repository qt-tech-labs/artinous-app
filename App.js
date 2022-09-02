import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { TailwindProvider } from 'tailwindcss-react-native';
import React from 'react';
import BottomTab from './components/BottomTab';
import Tabbar from './components/Tabbar'
import { View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <TailwindProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
      {/* <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#eb3345", }}>
        <Tabbar />
      </View> */}
    </TailwindProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}