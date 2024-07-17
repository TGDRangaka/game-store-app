import { View, Text, Linking } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import { Ionicons } from '@expo/vector-icons'

export default function About({game}: any) {
    return (
        <View>
            <View className='flex-row mb-3'>
                <View className='w-1/2'>
                    <ThemedText className='font-bold'>Publisher</ThemedText>
                    <ThemedText className=''>{game.publisher}</ThemedText>
                </View>
                <View>
                    <ThemedText className='font-bold'>Developer</ThemedText>
                    <ThemedText className=''>{game.developer}</ThemedText>
                </View>
            </View>
            <View className='flex-row mb-3'>
                <View className='w-1/2'>
                    <ThemedText className='font-bold'>Released Date</ThemedText>
                    <ThemedText className=''>{game.release_date}</ThemedText>
                </View>
                <View>
                    <ThemedText className='font-bold'><Ionicons name='game-controller' size={30} color='white' /></ThemedText>
                    <Text className='text-red-400 underline' onPress={() => Linking.openURL(game.game_url)}>More about game</Text>
                </View>
            </View>
        </View>
    )
}