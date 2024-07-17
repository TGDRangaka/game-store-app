import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
    screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='info' />
      <Stack.Screen name='game_progress' />
      <Stack.Screen name='billing' />
      <Stack.Screen name='settings' />
    </Stack>
  )
}