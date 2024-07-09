import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Page() {
  return (
    <View className='w-full h-full'>
    <LinearGradient
      colors={['#020202', '#560101']}
      style={styles.background}
    />
      <Text className='text-red-600'>Home Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
})