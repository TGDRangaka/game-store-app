import { View, Text } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    tag: { title: string, isChecked: boolean};
    index: number;
    updateTags: (i:number) => void;
}

export default function GenreTab({ tag, index, updateTags }: Props) {

    const handlePress = () => {
        // console.log(`Selected genre: ${tag.title.toLowerCase().replace(' ', '-')}, index: ${index}`)
        updateTags(index);
    }

    return (
        <GestureHandlerRootView>
            <TouchableOpacity className={`${tag.isChecked ? 'bg-red-500' : 'border border-red-500'} py-2 px-5 rounded-3xl mr-3 mb-1`} onPress={handlePress}>
                <ThemedText>{tag.title}</ThemedText>
            </TouchableOpacity>
        </GestureHandlerRootView>

    )
}