import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { useRouter } from 'expo-router';

export default function RegisterForm() {
    const router = useRouter();

    const handleRegister = () => {
        router.push('/(tabs)')
    }
    return (
        <View className='w-full items-center flex-grow mt-20'>
            <View className='w-full'>
                <ThemedText className='text-white text-sm'>Username</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' placeholder='shadow_gamer'/>

                <ThemedText className='text-white mt-5 text-sm'>Email</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' />

                <ThemedText className='text-white mt-5 text-sm'>Password</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' />

                <ThemedText className='text-white mt-5 text-sm'>Confirm Password</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' />

                <ThemedText className='text-white mt-5 text-sm'>Date of Birth</ThemedText>
                <TextInput className='text-white border-b border-gray-500 h-10 text-lg font-bold' />
            </View>

            <TouchableOpacity
                className='rounded-full bg-red-500 w-1/2 mt-3 py-3 items-center'
                onPress={handleRegister}
            >
                <ThemedText className='text-2xl' style={{ fontFamily: 'Audiowide' }}>REGISTER</ThemedText>
            </TouchableOpacity>
        </View >
    )
}