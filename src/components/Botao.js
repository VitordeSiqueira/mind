import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../themes/padrao'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'
import { RectButton } from 'react-native-gesture-handler'

const MessageButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 16px;
margin-bottom: 16px;
`
const MessageButtonText = styled.Text`
font-size: 17px;
`
const MessageButtonTextBold = styled.Text`
font-size: 17px;
color: ${themes.colors.brand.primario};
font-weight: bold;
margin-left: 8px;
`
export const StyledMessageButton = ({ text, textBold, onPress }) => {
    return (
        <MessageButton
            onPress={onPress}>
            <MessageButtonText>{text}</MessageButtonText>
            <MessageButtonTextBold>{textBold}</MessageButtonTextBold>
        </MessageButton>
    )
}

const CustomButtonPrimario = styled.TouchableOpacity`
flex-direction: row;
height: 50px;
background-color: ${themes.colors.brand.primario};
margin-top: 16px;
border-radius: 10px;
justify-content: center;
align-items: center;
padding-horizontal: 10px;
`

const CustomButtonSecundario = styled.TouchableOpacity`
flex-direction: row;
height: 50px;
background-color: ${themes.colors.brand.secundario};
margin-top: 16px;
border-radius: 10px;
justify-content: center;
align-items: center;
padding-horizontal: 10px;
`

const CustomButtonTerciario = styled.TouchableOpacity`
flex-direction: row;
height: 50px;
background-color: ${themes.colors.brand.terciario};
margin-top: 16px;
border-radius: 10px;
justify-content: center;
align-items: center;
padding-horizontal: 10px;
`
const CustomButtonText = styled.Text`
margin-left: 16px;
font-size: 18px;
color: ${themes.colors.neutral.neutral_100};
`

export const StyledButtonPrimario = ({ icon, text, onPress }) => {
    return (
        <CustomButtonPrimario
            onPress={onPress}>
            <CustomButtonText>{text}</CustomButtonText>
            <MaterialCommunityIcons name={icon} size={30} color={themes.colors.neutral.neutral_100} />
        </CustomButtonPrimario>
    )
}

export const StyledButtonSecundario = ({ icon, text, onPress }) => {
    return (
        <CustomButtonSecundario
            onPress={onPress}>
            <CustomButtonText>{text}</CustomButtonText>
            <MaterialCommunityIcons name={icon} size={30} color={themes.colors.neutral.neutral_100} />
        </CustomButtonSecundario>
    )
}

export const StyledButtonTerciario = ({ icon, text, onPress }) => {
    return (
        <CustomButtonTerciario
            onPress={onPress}>
            <CustomButtonText>{text}</CustomButtonText>
            <MaterialCommunityIcons name={icon} size={30} color={themes.colors.neutral.neutral_100} />
        </CustomButtonTerciario>
    )
}

export const BotaoCategoria = ({ titulo, active, onPress, ...rest }) => {
    return (
        <RectButton
            style={active ? styles.containerActive : styles.container}
            {...rest}
            onPress={onPress}
        >
            <Text fontSize="lg" color={themes.colors.brand.texto} fontWeight="bold">
                {titulo}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: themes.colors.brand.fundoCategoriaExercicios,
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    containerActive: {
        backgroundColor: themes.colors.brand.bordaProgresso,
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        color: themes.colors.brand.texto
    },
    textActive: {
        color: '#fff'
    }
})
