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
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons/";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Alert, Platform } from 'react-native'
import { InputArea, InputSignInUp } from '../components/Input'
import { StyledButtonPrimario, StyledMessageButton } from '../components/Botao'
import { Titulo, StyledLinkLegenda } from '../components/Texto'
import Api from '../resources/Api'
import { AuthContext } from '../resources/Context'

export default function Entrar({ navigation }) {
  //const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [senhaField, setSenhaField] = useState("");

  const handleRedirectCadastroButtonClick = () => {
    //Redireciiona para o Cadastro, sem a possibilidade de voltar. (se voltar, fecha o App )
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Cadastro" }],
      })
    );
  };
  const { entrar } = React.useContext(AuthContext);

  const handleEntrarClick = async () => {
    if (senhaField && emailField) {
      let res = await Api.entrar(emailField, senhaField);
      console.log('teste')
      if (res.access_token) {
        await AsyncStorage.setItem("token", res.access_token);
        await AsyncStorage.setItem("perfil_id", res.perfil_id);
        entrar(res.access_token)
      } else {
        Platform.OS === "web"
          ? alert(`‼️Erro: ${res.errors[0].msg}`)
          : Alert.alert("‼️Erro", res.errors[0].msg);
      }
    } else {
      Platform.OS === "web"
        ? alert(`‼️Atenção: Preencha todos os campos`)
        : Alert.alert("‼️Atenção", "Preencha todos os campos");
    }
  };

  return (
    <Center height="full" _dark={{ bg: "black" }} _light={{ bg: "white" }}>
      <Image
        size={150}
        resizeMode={"contain"}
        borderRadius={100}
        source={{ uri: "https://github.com/rodrigorgtic.png" }}
        alt="Foto do Usuário"
      />
      <VStack width="full" p={5}>

        <Titulo>
          Bem vindo!
        </Titulo>

        <InputArea>
          <InputSignInUp
            icon="email"
            placeholder="Digite o seu e-mail"
            value={emailField}
            onChangeText={t => setEmailField(t)}
          />
          <InputSignInUp
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
