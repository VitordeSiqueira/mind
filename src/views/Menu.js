import * as React from 'react';
import { View , TouchableOpacity, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Nome from '../components/NomePerfil'
import DescPerfil from '../components/DescPerfil'
import Example from '../components/Avatar'
import themes from '../themes/padrao'
import { StatusBar } from 'native-base';
const Menu = (props) => {
    return (
        <View style={{flex:1, justifyContent: 'center', backgroundColor: themes.colors.primary} }>
            <DrawerContentScrollView {...props} >
                <View style={{flex: 1, flexDirection:'row', backgroundColor: themes.colors.secondary, paddingTop: 30, paddingBottom: 30}} >
                    <Example />
                    <View>
                        <Nome name="João Vinicius"/>
                        <DescPerfil descricao="Yoga <3"/>
                    </View>
                </View>
                <View style={{margin: 15}}>
                    <DrawerItem label="Exercicios" onPress={() => props.navigation.navigate("Exercicios")}/>
                    <DrawerItem label="Recentes" onPress={() => props.navigation.navigate("Audio")}/>
                    <DrawerItem label="Amigos"  onPress={() => props.navigation.navigate("Exercicios")}/>
                    <DrawerItem label="Configurações"onPress={() => props.navigation.navigate("Configurações")}/>
                    <DrawerItem label="Ajuda"  onPress={() => props.navigation.navigate("Entrar")}/>
                </View>
            </DrawerContentScrollView>

            <StatusBar
                barStyle="light-content"
                />
        </View>
    )
}
export default Menu