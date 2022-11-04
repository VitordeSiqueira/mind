import * as React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import NomePerfil from '../components/NomePerfil'
import DescPerfil from '../components/DescPerfil'
import Example from '../components/Avatar'
import themes from '../themes/padrao'
import Api from '../resources/Api'
import { AuthContext } from '../resources/Context'
import { StatusBar } from 'native-base';


export default (props) => {

    const { sair } = React.useContext(AuthContext);
    //const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: themes.colors.primary }}>
            <DrawerContentScrollView {...props} >
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: themes.colors.secondary, paddingTop: 30, paddingBottom: 30 }} >
                    <Example url="https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png" />
                    <View>
                        <NomePerfil name="João Vinicius" />
                        <DescPerfil descricao="Yoga <3" />
                    </View>
                </View>

                <View style={{ margin: 15 }}>
                    <DrawerItem label="Exercicios" onPress={() => props.navigation.navigate("Exercicios")} />
                    <DrawerItem label="Recentes" onPress={() => props.navigation.navigate("Audio")} />
                    <DrawerItem label="Amigos" onPress={() => props.navigation.navigate("Exercicios")} />
                    <DrawerItem label="Configurações" onPress={() => props.navigation.navigate("Cadastro")} />
                    <DrawerItem label="Ajuda" onPress={() => props.navigation.navigate("Entrar")} />
                    <DrawerItem label="Perfil" onPress={() => props.navigation.navigate("Perfil")} />
                </View>
            </DrawerContentScrollView>

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    margin: 15,
                    bottom: 10,
                    padding: 20,
                }}
                onPress={() => {
                    props.navigation.closeDrawer()
                    sair()
                }}
            >
                <Text>Sair</Text>
            </TouchableOpacity>
            <StatusBar
                barStyle="light-content"
            />
        </View >
    )
}

