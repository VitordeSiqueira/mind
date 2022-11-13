import { Center, Circle, HStack, Text, View } from "native-base"
import themes from '../themes/padrao'

export const Progresso = ({ progresso }) => {
    return (
        <HStack space={3} justifyContent="center" marginY={3}>
            <Center
                h="20"
                w="120"
                borderColor="#ccc"
                borderWidth="1"
                bg={themes.colors.brand.cinzaClaro}
                rounded="3xl"
                shadow={3}
            >
                <Text fontSize="md">Ansiedade</Text>
                <View>
                    <HStack space={3} mt="2">
                        <Circle size="35px" bg={themes.colors.brand.cinza}>
                            <Text>{progresso.ansiedade}</Text>
                        </Circle>
                        <Text fontSize="xs">Exercicios{"\n"}realizados</Text>
                    </HStack>
                </View>
            </Center>

            <Center
                h="20"
                w="120"
                borderColor="#ccc"
                borderWidth="1"
                bg={themes.colors.brand.amareloClaro}
                rounded="3xl"
                shadow={3}
            >
                <Text fontSize="md">Ioga</Text>
                <View>
                    <HStack space={3} mt="2">
                        <Circle size="35px" bg={themes.colors.brand.amarelo}>
                            <Text>{progresso.ioga}</Text>
                        </Circle>
                        <Text fontSize="xs">Exercicios{"\n"}realizados</Text>
                    </HStack>
                </View>
            </Center>

            <Center
                h="20"
                w="120"
                borderColor="#ccc"
                borderWidth="1"
                bg={themes.colors.brand.verdeClaro}
                rounded="3xl"
                shadow={3}
            >
                <Text fontSize="md">Meditação</Text>
                <View>
                    <HStack space={3} mt="2">
                        <Circle size="35px" bg={themes.colors.brand.verde}>
                            <Text>{progresso.meditacao}</Text>
                        </Circle>
                        <Text fontSize="xs">Exercicios{"\n"}realizados</Text>
                    </HStack>
                </View>
            </Center>
        </HStack>
    )
}