import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function _layout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: '#560101',
      tabBarInactiveBackgroundColor: '#560101',
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'red'
    }}
    >
        <Tabs.Screen name='index' options={{
          title: 'Home', 
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? 'white' : 'grey'} />
          ) }} />

        <Tabs.Screen name='search' options={{
          title: 'Search', 
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={focused ? 'white' : 'grey'} />
          ) }} />

        <Tabs.Screen name='profile' options={{
          title: 'Profile', 
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={focused ? 'white' : 'grey'} />
          ) }} />
    </Tabs>
  )
}