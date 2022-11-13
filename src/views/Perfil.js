import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from "react-native";
import themes from '../themes/padrao'

import AvatarNomePerfil from "../components/AvatarNomePerfil";
import Api from '../resources/Api'

import {
  VStack,
  Text,
  HStack,
  Center,
  Circle,
  Divider,
  ScrollView,
  Heading,
} from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Progresso } from '../components/Progresso';
import { Titulo2 } from '../components/Texto';
import { Conquista } from '../components/Conquista';

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
    setLoading(false)
  }
  useEffect(() => {
    consultaPerfil()
  }, [])


  return (

    <View style={styles.container}>
      {loading == true ?
        <ActivityIndicator size="large"
          color={themes.colors.brand.primario} />
        : perfil ?
          <ScrollView>
            <View style={styles.info}>
              <AvatarNomePerfil props={{ url: perfil.foto_perfil ? perfil.foto_perfil.url : "", tamanhoAvatar: "xl", corFonte: themes.colors.neutral.neutral_0, tamanhoFonte: 20, nomePerfil: perfil.nome }} />
              <Text style={styles.text} onPress={() => navigation.navigate("Amigos")}>39 Amigos</Text>
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
                  <Text textAlign='center' fontSize="xl">
                    Ainda não obteve nenhum conquista.{"\n"}Continue a tentar!!
                  </Text>
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
  text: {
    color: "black",
  },
  progresso: {
    marginVertical: 20
  },
  conquista: {
    marginVertical: 20
  }
});