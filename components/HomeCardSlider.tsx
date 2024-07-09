import { View, Text, FlatList, ScrollView, useWindowDimensions, Animated } from 'react-native'
import React, { useRef, useState } from 'react'

import slidesData from '@/data/slidesData'
import SlideGameCard from './SlideGameCard'
import SlidesPaginatore from './SlidesPaginatore';

export default function HomeCardSlider() {
    const { width } = useWindowDimensions();

    const [currentIndex, setCurrentIndex] = useState(0);
    let scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({viewableItems}: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    // const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

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
                onScroll={Animated.event([{nativeEvent: { contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                onViewableItemsChanged={viewableItemsChanged}
            />
            <SlidesPaginatore data={slidesData} currentIndex={currentIndex} />
        </View>
    )
}