import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import Achivements from '@/components/profile/Achivements';
import Stats from '@/components/profile/Stats';
import Tab from '@/components/profile/Tab';
import { useRouter } from 'expo-router';

export default function Page() {
    const router = useRouter();
  return (
    <SafeAreaView className="bg-background flex-1">
      <ThemedView className="mt-3  px-5">
        {/* <ThemedText className='text-center text-3xl'>My Profile</ThemedText> */}
        <View className="items-center mt-5">
          <Image
            source={require('@/assets/images/gta-v.png')}
            className="w-24 h-24 rounded-full border-4 border-red-500"
          />
          <ThemedText className="text-3xl text-white mt-2" style={{ fontFamily: 'Audiowide' }}>Dr_Shadow</ThemedText>
          <ThemedText className="text-lg text-red-400">Level 35 Warrior</ThemedText>
        </View>

        <Stats />

        <Achivements />

        <View className="mt-8 pr-5">
          <Tab label='Edit Profile' iconName='person' onPress={() => router.push('/profile/info')} />
          <Tab label='Games Progress' iconName='analytics' onPress={() => router.push('/profile/game_progress')} />
          <Tab label='Billing Methods' iconName='logo-paypal' onPress={() => router.push('/profile/billing')} />
          <Tab label='Settings' iconName='settings' onPress={() => router.push('/profile/settings')} />
          <Tab label='Logout' iconName='log-out' onPress={() => router.push('/')} />
        </View>

      </ThemedView>
    </SafeAreaView>
  );
}
