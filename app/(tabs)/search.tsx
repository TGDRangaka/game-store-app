import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView';

export default function Page() {
  return (
    <ThemedView className='w-full h-full'>
      <Text className='text-red-600'>Home Page</Text>
    </ThemedView>
  )
}