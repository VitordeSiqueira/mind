import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import themes from '../themes/padrao'
import Api from '../resources/Api'
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