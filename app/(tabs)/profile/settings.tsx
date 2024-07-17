import { View, Text } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function info() {
  return (
    <ThemedView className='flex-1 justify-center items-center'>
      <ThemedText>Settings</ThemedText>
    </ThemedView>
  )
}