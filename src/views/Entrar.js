import React, { useState, useEffect } from "react";
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

export function Entrar() {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [senhaField, setSenhaField] = useState("");
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch("https://mind-back.onrender.com/perfil")
      .then((response) => response.json())
      .then((json) => {
        setApi(json);
      });
  }, []);

  console.log(api);
  const handleMessageButtonClick = () => {
    //iremos enviá-lo para o SignUp, sem a possibilidade de voltar. (se voltar, fecha o App )
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Cadastro" }],
      })
    );
  };

  const handleSignInClick = async () => {
    if (senhaField && emailField) {
      let res = await Api.signIn(emailField, senhaField);
      if (res.access_token) {
        await AsyncStorage.setItem("token", res.access_token);
        await AsyncStorage.setItem("user_id", res.user_id);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "PreLoad" }],
          })
        );
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
    <NativeBaseProvider>
      <Center height="full" _dark={{ bg: "black" }} _light={{ bg: "white" }}>
        <Image
          size={150}
          resizeMode={"contain"}
          borderRadius={100}
          source={{ uri: "https://github.com/rodrigorgtic.png" }}
          alt="Foto do Usuário"
        />
        <VStack width="full" p={5}>
          <Box width="full">
            <Heading
              color="coolGray.700"
              _dark={{ color: "white" }}
              _light={{ color: "black" }}
            >
              Entrar
            </Heading>

            <FormControl isRequired>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input
                placeholder="seu@email.com.br"
                onChangeText={(t) => setEmailField(t)}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                E-mail inválido
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                placeholder="sua senha"
                onChangeText={(t) => setSenhaField(t)}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size={5}
                    ml={2}
                    color="muted.400"
                  />
                }
              />
              <VStack space={1}>
                <Link
                  justifyContent="flex-end"
                  mt={2}
                  _text={{
                    fontSize: "sm",
                    fontWeight: "medium",
                  }}
                  href="https://nativebase.io"
                >
                  Esqueceu a senha?
                </Link>
              </VStack>
            </FormControl>
            <Button onPress={handleSignInClick} mt="7" colorScheme="purple">
              Entrar
            </Button>
          </Box>

          {/* <HStack mt={5}>
                    <Checkbox value="agree" >
                        <Text  ml={3}>
                            Concordo com a política de segurança
                        </Text>
                    </Checkbox>
                </HStack> */}

          <Text fontSize="xs" mt="7">
            Ainda não tem uma conta?
            <Link
              px="8"
              mt="7"
              onPress={handleMessageButtonClick}
              _text={{
                fontSize: "sm",
                fontWeight: "medium",
                marginBottom: "-1",
              }}
            >
              clique aqui
            </Link>
          </Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
