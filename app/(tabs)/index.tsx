import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import HomeCardSlider from '@/components/HomeCardSlider';
import { ThemedText } from '@/components/ThemedText';
import GameCard from '@/components/GameCard';
import axios from 'axios';
import { Game } from '@/models/Game';
import Loading from '@/screens/Loading';
import { Link, useNavigation, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState(1);
  const [gamesList, setGamesList] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newGames, setNewGames] = useState<Game[]>([]);

  const router = useRouter();
  const navigation = useNavigation();

  const getGamesList = async () => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games?platform=pc');
      if (response.status === 200) {
        setGamesList(response.data.slice(0, 40));
        console.log(response.data.length);
      }

    } catch (err) {
      console.log('Error:', err);
    }
  }

  const getNewlyReleasedGamesList = async () => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games?sort-by=release-date');
      if (response.status === 200) {
        setNewGames(response.data.slice(0, 8));
      }
    } catch (err) {
      console.log('Error:', err);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      await getGamesList();
      await getNewlyReleasedGamesList();
      setIsLoading(false);
    }
    loadData();

  }, []);

  return (
    <SafeAreaView className='flex-1 bg-background'>

      {isLoading
        ? (
          <Loading />
        )
        : (
          <View className='flex-1'>
            <View className='w-full flex-row justify-between px-5'>
              {/* <Image className='w-14 aspect-square' source={require('@/assets/images/welcome-gif.gif')} /> */}
              {/* <Image source={require('@/assets/images/search.png')} /> */}
            </View>

            <ThemedText className='text-2xl ml-5 mb-2' style={{ fontFamily: 'Audiowide' }}>New Games</ThemedText>
            <HomeCardSlider newGames={newGames} />
            <ScrollView className='w-full flex-grow'>
              <View className='flex-row justify-between items-end mx-5 mt-3'>
                <ThemedText className='text-2xl' style={{ fontFamily: 'Audiowide' }}>Trending Games</ThemedText>
                <TouchableOpacity className='flex-row justify-center items-center bg-gray-600 rounded-lg px-3 py-2' onPress={() => router.push('/sort/all')}>
                  <ThemedText className=''>See all  <AntDesign name="right" size={14} color='white' /></ThemedText>
                </TouchableOpacity>
              </View>

              <View className='mx-5 mt-5'>
                {
                  gamesList.map((game, i) => <GameCard key={i} game={game} />)
                }
              </View>
            </ScrollView>
          </View>
        )}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
})