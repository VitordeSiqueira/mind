import * as React from 'react';
import { View, Text } from 'react-native';
import themes from '../themes/padrao'

const Nome = ({ name }) => {
    return (
        <View>
            <Text style={{ color: themes.colors.black, fontFamily: themes.fonts.inter.bold, letterSpacing: 1.1, height: 25, fontSize: 14 }}>{name}</Text>
        </View>
    )
}

export default Nome