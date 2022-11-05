import React from 'react'
import styled from 'styled-components/native'
import themes from '../themes/padrao'

export const Titulo = styled.Text`
text-align: center;
color: ${themes.colors.brand.primario};
font-size: 30px;
margin-top: 16px;
margin-bottom: 16px;
font-weight: bold;
`

export const TituloPreLoad = styled.Text`
text-align: center;
color: ${themes.colors.brand.secundario};
font-size: 30px;
margin-top: 16px;
margin-bottom: 16px;
`
const LinkLegenda = styled.TouchableOpacity`
flex-direction: row;
height: 32px;
margin-top: 8px;
border-radius: 0px;
justify-content: center;
align-items: center;
`
export const Legenda = styled.Text`
margin-left: 16px;
font-size: 18px;
color: ${themes.colors.brand.primario};
`

export const StyledLinkLegenda = ({ text, onPress }) => {
    return (
        <LinkLegenda
            onPress={onPress}>
            <Legenda>{text}</Legenda>
        </LinkLegenda>
    )
}