import React from 'react'
import themes from '../themes/padrao'
import { Container } from '../components/Container'
import { TituloPreLoad } from '../components/Texto'
import { ActivityIndicator } from 'react-native'

export default function PreLoad() {

    return (
        <Container>
            <ActivityIndicator size="large"
                color={themes.colors.brand.primario} />
            <TituloPreLoad>Aguarde...</TituloPreLoad>
        </Container>
    )
}