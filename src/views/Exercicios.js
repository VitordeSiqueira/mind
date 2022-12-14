import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { View, Text, HStack, VStack } from 'native-base';
import { BotaoCategoria } from '../components/Botao'
import { BotaoTouch, InputAreaForEachPesquisa, Input } from '../components/Input';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import themes from '../themes/padrao'
import Api from '../resources/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Openanything from 'react-native-openanything'
import { useFocusEffect } from '@react-navigation/native';

function Exercicios({ navigation }) {
    const [data, setData] = useState()
    const [dataPesquisa, setDataPesquisa] = useState([])
    const [dataCategoria, setDataCategoria] = useState([])
    const [textoDigitadoPesquisa, setTextoDigitadoPesquisa] = useState("")
    const [inputPesquisa, setInputPesquisa] = useState(false)
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)
    const [loading, setLoading] = useState(false)
    const categorias = [
        {
            id: '1',
            titulo: 'Ansiedade'
        },
        {
            id: '2',
            titulo: 'Ioga'
        },
        {
            id: '3',
            titulo: 'Meditação'
        }
    ];

    const consultaConteudo = async () => {
        setLoading(true)
        const conteudos = await Api.consultaConteudo()
        conteudos.ok === 0
            ? Alert.alert('Não foi possível consultar os conteudos existentes')
            : setData(conteudos)
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

    useEffect(() => {
        if (textoDigitadoPesquisa) {
            if (dataCategoria.length) {
                setDataPesquisa(dataCategoria.filter(d => d.titulo.includes(textoDigitadoPesquisa)))
            } else {
                setDataPesquisa(data.filter(d => d.titulo.includes(textoDigitadoPesquisa)))
            }
        } else {
            setDataPesquisa([])
        }
    }, [textoDigitadoPesquisa])

    useEffect(() => {
        if (categoriaSelecionada) {
            setDataCategoria(data.filter(d => d.categoria == categoriaSelecionada))
        }

        if (categoriaSelecionada == null) {
            setDataCategoria([])
        }
    }, [categoriaSelecionada])

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
                <TouchableOpacity onPress={() => estadoConteudo(item._id, item.tipo, item.dados_arquivo.url)} key={item._id} >
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
            <View alignSelf="center" marginTop="3">
                <HStack space={5} alignItems="center" h="12">
                    <VStack w="80" >
                        {inputPesquisa ?
                            <InputAreaForEachPesquisa>
                                <Input
                                    placeholder="Digite o que deseja"
                                    value={textoDigitadoPesquisa}
                                    onChangeText={t => setTextoDigitadoPesquisa(t)}
                                />
                                {textoDigitadoPesquisa ?
                                    <BotaoTouch onPress={() => setTextoDigitadoPesquisa("")}>
                                        <MaterialCommunityIcons name="close" size={25} color={themes.colors.neutral.neutral_0} />
                                    </BotaoTouch>
                                    : null
                                }
                            </InputAreaForEachPesquisa>
                            :
                            <HStack justifyContent="space-evenly">
                                {categorias.map((categoria) => (
                                    <BotaoCategoria
                                        titulo={categoria.titulo}
                                        key={categoria.id}
                                        active={categoriaSelecionada == categoria.titulo ? true : false}
                                        onPress={() => categoriaSelecionada !== categoria.titulo ? setCategoriaSelecionada(categoria.titulo) : setCategoriaSelecionada(null)}
                                    />
                                ))}
                            </HStack>
                        }
                    </VStack>

                    <VStack>
                        <BotaoTouch onPress={() => inputPesquisa ? setInputPesquisa(false) : setInputPesquisa(true)}>
                            <MaterialCommunityIcons name="magnify" size={30} color="black" />
                        </BotaoTouch>
                    </VStack>
                </HStack>
            </View>

            {loading == true ?
                <ActivityIndicator size="large"
                    color={themes.colors.brand.primario} />
                :
                <View margin="2%" >
                    <FlatList
                        data={textoDigitadoPesquisa ? dataPesquisa : dataCategoria.length ? dataCategoria : data}
                        keyExtractor={(item) => String(item._id)}
                        renderItem={({ item }) => conteudo(item)}
                        numColumns={2}
                        key={2}

                    />
                </View>
            }
        </SafeAreaView>
    )
}

export default Exercicios