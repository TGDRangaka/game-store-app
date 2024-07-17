import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import HomeCardSlider from '@/components/HomeCardSlider';
import { ThemedText } from '@/components/ThemedText';
import GameCard from '@/components/GameCard';
import axios from 'axios';
import { Game } from '@/models/Game';
import Loading from '@/screens/Loading';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState(1);
  const [gamesList, setGamesList] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGamesList = async () => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games?platform=pc');
      if (response.status === 200) {
        setGamesList(response.data.slice(0, 30));
      }

      setIsLoading(false);
    } catch (err) {
      console.log('Error:', err);
    }
  }

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <SafeAreaView className='flex-1'>
      <LinearGradient
        colors={['#020202', '#560101']}
        style={styles.background}
      />
      <View className='flex-1'>
        <View className='w-full flex-row justify-between px-5'>
          <Image source={require('@/assets/images/icon.png')} />
          <Image source={require('@/assets/images/search.png')} />
        </View>

        <HomeCardSlider />

        {/* <View className='flex-row justify-around px-5 mt-8'>
          <TouchableOpacity
            onPress={() => { setSearchTerm(1) }}
          >
            <ThemedText className={searchTerm == 1 ? 'text-white' : 'text-white/50'}>Top Selling</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { setSearchTerm(2) }}
          >
            <ThemedText className={searchTerm == 2 ? 'text-white' : 'text-white/50'}>Free to Play</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { setSearchTerm(3) }}
          >
            <ThemedText className={searchTerm == 3 ? 'text-white' : 'text-white/50'}>Top Trending</ThemedText>
          </TouchableOpacity>

        </View> */}

        {isLoading
          ? (
            <Loading />
          )
          : (
            <ScrollView className='w-full flex-grow'>
              <View className='mx-5 mt-5'>
                {
                  gamesList.map((game, i) => <GameCard key={i} game={game} />)
                }

              </View>
            </ScrollView>
          )}
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
})