import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Audiowide: require('../assets/fonts/Audiowide-Regular.ttf'),
    Exo2: require('../assets/fonts/Exo2-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name='index' options={{title: 'index'}}/>
      <Stack.Screen name='auth/index' options={{title: 'Login'}}/>
      <Stack.Screen name='(tabs)' options={{title: 'Tabs', headerShown: false}}/>
    </Stack>
  )
}