import * as React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import NomePerfil from '../components/NomePerfil'
import DescPerfil from '../components/DescPerfil'
import AvatarNomePerfil from '../components/AvatarNomePerfil'
import themes from '../themes/padrao'
import Api from '../resources/Api'
import { AuthContext } from '../resources/Context'
import { StatusBar } from 'native-base';


export default (props) => {

    const { sair } = React.useContext(AuthContext);
    //const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: themes.colors.brand.secundario }}>
            <DrawerContentScrollView {...props} >
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: themes.colors.brand.primario, paddingTop: 30, paddingBottom: 30 }} >
                    <AvatarNomePerfil props={{ url: "https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png", tamanhoAvatar: "lg", corFonte: themes.colors.neutral.neutral_0, tamanhoFonte: 20, nomePerfil: "perfil.nome" }} />
                </View>

                <View style={{ margin: 15 }}>
                    <DrawerItem label="Perfil" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Perfil")} />
                    <DrawerItem label="Exercicios" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Exercicios")} />
                    <DrawerItem label="Recentes" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Exercicios")} />
                    <DrawerItem label="Amigos" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Perfil")} />
                    <DrawerItem label="Configurações" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Perfil")} />
                    <DrawerItem label="Ajuda" labelStyle={{ color: '#ffffff', fontSize: 15 }} onPress={() => props.navigation.navigate("Perfil")} />
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
        </View >
    )
}

