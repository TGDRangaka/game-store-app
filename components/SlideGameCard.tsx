import { View, Text, Image, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { GameData } from '@/models/GameData';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';


export default function SlideGameCard({ item }: any) {
    const { width } = useWindowDimensions();

    const router = useRouter();

    const handlePress = () => {
        router.push('/id/' + item.id )
    }

    return (
        <GestureHandlerRootView>
            <TouchableOpacity onPress={handlePress} style={{ width: width * 0.8 }} className='border border-gray-500 aspect-video rounded-2xl justify-end overflow-hidden relative mr-3'>
                <Image source={{ uri: item.thumbnail }} className='absolute w-full h-full' />
                <LinearGradient colors={['transparent', 'transparent', 'black']} className='absolute w-full h-full'></LinearGradient>
                {/* <ThemedText className='text-white ml-6 text-lg font-bold mb-2'>{item.title}</ThemedText> */}
                {/* <View className='w-20 h-9 ml-5 mb-3 border border-gray-500 items-center justify-center rounded-xl bg-white/20 blur-md'>
                    <ThemedText className='text-lg'>$12</ThemedText>
                </View> */}
                <ThemedText className='text-white ml-6 text-xl mb-2'>
                        {/* <AntDesign name='edit' /> */}
                        <ThemedText className='text-white/50'>By</ThemedText>
                        {' ' + item.publisher}
                    </ThemedText>
            </TouchableOpacity>
        </GestureHandlerRootView>

    )
}

const sytles = StyleSheet.create({
})