import { HStack, VStack, Text, View, Image } from "native-base"
import themes from '../themes/padrao'
import { MaterialIcons } from '@expo/vector-icons'

export const Conquista = ({ conquistaInfo }) => {
    const numeroAleatorio = Math.floor(Math.random() * 10)

    return (
        <View w="85%" h="20" bg={themes.colors.neutral.neutral_40} rounded="3xl" marginY={3} alignItems='center' justifyContent='center'>
            <HStack w="85%" justifyContent='space-evenly'>
                <VStack justifyContent='center' >
                    <Image source={{
                        uri: `https://mind-app-bucket.s3.sa-east-1.amazonaws.com/outros/trophy${numeroAleatorio}.png`
                    }} alt="Trofeu" size="xs" />
                </VStack>
                <VStack justifyContent='center'>
                    <Text alignItems="center" fontSize="lg">
                        {conquistaInfo.titulo}
                    </Text>

                    <Text alignItems="center" fontSize="sm">
                        {conquistaInfo.descricao}
                    </Text>
                </VStack>
                <VStack justifyContent='center'>
                    <MaterialIcons name="verified" size={50} color={themes.colors.brand.secundario} />
                </VStack>
            </HStack>
        </View>
    )
}