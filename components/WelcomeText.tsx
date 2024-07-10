import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'

export default function WelcomeText() {
  return (
    <View>
      <ThemedText className='text-white text-7xl' style={{ fontFamily: 'Audiowide' }}>Welcome</ThemedText>
      <ThemedText className='text-white text-sm'>Welcome to Game Haven! Discover the best games and exclusive deals.</ThemedText>
    </View>
  )
}