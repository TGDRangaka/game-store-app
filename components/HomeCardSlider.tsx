import { View, Text, FlatList, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'

import slidesData from '@/data/slidesData'
import SlideGameCard from './SlideGameCard'

export default function HomeCardSlider() {
    const { width } = useWindowDimensions();
    return (
        <View className='justify-center items-center'>
            <FlatList
                data={slidesData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width }} className='px-5'>
                            <SlideGameCard item={item} />
                        </View>
                    )
                }}
                horizontal
                pagingEnabled
                bounces={false}
            />
        </View>
    )
}