import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from "react-native";
import Example from "../components/Avatar";
import Nome from "../components/NomePerfil";
import DescPerfil from "../components/DescPerfil";
import AntDesign from "react-native-vector-icons/AntDesign";

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

export default () => {
  
  const consultaPerfil = async () => {
    const token = await AsyncStorage.getItem('perfil')
  }
  
  useEffect(() => {
    consultaPerfil()
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.info}>
          <Example url="https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png" />
          <View alignSelf="center">
            <Nome name="João Vinicius" />
            <DescPerfil descricao="Yoga <3" />
            <Text style={styles.text}>39 Amigos</Text>
          </View>
        </View>
        <Divider my={7} />

        <View style={styles.progresso}>
          <VStack space={1} alignItems="center" my="1">
            <Text alignItems="center" fontSize="3xl">
              Progresso
            </Text>
          </VStack>

          <HStack space={3} justifyContent="center" my="5">
            <Center
              h="20"
              w="120"
              borderColor="#ccc"
              borderWidth="1"
              bg="primary.300"
              rounded="md"
              shadow={3}
            >
              Ansiedade
              <View>
                <HStack space={3} mt="2">
                  <Circle size="35px" bg="secondary.400">
                    <Text>35</Text>
                  </Circle>
                  <Text fontSize="xs">Exercicios</Text>
                </HStack>
              </View>
            </Center>

            <Center
              h="20"
              w="120"
              borderColor="#ccc"
              borderWidth="1"
              bg="primary.300"
              rounded="md"
              shadow={3}
            >
              Foco
              <View>
                <HStack space={3} mt="2">
                  <Circle size="35px" bg="secondary.400">
                    <Text>50</Text>
                  </Circle>
                  <Text fontSize="xs">Exercicios</Text>
                </HStack>
              </View>
            </Center>

            <Center
              h="20"
              borderColor="#ccc"
              borderWidth="1"
              w="120"
              bg="primary.300"
              rounded="md"
              shadow={3}
            >
              Yoga
              <View>
                <HStack space={3} mt="2">
                  <Circle size="35px" bg="secondary.400">
                    <Text>12</Text>
                  </Circle>
                  <Text fontSize="xs">Exercicios</Text>
                </HStack>
              </View>
            </Center>
          </HStack>
          <Divider my={7} />
        </View>

        <View style={styles.conquista}>
          <VStack space={1} alignItems="center" my="1">
            <Text alignItems="center" fontSize="3xl">
              Conquistas
            </Text>
          </VStack>

          <VStack space={4} alignItems="center">
            <Center w="90%" h="20" bg="indigo.300" rounded="md">
              <HStack>
                <Circle size="40px" bg="secondary.400" mr={5}>
                  <Text>12</Text>
                </Circle>
                <VStack>
                  <Text alignItems="center" fontSize="md">
                    Determinado
                  </Text>

                  <Text alignItems="center" fontSize="xs">
                    Pratique algum exercício 7 dias seguidos
                  </Text>
                </VStack>

                <Circle size="40px" bg="secondary.400" ml={5}>
                  <Text>12</Text>
                </Circle>
              </HStack>
            </Center>
            <Center w="90%" h="20" bg="indigo.300" rounded="md">
              <HStack>
                <Circle size="40px" bg="secondary.400" mr={5}>
                  <Text>12</Text>
                </Circle>
                <VStack>
                  <Text alignItems="center" fontSize="md">
                    Determinado
                  </Text>

                  <Text alignItems="center" fontSize="xs">
                    Pratique algum exercício 7 dias seguidos
                  </Text>
                </VStack>

                <Circle size="40px" bg="secondary.400" ml={5}>
                  <Text>12</Text>
                </Circle>
              </HStack>
            </Center>
            <Center w="90%" h="20" bg="indigo.300" rounded="md">
              <HStack>
                <Circle size="40px" bg="secondary.400" mr={5}>
                  <Text>12</Text>
                </Circle>
                <VStack>
                  <Text alignItems="center" fontSize="md">
                    Determinado
                  </Text>

                  <Text alignItems="center" fontSize="xs">
                    Pratique algum exercício 7 dias seguidos
                  </Text>
                </VStack>

                <Circle size="40px" bg="secondary.400" ml={5}>
                  <Text>12</Text>
                </Circle>
              </HStack>
            </Center>
            <Center w="90%" h="20" bg="indigo.300" rounded="md">
              <HStack>
                <Circle size="40px" bg="secondary.400" mr={5}>
                  <Text>12</Text>
                </Circle>
                <VStack>
                  <Text alignItems="center" fontSize="md">
                    Determinado
                  </Text>

                  <Text alignItems="center" fontSize="xs">
                    Pratique algum exercício 7 dias seguidos
                  </Text>
                </VStack>

                <Circle size="40px" bg="secondary.400" ml={5}>
                  <Text>12</Text>
                </Circle>
              </HStack>
            </Center>
          </VStack>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    marginTop: 70,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  text: {
    color: "black",
  },
});