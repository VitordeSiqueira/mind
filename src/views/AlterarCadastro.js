import React, { useState, useEffect } from 'react'
import { Box, VStack } from 'native-base'
import { Alert, Platform, ActivityIndicator } from 'react-native'
import { InputArea, InputCompleto, InputCompletoDesabilitado } from '../components/Input'
import { StyledButtonPrimario } from '../components/Botao'
import Api from '../resources/Api'
import themes from '../themes/padrao'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

export default ({ navigation }) => {
    const [perfil, setPerfil] = useState()
    const [perfilId, setPerfilId] = useState('')
    const [cpfField, setCpfField] = useState('')
    const [nomeField, setNomeField] = useState('')
    const [sobrenomeField, setSobrenomeField] = useState('')
    const [telefoneField, setTelefoneField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [senhaField, setSenhaField] = useState('')
    const [loading, setLoading] = useState(false)

    const handleCadastroClick = async () => {
        if (cpfField && nomeField && sobrenomeField && telefoneField && emailField && senhaField) {
            let res = await Api.alterarCadastro(perfilId, cpfField, nomeField, sobrenomeField, telefoneField, emailField, senhaField)
            if (res.error) {
                Platform.OS === "web"
                    ? alert(`‼️Erro: ${res.error}`)
                    : Alert.alert("‼️Erro", res.error);
            } else {
                navigation.navigate("Configuração")
            }
        } else {
            Platform.OS === "web"
                ? alert(`‼️Atenção: Preencha todos os campos`)
                : Alert.alert("‼️Atenção", "Preencha todos os campos");
        }
    }

    const consultaPerfil = async () => {
        setLoading(true)
        const perfil_id = await AsyncStorage.getItem('perfil_id')
        setPerfilId(perfil_id)
        const res = await Api.consultaPerfil(perfil_id)
        res.ok === 0
            ? Alert.alert('Não foi possível consultar o perfil logado')
            : setPerfil(res[0])
        setLoading(false)
    }

    useFocusEffect(
        React.useCallback(() => {
            consultaPerfil()
            setSenhaField('')
        }, [])
    )

    useEffect(() => {
        if (perfil) {
            setCpfField(perfil.cpf)
            setEmailField(perfil.login.email)
            setNomeField(perfil.nome)
            setSobrenomeField(perfil.sobrenome)
            setTelefoneField(perfil.telefone)
        }
    }, [perfil])

    useEffect(() => {
        consultaPerfil()
    }, [])

    return (
        <VStack width="full" p={5}>
            {loading == true ?
                <ActivityIndicator size="large"
                    color={themes.colors.brand.primario} />
                : perfil ?
                    <Box width="full">
                        <InputArea>
                            <InputCompletoDesabilitado
                                icon="human"
                                placeholder="Digite o seu CPF"
                                value={cpfField}
                                onChangeText={t => setCpfField(t)} />
                            <InputCompleto
                                icon="human"
                                placeholder="Digite o seu primeiro nome"
                                value={nomeField}
                                onChangeText={t => setNomeField(t)}
                            />
                            <InputCompleto
                                icon="human"
                                placeholder="Digite o seu sobrenome"
                                value={sobrenomeField}
                                onChangeText={t => setSobrenomeField(t)}
                            />
                            <InputCompleto
                                icon="phone"
                                placeholder="Digite o seu telefone"
                                value={telefoneField}
                                onChangeText={t => setTelefoneField(t)}
                            />
                            <InputCompleto
                                icon="email"
                                placeholder="Digite o seu e-mail"
                                value={emailField}
                                onChangeText={t => setEmailField(t)}
                            />
                            <InputCompleto
                                icon="lock"
                                placeholder="Digite a sua senha"
                                value={senhaField}
                                onChangeText={t => setSenhaField(t)}
                                password={true}
                            />


                            <StyledButtonPrimario
                                icon="content-save"
                                text="Salvar"
                                onPress={handleCadastroClick} />
                        </InputArea>

                    </Box>
                    : null}
        </VStack>
    )
}
