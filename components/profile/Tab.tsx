import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ThemedText } from '../ThemedText'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Props {
    iconName: any;
    label: string;
    onPress: () => void;
}

export default function Tab({ iconName, label, onPress }: Props) {
    return (
        <View>
            <TouchableOpacity className="flex-row items-center justify-center mb-6" onPress={onPress}>
                <Ionicons name={iconName} color='white' size={30} />
                <ThemedText className="text-2xl flex-grow ml-6">{label}</ThemedText>
                <Ionicons name='caret-forward-outline' color='white' size={20} />
            </TouchableOpacity>
        </View>

    )
}