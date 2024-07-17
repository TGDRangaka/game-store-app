import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#020202', '#560101']}
        style={styles.background}
      />
      {/* <ActivityIndicator size="large" color="#FFFFFF" /> */}
      <Image className='w-24 h-24' source={require('@/assets/images/loading.gif')} />
      {/* <Text style={styles.text}>Loading...</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray'
  },
});
