import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import gamesData from '@/data/gamesData';
import Loading from '@/screens/Loading';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';

interface GameData {
    id: number;
    name: string;
    image: any;
    types: string[];
    price: number;
    description: string;
    playersCount: number;
}

export default function Page() {
    const { id } = useLocalSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [game, setGame] = useState<GameData>();

    useEffect(() => {
        gamesData.map((game: GameData) => {
            if (game.id === parseInt(id as string)) {
                setGame(game);
            }
        });
        setIsLoading(false);
    }, [])

    return (
        isLoading
            ? <Loading />
            :
            game &&
            <View className='flex-1 bg-black'>
                {/* <LinearGradient colors={['#020202', '#560101']} style={styles.background} /> */}
                <View className='w-full h-1/3 justify-end'>
                    <Image className='w-full h-full absolute' source={game.image} />
                    <LinearGradient colors={['transparent', 'transparent', 'black']} className='absolute w-full h-full'></LinearGradient>
                    <ThemedText className='ml-5 mb-3 text-3xl font-bold w-full'>{game.name}</ThemedText>
                </View>

                <View className='flex-row w-full ml-5'>
                    {
                        game.types.map((type: string, index: number) => (
                            <ThemedText key={index} className='mr-4 text-white text-sm bg-white/20 px-3 py-1 rounded-lg border border-white/50'>{type}</ThemedText>
                        ))
                    }
                </View>

                <ThemedText className='ml-5 mt-10'>{game.description}</ThemedText>
            </View>
    )
}


const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
    },
})