import React from 'react'
import { NativeBaseProvider,Link , Box, Image, WarningOutlineIcon, Center, Heading, Input, FormControl, Icon, Button, Checkbox, Text, HStack,VStack} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons/'

export function Entrar(){

    return(
        <NativeBaseProvider>
        <Center 
            height="full"
            _dark={{bg:"black"}}
            _light={{bg: "white"}}
        >
            <Image 
                size={150} resizeMode={"contain"} borderRadius={100}
                source={{      uri: "https://github.com/rodrigorgtic.png"}}
                alt="Foto do Usuário"
            />
            <VStack width="full" p={5}>

                
                <Box width="full">

                <Heading 
                    color="coolGray.700"
                    _dark={{color: "white"}}
                    _light={{color: "black"}}
                >
                    Entrar
                </Heading>


                <FormControl isRequired>
                    <FormControl.Label>E-mail</FormControl.Label>
                    <Input 
                        placeholder='seu@email.com.br' 
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
                        placeholder='sua senha'
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
                        href="https://nativebase.io">
                        Esqueceu a senha?
                        </Link> 
                    </VStack>
                </FormControl>
                    <Button
                        mt="7"
                        colorScheme="purple"
                    >
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
                    _text={{
                        fontSize: "sm",
                        fontWeight: "medium",
                        marginBottom: "-1"
                      }}
                   >
                        clique aqui
                    </Link> 
                </Text>

            </VStack>
        </Center>
        </NativeBaseProvider>
    )
}