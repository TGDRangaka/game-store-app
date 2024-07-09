import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import HomeCardSlider from '@/components/HomeCardSlider';
import { ThemedText } from '@/components/ThemedText';
import GameCard from '@/components/GameCard';
import gamesData from '@/data/gamesData';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState(1);

  return (
    <View className='w-full h-full'>
      <LinearGradient
        colors={['#020202', '#560101']}
        style={styles.background}
      />
      <ScrollView className='w-full h-screen pt-10'>
        <View className='w-full flex-row justify-between px-5'>
          <Image source={require('@/assets/images/icon.png')} />
          <Image source={require('@/assets/images/search.png')} />
        </View>

        <HomeCardSlider />

        <View className='flex-row justify-around px-5 mt-8'>
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

        </View>

        <View className='mx-5 mt-5'>
          {
            gamesData.map((game, i) => <GameCard key={i} game={game} />)
          }

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
})