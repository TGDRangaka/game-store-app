import { View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

export default function SlidesPaginatore({data, currentIndex} : any) {
    const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: 'row'}}>
      {
        data.map((_: any, i: number) => {
            // const dotWidth = currentIndex === i ? 10 : 4;
            return <View className='h-2 w-2 rounded-full bg-white/50 mx-1 mt-2' key={i} />
        })
      }
    </View>
  )
}