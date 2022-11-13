import React, { useState } from "react";
import {
  NativeBaseProvider,
  Link,
  Box,
  Image,
  WarningOutlineIcon,
  Center,
  Heading,
  Input,
  FormControl,
  Icon,
  Button,
  Checkbox,
  Text,
  HStack,
  VStack,
  View,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons/";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Alert, Platform } from 'react-native'
import { InputArea, InputCompleto } from '../components/Input'
import { StyledButtonPrimario, StyledMessageButton } from '../components/Botao'
import { Titulo, StyledLinkLegenda } from '../components/Texto'
import Api from '../resources/Api'
import { AuthContext } from '../resources/Context'

export default function Entrar({ navigation }) {
  //const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [senhaField, setSenhaField] = useState("");

  const { entrar } = React.useContext(AuthContext);

  const handleEntrarClick = async () => {
    if (senhaField && emailField) {
      let res = await Api.entrar(emailField, senhaField);
      if (res.access_token) {
        await AsyncStorage.setItem("token", res.access_token)
        await AsyncStorage.setItem("perfil_id", res.perfil_id)
        entrar(res.access_token)
      } else {
        Platform.OS === "web"
          ? alert(`‼️Erro: ${res.error}`)
          : Alert.alert("‼️Erro", res.error)
      }
    } else {
      Platform.OS === "web"
        ? alert(`‼️Atenção: Preencha todos os campos`)
        : Alert.alert("‼️Atenção", "Preencha todos os campos")
    }
  };

  return (
    <Center height="full" _dark={{ bg: "black" }} _light={{ bg: "white" }}>
      <Image
        size={150}
        resizeMode={"contain"}
        source={{ uri: "https://mind-app-bucket.s3.sa-east-1.amazonaws.com/outros/logo.png" }}
        alt="Foto do Usuário"
      />
      <VStack width="full" p={5}>
        <Titulo>
          Bem vindo!
        </Titulo>

        <InputArea>
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
          <StyledLinkLegenda text="Esqueceu a senha?" />

          <StyledButtonPrimario
            icon="login"
            text="Login"
            onPress={handleEntrarClick} />

        </InputArea>

        <StyledMessageButton onPress={() => navigation.push("Cadastro")} text="Ainda não tem uma conta?" textBold="Registre-se" />

      </VStack>
    </Center>
  );
}
