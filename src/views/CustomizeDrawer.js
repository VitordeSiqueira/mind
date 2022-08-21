import * as React from 'react';
import { View } from 'react-native';
import {DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Nome from '../components/NomePerfil'
import DescPerfil from '../components/DescPerfil'
import FotoPerfil from '../components/FotoPerfil'


const CustomizeDrawer = (props) => {
    return (
        <View style={{flex:1, justifyContent: 'center', backgroundColor: '#7764CF'}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#7764CF'}}>
                <View style={{flex: 1, alignItems:'center', flexDirection:'row', backgroundColor: '#4F3AAF', paddingTop: 30, paddingBottom: 30}} >
                    <FotoPerfil foto={require('../components/icon.png')} />
                    <View>
                        <Nome name="Vitor"/>
                        <DescPerfil descricao="Yoga <3"/>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
         
        </View>
    )
}

export default CustomizeDrawer