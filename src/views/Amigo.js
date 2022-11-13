import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from "react-native";
import Example from "../components/Avatar";
import Nome from "../components/NomePerfil";
import DescPerfil from "../components/DescPerfil";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
    VStack,
    Text,
    HStack,
    Center,
    Circle,
    Divider,
    ScrollView,
    Heading,
} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
const numColumns = 3
export default function Amigos({ navigation }) {

    // const consultaPerfil = async () => {
    //   const token = await AsyncStorage.getItem('perfil')
    // }

    // useEffect(() => {
    //   consultaPerfil()
    // }, [])

    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])


    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then((response) => response.json())
            .then((json) => { setOriginalData(json); setData(json) })

    }, [])



    function renderItem(item) {
        console.log(item.url)
        return (
            <TouchableOpacity style={styles.itemAmigo}>
                <Example url={item.url} size="xl" />
            </TouchableOpacity>
        )
    }



    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.info}>
                    <Example url="https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png" size="2xl" />
                    <Text style={styles.text}>39 Amigos</Text>
                </View>
                <Divider my={7} />
                <View style={styles.amigos}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => renderItem(item)}
                        numColumns={numColumns}

                    />

                </View>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    info: {
        marginTop: 70,
        paddingHorizontal: 20,

    },
    text: {
        color: "black",
        textAlign: 'center',
        paddingVertical: 20,
        fontSize: 18
    },
    amigos: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemAmigo: {
        margin: 6
    }
});