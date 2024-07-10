import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

export default function SlideGameCard({ item }: any) {
    const { width } = useWindowDimensions();
    return (
        <View className='border w-full border-gray-500 mt-5 aspect-video rounded-2xl justify-end overflow-hidden relative'>
            <Image source={item.image} className='absolute w-full h-full' />
            <LinearGradient colors={['transparent', 'transparent', 'black']} className='absolute w-full h-full'></LinearGradient>
            <ThemedText className='text-white ml-6 text-lg font-bold mb-2'>{item.name}</ThemedText>
            <View className='w-20 h-9 ml-5 mb-3 border border-gray-500 items-center justify-center rounded-xl bg-white/20 blur-md'>
                <ThemedText className='text-lg'>${item.price}</ThemedText>
            </View>
        </View>
    )
}

const sytles = StyleSheet.create({
})