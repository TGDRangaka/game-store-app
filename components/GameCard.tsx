import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ThemedText } from './ThemedText'
import { TabBarIcon } from './navigation/TabBarIcon'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Game } from '@/models/Game';

interface Props {
    game: Game;
}

export default function GameCard({ game }: Props) {
    const router = useRouter();

    const handleCardPress = () => {
        router.push(`/id/${game.id}`)
    }
    return (
        <GestureHandlerRootView>
            <TouchableOpacity className='flex-row items-center mb-5' onPress={handleCardPress}>
                <Image className='aspect-video h-16 rounded-sm' source={{ uri: game.thumbnail }} />
                <View className='flex justify-center flex-grow mx-3 my-1'>
                    <ThemedText className='text-white text-xl font-bold'>{game.title}</ThemedText>
                    <ThemedText className='text-base text-white flex-grow'>
                        {/* <ThemedText className='text-white/60 text-sm'>By </ThemedText> */}
                        <Ionicons name='business-outline' />
                        {' ' + game.publisher}
                    </ThemedText>
                    <ThemedText className='text-sm text-white/60'>
                        <Ionicons name='archive' />
                        {' ' + game.genre}
                    </ThemedText>
                </View>
            </TouchableOpacity>
        </GestureHandlerRootView>

    )
}