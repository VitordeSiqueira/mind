import React, { useState, useEffect } from 'react'
import { Alert, View, StyleSheet, ActivityIndicator } from "react-native";
import themes from '../themes/padrao'
import { AvatarPerfil } from "../components/Avatar";
import Api from '../resources/Api'
import { VStack, Text, Divider, ScrollView, Image } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Progresso } from '../components/Progresso';
import { Conquista } from '../components/Conquista';
import { useFocusEffect } from '@react-navigation/native';

export default ({ navigation }) => {
  const [perfil, setPerfil] = useState()
  const [loading, setLoading] = useState(false)

  const consultaPerfil = async () => {
    setLoading(true)
    const perfil_id = await AsyncStorage.getItem('perfil_id')
    const res = await Api.consultaPerfil(perfil_id)
    res.ok === 0
      ? Alert.alert('Não foi possível consultar o perfil logado')
      : setPerfil(res[0])
    if(perfil){
      await AsyncStorage.setItem("perfil_nome", perfil.nome)
      await AsyncStorage.setItem("perfil_foto_url", perfil.foto_perfil.url)
    }
    setLoading(false)
  }

  useEffect(() => {
    consultaPerfil()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      consultaPerfil()
    }, [])
  )

  return (
    <View style={styles.container}>
      {loading == true ?
        <ActivityIndicator size="large"
          color={themes.colors.brand.primario} />
        : perfil ?
          <ScrollView>
            <View style={styles.info}>
              <AvatarPerfil props={{ url: perfil.foto_perfil ? perfil.foto_perfil.url : "https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png", tamanhoAvatar: "xl", corFonte: themes.colors.neutral.neutral_0, tamanhoFonte: 20, nomePerfil: perfil.nome, amigos: perfil.amigos ? perfil.amigos.length : 0 }} onPress={() => navigation.navigate("Amigos")} />
            </View>

            <Divider />

            <View style={styles.progresso}>
              <VStack space={1} alignItems="center" >
                <Text alignItems="center" fontSize="3xl">
                  Progresso
                </Text>
              </VStack>

              <Progresso progresso={perfil.progresso} />

            </View>

            <Divider />

            <View style={styles.conquista}>
              <VStack space={1} alignItems="center">
                <Text alignItems="center" fontSize="3xl">
                  Conquistas
                </Text>
              </VStack>

              <VStack space={4} alignItems="center">
                {perfil.conquistas ?
                  perfil.conquistas.map((conquista) => (
                    <Conquista conquistaInfo={conquista} key={conquista.id} />
                  ))
                  :
                  <>
                    <Image source={{
                      uri: `https://mind-app-bucket.s3.sa-east-1.amazonaws.com/outros/sad.png`
                    }} alt="Carinha triste" size="md  " />
                    <Text textAlign='center' fontSize="xl">
                      Ainda não obteve nenhuma conquista.{"\n"}Continue a tentar!!
                    </Text>
                  </>
                }
              </VStack>
            </View>
          </ScrollView>
          : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flexDirection: "row",
    marginVertical: 20
  },
  progresso: {
    marginVertical: 20
  },
  conquista: {
    marginVertical: 20
  }
});