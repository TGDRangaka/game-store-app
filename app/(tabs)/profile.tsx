import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import Achivements from '@/components/profile/Achivements';
import Stats from '@/components/profile/Stats';
import Tab from '@/components/profile/Tab';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="bg-background flex-1">
      <ThemedView className="mt-3  px-5">
        <ThemedText className='text-center text-3xl'>My Profile</ThemedText>
        <View className="items-center mt-5">
          <Image
            source={require('@/assets/images/gta-v.png')}
            className="w-24 h-24 rounded-full border-4 border-red-500"
          />
          <ThemedText className="text-3xl text-white mt-2">Dr_Shadow</ThemedText>
          <ThemedText className="text-lg text-red-500">Level 35 Warrior</ThemedText>
        </View>

        <Stats />

        <Achivements />

        <View className="mt-8 pr-5">
          <Tab label='Edit Profile' iconName='person' onPress={() => console.log('Tab Pressed')} />
          <Tab label='Games Progress' iconName='analytics' onPress={() => console.log('Tab Pressed')} />
          <Tab label='Billing Methods' iconName='logo-paypal' onPress={() => console.log('Tab Pressed')} />
          <Tab label='Settings' iconName='settings' onPress={() => console.log('Tab Pressed')} />
          <Tab label='Logout' iconName='log-out' onPress={() => console.log('Tab Pressed')} />
        </View>

      </ThemedView>
      {/* <ThemedView className="flex-1 mt-6 p-4">
        <View className="flex-row justify-between items-center mb-4">
          <ThemedText className="text-xl text-white">Achievements</ThemedText>
          <TouchableOpacity className="flex-row items-center">
            <ThemedText className="text-red-500 mr-2">See All</ThemedText>
            <Ionicons name="chevron-forward" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View className="flex-row flex-wrap justify-between">
          <View className="bg-gray-800 p-4 rounded-lg w-1/2 m-2 items-center">
            <Ionicons name="trophy" size={40} color="red" />
            <ThemedText className="text-white mt-2">Top Scorer</ThemedText>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg w-1/2 mb-4 items-center">
            <Ionicons name="star" size={40} color="red" />
            <ThemedText className="text-white mt-2">MVP</ThemedText>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg w-1/2 mb-4 items-center">
            <Ionicons name="medal" size={40} color="red" />
            <ThemedText className="text-white mt-2">Champion</ThemedText>
          </View>
          <View className="bg-gray-800 p-4 rounded-lg w-1/2 mb-4 items-center">
            <Ionicons name="game-controller" size={40} color="red" />
            <ThemedText className="text-white mt-2">Gamer of the Month</ThemedText>
          </View>
        </View>
      </ThemedView> */}
    </SafeAreaView>
  );
}
