import { NavigationContainer } from '@react-navigation/native'
import { TailwindProvider } from 'tailwindcss-react-native';
import React from 'react';
import BottomTab from './components/BottomTab';

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </TailwindProvider >
  );
}