import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import GenreTab from '@/components/search-screen/GenreTab';
import Loading from '@/screens/Loading';
import { LinearGradient } from 'expo-linear-gradient';
import { Game } from '@/models/Game';
import GameCard from '@/components/GameCard';
import axios from 'axios';

const initialTags = [
  { title: 'MMORPG', isChecked: false },
  { title: 'Shooter', isChecked: false },
  { title: 'MOBA', isChecked: false },
  { title: 'Anime', isChecked: false },
  { title: 'Battle Royale', isChecked: false },
  { title: 'Strategy', isChecked: false },
  { title: 'Fantasy', isChecked: false },
  { title: 'Sci-Fi', isChecked: false },
  { title: 'Card Games', isChecked: false },
  { title: 'Racing', isChecked: false },
  { title: 'Fighting', isChecked: false },
  { title: 'Social', isChecked: false },
  { title: 'Sports', isChecked: false },
];

export default function Page() {
  const [searchText, setSearchText] = useState<string>('');
  const [tags, setTags] = useState(initialTags);
  const [isLoading, setLoading] = useState(true);
  const [gameList, setGameList] = useState<Game[]>([]);
  const [isColoapsed, setIsColoapsed] = useState(false);


  const getGamesByTags = async () => {
    let params = '';
    const checkedTags = tags.filter(tag => tag.isChecked);
    if (checkedTags.length == 0) {
      await getGamesList();
      return;
    } else if (checkedTags.length == 1) {
      params = checkedTags[0].title.toLowerCase().replace(' ', '-');
    } else {
      params = checkedTags.map(tag => tag.title.toLowerCase().replace(' ', '-')).join('.');
    }

    try {
      const response = await axios.get(`https://www.freetogame.com/api/filter?tag=${params}&platform=pc`);
      if (response.status === 200) {
        setGameList(response.data);
      }

    } catch (err) {
      console.log('Error:', err);
    }
  }


  const getGamesList = async () => {
    try {
      const response = await axios.get('https://www.freetogame.com/api/games?platform=pc');
      if (response.status === 200) {
        setGameList(response.data.slice(0, 50));
      }

    } catch (err) {
      console.log('Error:', err);
    }
  }

  const handleSearch = async() => {
    if(!searchText) {
      setLoading(true);
      await getGamesList();
      setLoading(false);
      return;
    }
    const filter = gameList.filter(game => game.title.includes(searchText));
    setGameList(filter);
  }

  const updateTags = async (index: number) => {
    setLoading(true);
    tags[index].isChecked = !tags[index].isChecked;
    setTags([...tags]);
    await getGamesByTags();
    setLoading(false);
  }

  useEffect(() => {
    const loadData = async () => {
      await getGamesByTags();
      setLoading(false);
    }
    loadData();
  }, [])

  return (
    <SafeAreaView className='bg-background flex-1'>
      <ThemedView className='px-5 mt-3'>

        <View className='justify-center'>
          <TextInput
            className='py-2 px-4 border text-base text-white border-gray-500 rounded-md'
            placeholder='Search here'
            placeholderTextColor='gray'
            value={searchText}
            onChangeText={text => setSearchText(text)} />

          <Text className='absolute right-3'><Ionicons name='search' size={40} color='white' onPress={handleSearch} /></Text>
        </View>

        {!isColoapsed
          ? (
            <View className='h-fit mt-5 flex-row'>
              <View className='w-80'>
                <ScrollView horizontal>
                  {
                    tags.map((tag, index) => (
                      <GenreTab key={index} index={index} tag={tag} updateTags={updateTags} />
                    ))
                  }
                </ScrollView>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['transparent', '#1f1f1f']} className='absolute w-14 h-full right-0'></LinearGradient>
              </View>
              <Ionicons name='caret-down-circle' size={40} color='white' onPress={() => setIsColoapsed(!isColoapsed)} />
            </View>
          )
          : (
            <View className='h-fit mt-5 border-b pb-2 border-white/30'>
              <ScrollView horizontal className='mb-1'>
                <GenreTab index={0} tag={tags[0]} updateTags={updateTags} />
                <GenreTab index={1} tag={tags[1]} updateTags={updateTags} />
                <GenreTab index={2} tag={tags[2]} updateTags={updateTags} />
              </ScrollView>
              <ScrollView horizontal className='mb-1'>
                <GenreTab index={3} tag={tags[3]} updateTags={updateTags} />
                <GenreTab index={12} tag={tags[12]} updateTags={updateTags} />
                <GenreTab index={5} tag={tags[5]} updateTags={updateTags} />
              </ScrollView>
              <ScrollView horizontal className='mb-1'>
                <GenreTab index={6} tag={tags[6]} updateTags={updateTags} />
                <GenreTab index={7} tag={tags[7]} updateTags={updateTags} />
                <GenreTab index={4} tag={tags[4]} updateTags={updateTags} />
              </ScrollView>
              <ScrollView horizontal className='mb-1'>
                <GenreTab index={9} tag={tags[9]} updateTags={updateTags} />
                <GenreTab index={10} tag={tags[10]} updateTags={updateTags} />
                <GenreTab index={11} tag={tags[11]} updateTags={updateTags} />
              </ScrollView>
              <ScrollView horizontal className=''>
                <GenreTab index={8} tag={tags[8]} updateTags={updateTags} />
                <Ionicons name='caret-up-circle' size={44} color='white' onPress={() => setIsColoapsed(!isColoapsed)} />
              </ScrollView>
            </View>
          )}

        {
          isLoading
            ? <Loading />
            :
            (gameList.length == 0)
              ? <View className='flex-1 justify-center items-center'>
                <Text className='text-white/40 mt-2 text-center text-lg'>No Games Found</Text>
                <Image className='w-32 h-32' source={require('@/assets/images/no-data-found.gif')} />
              </View>
              : <View className='flex-1 mt-4'>
                <ThemedText className='mb-3 text-lg text-end'>Results ({gameList.length})</ThemedText>
                <ScrollView className='w-full'>
                  {
                    gameList.map((game, index) => {
                      return <GameCard game={game} key={index} />;
                    })
                  }
                </ScrollView>
              </View>
        }


      </ThemedView>
    </SafeAreaView >
  )
}