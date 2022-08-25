import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/stack/Navigation'
import { useFonts, Inter_900Black, Inter_700Bold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );

}