import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'

export default function Stats() {
  return (
    <View className='flex-row justify-between mt-16'>
      <View className='w-1/3'>
        <ThemedText className="text-xl text-white text-center">Played Hours</ThemedText>
        <ThemedText className="text-xl text-red-400 text-center">1456 h</ThemedText>
      </View>
      <View className='w-1/3'>
        <ThemedText className="text-xl text-white text-center">Friends</ThemedText>
        <ThemedText className="text-xl text-red-400 text-center">86</ThemedText>
      </View>
      <View className='w-1/3'>
        <ThemedText className="text-xl text-white text-center">Games Own</ThemedText>
        <ThemedText className="text-xl text-red-400 text-center">53</ThemedText>
      </View>
    </View>
  )
}