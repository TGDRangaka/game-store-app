import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import RegisterForm from '@/components/RegisterForm';

export default function Register(props: any) {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/profile')
  }

  const handleRegister = () => {
    props.setIsLoginScreen(true);
  }
  return (
    <View className='w-full h-screen justify-between pt-10'>
      <ThemedText className='text-white text-7xl' style={{ fontFamily: 'Audiowide' }}>Register</ThemedText>

      <RegisterForm />

      <ThemedText className='text-center mt-1'>
        Already have an account?
        <Text className='text-emerald-400 underline'
          onPress={handleRegister}
        > Login</Text>
      </ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
})