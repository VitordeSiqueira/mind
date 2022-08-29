import * as React from 'react';
import { View } from 'react-native';
import {DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Nome from '../components/NomePerfil'
import DescPerfil from '../components/DescPerfil'
import Example from '../components/Avatar'
import themes from '../themes/padrao'

const Menu = (props) => {
    return (
        <View style={{flex:1, justifyContent: 'center', backgroundColor: themes.colors.primary} }>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: themes.colors.primary}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: themes.colors.secondary, paddingTop: 30, paddingBottom: 30}} >
                    <Example />
                    <View>
                        <Nome name="João Vinicius"/>
                        <DescPerfil descricao="Yoga <3"/>
                    </View>
                </View>
                <DrawerItemList {...props } />
 
            </DrawerContentScrollView>
        </View>
    )
}
export default Menu