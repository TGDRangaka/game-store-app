import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

export default function _layout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: '#1f1f1f',
      tabBarInactiveBackgroundColor: '#1f1f1f',
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#1f1f1f',
      tabBarLabelStyle: { fontSize: 12, color: 'white' },
      tabBarLabelPosition: 'below-icon',
      // tabBarStyle: { backgroundColor: '#1f1f1f', height: 50 },
      tabBarItemStyle: { paddingVertical: 5 },
      tabBarIconStyle: { marginBottom: 5}
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