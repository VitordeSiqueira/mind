// Descrição do perfill
import * as React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import themes from '../themes/padrao'

const OpcaoMenu =({texto, prop,tela}) => {
    const [active, setActive] = React.useState()

    return (
        <TouchableOpacity onPress={() => prop.navigation.navigate(tela)} style={{backgroundColor: "#000", marginBottom: 26, marginHorizontal: 15}}>
            <Text style={{color:themes.colors.white, fontSize: 16, padding: 10}}>{texto}</Text>
        </TouchableOpacity>
    )
}

export default OpcaoMenu