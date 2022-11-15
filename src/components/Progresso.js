import { Center, Circle, HStack, Text, View } from "native-base"
import themes from '../themes/padrao'

export const Progresso = ({ progresso }) => {
    return (
        <HStack space={3} justifyContent="center" marginY={3}>
            <Center
                h="24"
                w="120"
                borderColor={themes.colors.brand.bordaProgresso}
                borderWidth="2"
                bg={themes.colors.brand.cinzaClaro}
                rounded="3xl"
                shadow={3}
            >
                <Text color={themes.colors.brand.texto} fontSize="md">Ansiedade</Text>
                <View>
                    <HStack space={3} mt="2">
                        <Circle size="35px" bg={themes.colors.brand.cinza}>
                            <Text fontSize="lg" color={themes.colors.brand.texto} fontWeight="bold">{progresso.ansiedade}</Text>
                        </Circle>
                        <Text color={themes.colors.brand.texto} fontSize="sm">Exercícios{"\n"}realizados</Text>
                    </HStack>
                </View>
            </Center>

            <Center
                h="24"
                w="120"
                borderColor={themes.colors.brand.bordaProgresso}
                borderWidth="2"
                bg={themes.colors.brand.amareloClaro}
                rounded="3xl"
                shadow={3}
            >
                <Text color={themes.colors.brand.texto} fontSize="md">Ioga</Text>
                <View>
                    <HStack space={3} mt="2">
                        <Circle size="35px" bg={themes.colors.brand.amarelo}>
                            <Text fontSize="lg" color={themes.colors.brand.texto} fontWeight="bold">{progresso.ioga}</Text>
                        </Circle>
                        <Text color={themes.colors.brand.texto} fontSize="sm">Exercícios{"\n"}realizados</Text>
                    </HStack>
                </View>
            </Center>

            <Center
                h="24"
                w="120"
                borderColor={themes.colors.brand.bordaProgresso}
                borderWidth="2"
                bg={themes.colors.brand.verdeClaro}
                rounded="3xl"
                shadow={3}
            >
                <Text color={themes.colors.brand.texto} fontSize="md">Meditação</Text>
                <View>
                    <HStack space={3} mt="2">
                        <Circle size="35px" bg={themes.colors.brand.verde}>
                            <Text fontSize="lg" color={themes.colors.brand.texto} fontWeight="bold">{progresso.meditacao}</Text>
                        </Circle>
                        <Text color={themes.colors.brand.texto} fontSize="sm">Exercícios{"\n"}realizados</Text>
                    </HStack>
                </View>
            </Center>
        </HStack>
    )
}