import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { useRouter } from 'expo-router'

export default function LoginForm() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/home_tab')
    }
    return (
        <View className='items-center'>
            <View className='w-full'>
                <ThemedText className='text-white text-sm'>Email</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' />

                <ThemedText className='text-white mt-5 text-sm'>Password</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' />
            </View>

            <TouchableOpacity
                className='rounded-full bg-red-500 w-1/2 mt-3 py-3 items-center'
                onPress={handleLogin}
            >
                <ThemedText className='text-2xl' style={{ fontFamily: 'Audiowide' }}>LOGIN</ThemedText>
            </TouchableOpacity>
        </View>
    )
}