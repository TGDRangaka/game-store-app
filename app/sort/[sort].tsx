import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useLocalSearchParams } from 'expo-router';
import Loading from '@/screens/Loading';
import { Game } from '@/models/Game';
import axios from 'axios';
import GameCard from '@/components/GameCard';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const increaseBy = 40;

export default function Page() {
  const { sort } = useLocalSearchParams();
  const [gamesList, setGamesList] = useState<Game[]>([]);
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGamesList = async () => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games?platform=pc');
      if (response.status === 200) {
        setIsLoading(false);
        setAllGames(response.data);
        setGamesList(response.data.slice(0, increaseBy));
      }

    } catch (err) {
      console.log('Error:', err);
    }
  }

  const handleMore = () => {
    const currentGameListLength = gamesList.length;
    if (currentGameListLength + increaseBy < allGames.length) {
      setGamesList(list => [...list, ...allGames.slice(currentGameListLength, currentGameListLength + increaseBy)]);
    } else {
      setGamesList(list => [...list, ...allGames.slice(currentGameListLength, allGames.length)]);
    }
  }

  useEffect(() => {
    getGamesList();
  }, []);

  return isLoading
    ? (<Loading />)
    : (
      <ThemedView className=''>
        <ThemedText className='text-2xl mt-10 mx-5'>All Games ({gamesList.length} - {allGames.length})</ThemedText>
          <LinearGradient colors={['#1f1f1f', 'transparent']} className='absolute mt-16 w-full h-14 z-10' />
          <LinearGradient colors={['transparent', '#1f1f1f']} className='absolute bottom-0 w-full h-14 z-10' />
        <ScrollView className='w-full flex-grow'>

          <View className='mx-5 mt-5'>
            {
              gamesList.map((game, i) => <GameCard key={i} game={game} />)
            }
          </View>

          {(gamesList.length !== allGames.length) &&
            <TouchableOpacity className='items-center'>
              <ThemedText className='text-xl bg-gray-600 px-10 py-2 rounded-lg border border-gray-400' onPress={handleMore}>
                More  <AntDesign name='down' size={18} color='white' />
              </ThemedText>
            </TouchableOpacity>}

          <View className='mb-10'></View>
        </ScrollView>
      </ThemedView>
    )
}