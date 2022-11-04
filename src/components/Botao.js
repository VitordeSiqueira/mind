import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import themes from '../themes/padrao'

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