// Descrição do perfill
import * as React from 'react';
import { View, Text } from 'react-native';
import themes from '../themes/padrao'

const DescPerfil =({descricao}) => {
    return (
        <View>
            <Text style={{color: themes.colors.white, letterSpacing:1.1,width: 140, height: 40, fontSize: 10, fontFamily: themes.fonts.inter.regular}}>ut perspiciatis asd asd sa d wqdqw dqwdasd unde omnis iste natus error sit mag</Text>
        </View>
    )
}

export default DescPerfil