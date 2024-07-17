import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, useWindowDimensions, ToastAndroid, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
import Loading from '@/screens/Loading';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import axios from 'axios';
import { GameData } from '@/models/GameData';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import GameRequirement from '@/components/game-screen/GameRequirement';
import { SafeAreaView } from 'react-native-safe-area-context';
import About from '@/components/game-screen/About';

const SMALL_CARD_STYLES = 'w-24 py-6 bg-zinc-700 rounded-md justify-center items-center';

export default function Page() {
    const { id } = useLocalSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [game, setGame] = useState<GameData>();
    const [seeMore, setSeeMore] = useState(false);
    const { width } = useWindowDimensions();
    const [isFavorites, setFavorites] = useState(false);

    const getGameDetails = async () => {
        try {
            const response = await axios.get(`https://www.freetogame.com/api/game?id=${id}`);
            if (response.status === 200) {
                setGame(response.data);
                setIsLoading(false);
            }
        } catch (err) {
            console.log('Error: ' + err);
        }
    }

    const handleFavorite = () => {
        if (!isFavorites) ToastAndroid.show('Added to favorites', ToastAndroid.SHORT);
        setFavorites(!isFavorites);
    }

    useEffect(() => {
        getGameDetails();
    }, [])

    return (
        isLoading
            ? <Loading />
            :
            game &&
            <SafeAreaView className='flex-1 bg-background' >
                <ScrollView className=''>
                    <View className='w-full aspect-video justify-end'>
                        <Image className='w-full h-full rounded-b-3xl' source={{ uri: game.screenshots[0].image }} />
                        <LinearGradient colors={['transparent', 'transparent', '#1f1f1f']} className='absolute w-full h-full'></LinearGradient>

                        <View className='absolute left-5 -bottom-14 flex-row items-end gap-2'>
                            <Image className='aspect-video h-20' source={{ uri: game.thumbnail }} />
                            <ThemedText className='rounded-lg -bottom-2 text-2xl w-64 mb-3'>{game.title}</ThemedText>
                        </View>
                    </View>

                    <View className='px-5 mt-20'>
                        <View className='flex-row justify-center gap-5'>
                            <View className={SMALL_CARD_STYLES}>
                                <Ionicons color={'#FF4242'} name='star' size={28} />
                                <ThemedText className='font-bold text-lg'>Ratings</ThemedText>
                                <ThemedText>4.7 stars</ThemedText>
                            </View>
                            <View className={SMALL_CARD_STYLES}>
                                <Ionicons color={'#FF4242'} name='download' size={28} />
                                <ThemedText className='font-bold text-lg'>Downloads</ThemedText>
                                <ThemedText>8 millions</ThemedText>
                            </View>
                            <View className={SMALL_CARD_STYLES}>
                                <Ionicons color={'#FF4242'} name='dice' size={28} />
                                <ThemedText className='font-bold text-lg'>Category</ThemedText>
                                <ThemedText>{game.genre}</ThemedText>
                            </View>
                        </View>

                        <View className='flex-row items-center mt-5 '>
                            <TouchableOpacity className='flex-grow mr-3'>
                                <ThemedText className='rounded-lg bg-red-500 py-2 text-2xl text-white text-center'>Download</ThemedText>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleFavorite}><Ionicons name='heart' size={48} color={isFavorites ? 'red' : 'white'} /></TouchableOpacity>
                        </View>


                        <ThemedText className='mt-10 mb-2 font-bold text-3xl'>About</ThemedText>
                        {
                            !seeMore
                                ? <View>
                                    <About game={game} />
                                    <LinearGradient colors={['transparent', 'transparent', '#1f1f1f']} className='absolute w-full h-full'></LinearGradient>
                                </View>
                                : <View>
                                    <About game={game} />
                                    <ThemedText className='text-justify'>{game.description}</ThemedText>
                                </View>
                        }

                        <TouchableOpacity className='flex-row py-2 w-36 mt-2 bg-zinc-700 justify-center items-center rounded-md' onPress={() => setSeeMore(v => !v)}>
                            <ThemedText className='text-lg text-center mb-1 mr-2'>{seeMore ? 'See Less' : 'See More'}</ThemedText>
                            <AntDesign color={'white'} name={seeMore ? 'up' : 'down'} size={15} />
                        </TouchableOpacity>

                        <ThemedText className='mt-10 font-bold text-3xl'>Screenshots</ThemedText>
                        <ScrollView horizontal className=''>
                            {game.screenshots.map((screenshot, index) => (
                                <Image style={{ width: width * 0.8 }} key={index} className='aspect-video mr-2' source={{ uri: screenshot.image }} />
                            ))}
                        </ScrollView>

                        {game.minimum_system_requirements && <ThemedText className='mt-10 mb-1 font-bold text-3xl'>System Requirements</ThemedText>}
                        {game.minimum_system_requirements && <View className='bg-gray-700 p-5 border border-zinc-600 rounded-3xl'>
                            <GameRequirement title='OS' description={game.minimum_system_requirements.os} />
                            <GameRequirement title='Processor' description={game.minimum_system_requirements.processor} />
                            <GameRequirement title='Memory' description={game.minimum_system_requirements.memory} />
                            <GameRequirement title='Graphics' description={game.minimum_system_requirements.graphics} />
                            <GameRequirement title='Storage' description={game.minimum_system_requirements.storage} />
                        </View>
                        }
                    </View>

                    <View className='mb-5'></View>
                </ScrollView>

            </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
    },
})