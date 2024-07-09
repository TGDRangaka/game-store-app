import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';
import WelcomeText from '@/components/WelcomeText';
import LoginForm from '@/components/LoginForm';

export default function Login(props: any) {
  const handleRegister = () => {
    props.setIsLoginScreen(false);
  }
  return (
    <View className='w-full h-screen justify-between'>
      <View className='h-1/2 flex justify-center items-center'>
        <Image className=' aspect-square'
          source={require('@/assets/images/welcome-gif.gif')}
        />
      </View>

      <WelcomeText/>

      <LoginForm/>

      <ThemedText className='text-center mt-1'>
        Don't have an account? 
        <Text className='text-emerald-400 underline'
        onPress={handleRegister}
        > Register</Text>
      </ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#5378D8',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center'
  }
});