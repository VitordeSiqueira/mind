import { Divider, HStack, Text, View } from 'native-base'
import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default ({ navigation }) => {

    return (
        <SafeAreaView style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="head-question-outline" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Como usar o .mind</Text>
                </HStack>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="frequently-asked-questions" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Perguntas frequentes</Text>
                </HStack>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="database" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Dados do aplicativo</Text>
                </HStack>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="phone-in-talk-outline" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Fale conosco</Text>
                </HStack>
            </TouchableOpacity>

        </SafeAreaView>
    )
}