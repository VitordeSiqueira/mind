import React, { useState, useEffect } from 'react';
import { Alert, View, TouchableOpacity, Text, ActivityIndicator, LogBox } from 'react-native';
import { DrawerContentScrollView, DrawerItem, useDrawerStatus } from '@react-navigation/drawer'
import { AvatarPerfil } from '../components/Avatar'
import themes from '../themes/padrao'
import { AuthContext } from '../resources/Context'
import { StatusBar } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (props) => {
    const { sair } = React.useContext(AuthContext);
    const [perfilNome, setPerfilNome] = useState()
    const [perfilFotoUrl, setPerfilFotoUrl] = useState()
    const [loading, setLoading] = useState(false)

    LogBox.ignoreLogs(["EventEmitter.removeListener"]);

    const consultaDados = async () => {
        setLoading(true)
        const perfil_nome = await AsyncStorage.getItem('perfil_nome')
        const perfil_foto_perfil = await AsyncStorage.getItem('perfil_foto_url')
        setPerfilNome(perfil_nome)
        setPerfilFotoUrl(perfil_foto_perfil)
        setLoading(false)
    }

    useEffect(() => {
        consultaDados()
    }, [useDrawerStatus()])

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: themes.colors.brand.secundario }}>
            {loading == true ?
                <ActivityIndicator size="large"
                    color={themes.colors.brand.primario} />
                : perfilNome ?
                    <>
                        <DrawerContentScrollView {...props} >
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: themes.colors.brand.primario, paddingTop: 30, paddingBottom: 30 }} >
                                <AvatarPerfil props={{ url: perfilFotoUrl ? perfilFotoUrl : "https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png", tamanhoAvatar: "xl", corFonte: themes.colors.neutral.neutral_100, tamanhoFonte: 20, nomePerfil: perfilNome, amigos: null }} />
                            </View>

                            <View style={{ margin: 15 }}>
                                <DrawerItem label="Perfil" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Perfil")} />
                                <DrawerItem label="Exerc??cios" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Exercicios")} />
                                <DrawerItem label="Recentes" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Recentes")} />
                                <DrawerItem label="Amigos" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Amigos")} />
                                <DrawerItem label="Configura????o" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Configura????o")} />
                                <DrawerItem label="Ajuda" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Ajuda")} />
                            </View>
                        </DrawerContentScrollView>

                        <TouchableOpacity
                            style={{
                                margin: 15,
                                bottom: 10,
                                padding: 20,
                                alignItems: 'flex-end'
                            }}
                            onPress={() => {
                                props.navigation.closeDrawer()
                                sair()
                            }}
                        >
                            <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: '700' }}>Sair</Text>
                        </TouchableOpacity>
                        <StatusBar
                            barStyle="light-content"
                        />
                    </>
                    : null
            }
        </View >
    )
}

