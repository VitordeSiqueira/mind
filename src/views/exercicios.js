import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonEnv } from '../components/ButtonEnv'
import Feather from 'react-native-vector-icons/Feather'

function Exercicios({ navigation }) {

    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const [enviromentsSelected, setEnviromentsSelected] = useState('all')

    useEffect(() => {
        fetch('https://mind-back.onrender.com/conteudo')
            .then((response) => response.json())
            .then((json) => { setOriginalData(json); setData(json) })

    }, [])

    function estadoConteudo(tipo, url) {
        console.log(url)
        if (tipo == "Video") {
            navigation.navigate('Video', { urls: url })
        }

        if (tipo == "Audio") {
            navigation.navigate("Audio", { urls: url })
        }

        if (tipo == "Texto") {
            navigation.navigate('Texto')
        }
    }

    function renderPost(item) {
        let iconTipo = ""
        if (item.tipo == "Video") {
            iconTipo = "video"
        } else if (item.tipo = "Audio") {
            iconTipo = "headphones"
        } else if (item.tipo = "Audio") {
            iconTipo = "type"
        }
        return (
            <TouchableOpacity onPress={() => estadoConteudo(item.tipo, item.dados_arquivo.url)}>
                <View style={styles.card}>
                    <View style={styles.icon}>
                        <Feather
                            name={iconTipo}
                            size={25}
                        />
                    </View>
                    <View style={styles.conteudo}>
                        <Text style={styles.title} numberOfLines={1}>
                            {item.titulo}
                        </Text>
                        <Text style={styles.body} numberOfLines={4}>
                            {item.tipo}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    function handleStart() {
        navigation.navigate('Entrar')
    }

    const DATA = [
        {
            id: '1',
            title: 'Ansiedade',
        },
        {
            id: '2',
            title: 'Foco',
        },
        {
            id: '3',
            title: 'Yoga',
        },
        {
            id: '4',
            title: 'Estresse',
        },
        {
            id: '5',
            title: 'Sono',
        },
        {
            id: '6',
            title: 'Psicologia',
        },
    ];


    function search(s) {
        let arr = JSON.parse(JSON.stringify(originalData))
        setData(arr.filter(d => d.titulo.includes(s)))

        //remover assentos da pesquisa e do titulo

        //procurar em lower case ou upper

        //script para procurando tanto no titulo ou corpo 
        //setData(arr.filter(d => d.titulo.includes(s) || d.body.includes(s)))
    }
    return (

        <SafeAreaView>
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder={'Pesquisa aqui'}
                    autoCapitalize="none"
                    onChangeText={(s) => search(s)}
                />
            </View>
            <Button
                onPress={() => console.log('oi')}
                title='Cancelar'
                accessibilityLabel='Cancelar'
            />
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <ButtonEnv
                        title={item.title}
                    />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <FlatList
                data={data}
                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => renderPost(item)}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'powderblue',
        height: 100,
    },
    icon: {
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        borderColor: '#222',
        borderWidth: 1,
        borderRadius: 4,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 14,
        color: '#444',
        fontWeight: '600',
    },
    body: {
        fontSize: 13,
        color: '#777',
        fontWeight: 'normal',
        marginTop: 7,
    },
    input: {
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        marginTop: 10,
        marginHorizontal: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        paddingHorizontal: 32,
        marginVertical: 32
    },
})

export default Exercicios