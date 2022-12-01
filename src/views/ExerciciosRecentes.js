import React, { useEffect, useState } from 'react'
import { Alert, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { View, Text, HStack } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import themes from '../themes/padrao'
import Api from '../resources/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Openanything from 'react-native-openanything'
import { useFocusEffect } from '@react-navigation/native';

function ExerciciosRecentes({ navigation }) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const consultaConteudo = async () => {
        setLoading(true)
        const perfil_id = await AsyncStorage.getItem('perfil_id')
        const perfil = await Api.consultaExerciciosRecentes(perfil_id)
        perfil.ok === 0
            ? Alert.alert('Não foi possível consultar os conteudos recentes existentes')
            : setData(perfil[0].conteudo_recente)
        setLoading(false)
    }

    useEffect(() => {
        consultaConteudo()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            consultaConteudo()
        }, [])
    )
    
    async function estadoConteudo(conteudo_id, tipo, url) {
        const perfil_id = await AsyncStorage.getItem('perfil_id')
        let cadastroHistorico = await Api.adicionaHistorico(perfil_id, conteudo_id)
        if (cadastroHistorico.error) {
            Platform.OS === "web"
                ? alert(`‼️Erro: ${cadastroHistorico.error}`)
                : Alert.alert("‼️Erro", cadastroHistorico.error);
        }

        switch (tipo) {
            case "Video":
                navigation.navigate('Video', { urls: url })
                break;
            case "Audio":
                navigation.navigate("Audio", { urls: url })
                break;
            case "Artigo":
                Openanything.Pdf(url)

                break;
        }
    }

    const conteudo = (item) => {
        let iconTipo = ""
        switch (item.tipo) {
            case "Video":
                iconTipo = "play-circle-outline"
                break;
            case "Audio":
                iconTipo = "headphones"
                break;
            case "Artigo":
                iconTipo = "file-document-outline"
                break;
        }
        return (
            <View w="48%" marginX="1%" marginY="1%" backgroundColor={themes.colors.brand.fundoCardExercicio} rounded="xl" borderWidth="1" borderColor={themes.colors.brand.fundoCardExercicio}>
                <TouchableOpacity onPress={() => estadoConteudo(item.conteudo_id, item.tipo, item.url)} key={item.conteudo_id} >
                    <HStack alignSelf="center" padding="2">
                        <MaterialCommunityIcons name={iconTipo} size={70} color={themes.colors.brand.primario} />
                    </HStack>
                    <HStack alignSelf="center" w="100%" h="12" backgroundColor={themes.colors.brand.fundoCardExercicioTexto}>
                        <Text numberOfLines={3} fontSize="md" color={themes.colors.brand.texto} fontWeight="semibold">
                            {item.titulo}
                        </Text>
                    </HStack>
                </TouchableOpacity >
            </View>
        )
    }
    return (
        <SafeAreaView>
            {loading == true ?
                <ActivityIndicator size="large"
                    color={themes.colors.brand.primario} />
                :
                <View margin="2%" >
                    <FlatList
                        data={data}
                        keyExtractor={(item) => String(item.conteudo_id)}
                        renderItem={({ item }) => conteudo(item)}
                        numColumns={2}
                        key={2}

                    />
                </View>
            }
        </SafeAreaView>
    )
}

export default ExerciciosRecentes