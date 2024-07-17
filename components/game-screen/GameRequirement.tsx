import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText';

interface Props {
    title: string;
    description: string;
}

export default function GameRequirement({ title, description }: Props) {
  return (
    <View className='mb-3'>
      <ThemedText className='font-bold text-lg'>{title}</ThemedText>
      <ThemedText className=''>{description}</ThemedText>
    </View>
  )
}