// Descrição do perfill
import * as React from 'react';
import { View, Text } from 'react-native';
import themes from '../themes/padrao'

const DescPerfil =({descricao}) => {
    return (
        <View>
            <Text style={{color: themes.colors.white, marginRight: 16, letterSpacing:1.1,width: 140, height: 40, fontSize: 10, fontFamily: themes.fonts.inter.regular}}>{descricao}</Text>
        </View>
    )
}

export default DescPerfil