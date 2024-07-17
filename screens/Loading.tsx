import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedView } from '@/components/ThemedView';

export default function Loading() {
  return (
    <ThemedView className='justify-center items-center'>
      {/* <LinearGradient
        colors={['#020202', '#560101']}
        style={styles.background}
      /> */}
      {/* <ActivityIndicator size="large" color="#FFFFFF" /> */}
      <Image className='w-24 h-24' source={require('@/assets/images/loading.gif')} />
      <Text className='text-white/20 mt-2'>Loading...</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});
