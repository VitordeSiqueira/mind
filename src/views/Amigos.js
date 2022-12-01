import React, { useState, useEffect } from 'react'
import { Alert, View, StyleSheet, ActivityIndicator } from "react-native";
import { AvatarPerfil } from "../components/Avatar";
import themes from '../themes/padrao'
import { Text, Divider, ScrollView } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Api from '../resources/Api';

export default ({ navigation }) => {
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const [perfil, setPerfil] = useState()
    const [loading, setLoading] = useState(false)
    const numColumns = 3

    const consultaPerfil = async () => {
        setLoading(true)
        const perfil_id = await AsyncStorage.getItem('perfil_id')
        const res = await Api.consultaPerfil(perfil_id)
        res.ok === 0
            ? Alert.alert('Não foi possível consultar o perfil logado')
            : setPerfil(res[0])
        setLoading(false)
    }

    useEffect(() => {
        consultaPerfil()
    }, [])

    function renderItem(item) {
        return (
            <TouchableOpacity style={styles.itemAmigo}>
                <AvatarPerfil props={{ url: perfil.foto_perfil ? perfil.foto_perfil.url : "https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png", tamanhoAvatar: "xl", corFonte: themes.colors.neutral.neutral_0, tamanhoFonte: 20, nomePerfil: perfil.nome, amigos: perfil.amigos ? perfil.amigos.length : 0 }} onPress={() => navigation.navigate("Amigos")} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {loading == true ?
                <ActivityIndicator size="large"
                    color={themes.colors.brand.primario} />
                : perfil ?
                    <ScrollView>
                        <View style={styles.info}>
                            <AvatarPerfil props={{ url: perfil.foto_perfil ? perfil.foto_perfil.url : "https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png", tamanhoAvatar: "xl", corFonte: themes.colors.neutral.neutral_0, tamanhoFonte: 20, nomePerfil: perfil.nome, amigos: perfil.amigos ? perfil.amigos.length : 0 }} onPress={() => navigation.navigate("Amigos")} />
                        </View>

                        <Divider />
                    </ScrollView>
                    : null
            }
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