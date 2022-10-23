import React from "react";
import { View, StyleSheet } from "react-native";
import Example from "../components/Avatar";
import Nome from "../components/NomePerfil";
import DescPerfil from "../components/DescPerfil";

import { VStack, Text, HStack, Center, Circle, Divider, Box } from "native-base";

function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Example />
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

          <Center h="20" w="120" bg="primary.300" rounded="md" shadow={3}>
            Ansiedade
            <View >
              <HStack space={3} mt="2">
                <Circle size="35px" bg="secondary.400">
                  <Text>35</Text>
                </Circle>
                <Text fontSize="xs">Exercicios</Text>
              </HStack>
            </View>
          </Center>

          <Center h="20" w="120" bg="primary.300" rounded="md" shadow={3}>
            Foco
            <View >
              <HStack space={3} mt="2">
                <Circle size="35px" bg="secondary.400">
                  <Text>50</Text>
                </Circle>
                <Text fontSize="xs">Exercicios</Text>
              </HStack>
            </View>
          </Center>

          <Center h="20" w="120" bg="primary.300" rounded="md" shadow={3}>
            Yoga
            <View >
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

export default Perfil;
