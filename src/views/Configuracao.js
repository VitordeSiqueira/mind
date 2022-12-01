import { Divider, HStack, Text, View } from 'native-base'
import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default ({ navigation }) => {

    return (
        <SafeAreaView style={{ paddingVertical: 15, paddingHorizontal: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Alterar Cadastro')}>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="account-edit" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Alterar dados</Text>
                </HStack>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => navigation.navigate('Alterar Imagem Perfil')}>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="image-edit-outline" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Alterar imagem de perfil</Text>
                </HStack>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="autorenew" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Assinatura</Text>
                </HStack>
            </TouchableOpacity >
            <Divider height='7' />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="bell-outline" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Notificações</Text>
                </HStack>
            </TouchableOpacity >
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="lock-outline" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Configurações de privacidade</Text>
                </HStack>
            </TouchableOpacity >
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="earth" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Idioma</Text>
                </HStack>
            </TouchableOpacity >
            <Divider height='7' />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="file-document-outline" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Termos de uso</Text>
                </HStack>
            </TouchableOpacity >
            <Divider />
            <TouchableOpacity>
                <HStack alignItems="center" space="6" margin="3">
                    <MaterialCommunityIcons name="message-alert" size={35} color="black" />
                    <Text fontSize="xl" fontWeight="semibold">Avisos</Text>
                </HStack>
            </TouchableOpacity >
        </SafeAreaView>
    )
}