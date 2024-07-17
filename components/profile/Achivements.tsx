import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'

export default function Achivements() {

    const IMAGE_STYLES = 'w-16 h-16 mr-1 mb-1'

    return (
        <View className='w-fit mt-8'>
            <ThemedText className="text-2xl mb-2 text-white">Achievements</ThemedText>
            <ScrollView horizontal>
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/515_For_Just_YOU_and_ME_(2022).webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Emblem_Power.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Emote_Collector.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Infernal_Blaze.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Endless_Variety2.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Fighters_on_Stormy_Sea.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Hero_Mastery.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Killing_Notifications.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/King_Midas.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Modena_Butterfly.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/MVP2.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Peak_Attraction.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Regal_Style.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Rising_Star.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Sacred_Statue.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Spawning_Effects.webp')} />
                <Image className={IMAGE_STYLES} source={require('@/assets/images/achivements/Starlit_Life.webp')} />
            </ScrollView>
        </View>
    )
}