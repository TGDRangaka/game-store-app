import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ThemedText } from './ThemedText'
import { TabBarIcon } from './navigation/TabBarIcon'
import { AntDesign } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function GameCard({ game }: any) {
    const router = useRouter();

    const handleCardPress = () => {
        router.push(`/games/${game.id}`)
    }
    return (
        <View className='flex-row items-center mb-8'>
            <Image className='aspect-square w-20 rounded-xl' source={game.image} />
            <View className='flex justify-center flex-grow mx-3 my-1'>
                <ThemedText className='text-white text-lg'>{game.name}</ThemedText>
                <ThemedText className='text-sm text-white/60 flex-grow'>{game.types.join(' - ')}</ThemedText>
                <ThemedText className='text-2xl font-bold text-white'>${game.price}</ThemedText>
            </View>
            {/* <TouchableOpacity onPress={handleCardPress}> <Text>OO</Text></TouchableOpacity> */}
            <Link href={`games/${game.id}`}><AntDesign name="rightcircleo" size={24} color='white' /></Link>
                {/* <AntDesign name="rightcircleo" size={24} color='white' /> */}
        </View>
    )
}