import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import themes from '../themes/padrao'

export const InputArea = styled.ScrollView`
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
`

export const InputAreaForEach = styled.View`
    width: 100%;
    height: 50px;
    background-color: ${themes.colors.neutral.neutral_20};
    flex-direction: row;
    border-radius: 32px;
    padding-left: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
`

export const InputAreaForEachPesquisa = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${themes.colors.neutral.neutral_20};
    flex-direction: row;
    border-radius: 32px;
    padding-horizontal: 16px;
    align-items: center;
`
export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${themes.colors.neutral.neutral_0};
    margin-left: 8px;
`

export const BotaoTouch = styled.TouchableOpacity`
    padding-right: 8px; 
`

export const InputCompleto = ({ icon, placeholder, value, onChangeText, password }) => {
    const [senha, setSenha] = useState(password);
    return (
        <InputAreaForEach>
            <MaterialCommunityIcons name={icon} size={30} color={themes.colors.neutral.neutral_80} />
            <Input
                placeholder={placeholder}
                placeholderTextColor={themes.colors.neutral.neutral_80}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={senha}
            />
            {password &&
                <BotaoTouch onPress={() => setSenha(!senha)}>
                    <MaterialCommunityIcons name={senha ? 'eye' : 'eye-off'} size={30} color={themes.colors.neutral.neutral_80} />
                </BotaoTouch>
            }
        </InputAreaForEach>
    )
}

export const InputCompletoDesabilitado = ({ icon, placeholder, value, onChangeText, password }) => {
    const [senha, setSenha] = useState(password);
    return (
        <InputAreaForEach>
            <MaterialCommunityIcons name={icon} size={30} color={themes.colors.neutral.neutral_80} />
            <Input
                placeholder={placeholder}
                placeholderTextColor={themes.colors.neutral.neutral_80}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={senha}
                editable={false}
            />
            {password &&
                <BotaoTouch onPress={() => setSenha(!senha)}>
                    <MaterialCommunityIcons name={senha ? 'eye' : 'eye-off'} size={30} color={themes.colors.neutral.neutral_80} />
                </BotaoTouch>
            }
        </InputAreaForEach>
    )
}

export const InputPesquisa = ({ placeholder, value, onChangeText, onPress }) => {
    return (
        <InputAreaForEach>
            <MaterialCommunityIcons name={icon} size={30} color={themes.colors.neutral.neutral_80} />
            <Input
                placeholder={placeholder}
                placeholderTextColor={themes.colors.neutral.neutral_80}
                value={value}
                onChangeText={onChangeText}
            />
            {value &&
                <BotaoTouch onPress={onPress}>
                    <MaterialCommunityIcons name="close" size={30} color={themes.colors.neutral.neutral_0} />
                </BotaoTouch>
            }
        </InputAreaForEach>
    )
}
