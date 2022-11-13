import React, { useState, useEffect } from 'react'
import { NativeBaseProvider, Radio, Box, WarningOutlineIcon, Center, Heading, Input, FormControl, Icon, Button, Checkbox, Text, HStack, VStack } from 'native-base'
import { Alert, Platform, ActivityIndicator } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons/'
import { InputArea, InputCompleto } from '../components/Input'
import { StyledButtonPrimario, StyledMessageButton } from '../components/Botao'
import Api from '../resources/Api'
import { Titulo } from '../components/Texto'
import themes from '../themes/padrao'

export default ({ navigation }) => {
  const [cpfField, setCpfField] = useState('')
  const [nomeField, setNomeField] = useState('')
  const [sobrenomeField, setSobrenomeField] = useState('')
  const [telefoneField, setTelefoneField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [senhaField, setSenhaField] = useState('')
  const [planoField, setPlanoField] = useState('')
  const [loading, setLoading] = useState(false)
  const [planos, setPlanos] = useState([])

  const handleCadastroClick = async () => {
    if (cpfField && nomeField && sobrenomeField && telefoneField && emailField && senhaField) {
      let res = await Api.cadastro(cpfField, nomeField, sobrenomeField, telefoneField, emailField, senhaField, planoField)
      if (res.error) {
        Platform.OS === "web"
          ? alert(`‼️Erro: ${res.error}`)
          : Alert.alert("‼️Erro", res.error);
      } else {
        navigation.push("Entrar")
      }
    } else {
      Platform.OS === "web"
        ? alert(`‼️Atenção: Preencha todos os campos`)
        : Alert.alert("‼️Atenção", "Preencha todos os campos");
    }
  };

  const consultaPlanos = async () => {
    setLoading(true)
    let res = await Api.consultaPlanos()
    res.ok === 0
      ? Alert.alert('Não foi possível obter a lista de planos disponiveis')
      : setPlanos(res)
    setLoading(false)
  }

  useEffect(() => {
    consultaPlanos()
  }, [])

  return (
    <Center
      height="full"
      _dark={{ bg: "black" }}
      _light={{ bg: "white" }}
    >
      <VStack width="full" p={5}>

        <Box width="full">

          <Titulo >Cadastrar-se</Titulo>

          <InputArea>
            <InputCompleto
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

            {loading == true ?
              <ActivityIndicator size="large"
                color={themes.colors.brand.primario} />
              : null
            }
            {planos.length ?
              <Radio.Group
                name="radioGroupPlano"
                value={planoField}
                onChange={(nextValue) => {
                  setPlanoField(nextValue);
                }}
              >
                {planos.map((plano) => (
                  <Radio value={plano._id} my="1">
                    {plano.nome}
                  </Radio>
                ))}
              </Radio.Group>
              : null
            }
            <StyledButtonPrimario
              icon="login"
              text="Registrar-se"
              onPress={handleCadastroClick} />
          </InputArea>

          <StyledMessageButton onPress={() => navigation.push("Entrar")} text="Já tem uma conta?" textBold="Faça Login" />
        </Box>
      </VStack>
    </Center >
  )
}
