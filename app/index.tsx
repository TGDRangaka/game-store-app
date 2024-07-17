import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Login from '@/screens/Login';
import Register from '@/screens/Register';
import Loading from '@/screens/Loading';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // if (isLoggedIn) {
      //   router.push('/profile');
      // }
      setIsLoading(false);
    }, 1000);

  }, [])

  return (
    isLoading
      ? <Loading />
      : <View className='flex-1 justify-center items-center px-5 bg-background'>
        {/* <LinearGradient
          colors={['#020202', '#560101']}
          style={styles.background}
        /> */}
        {
          isLoginScreen ?
            <Login setIsLoginScreen={setIsLoginScreen} />
            : <Register setIsLoginScreen={setIsLoginScreen} />
        }
      </View>
  )
}

const styles = StyleSheet.create({
  nametext: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
})