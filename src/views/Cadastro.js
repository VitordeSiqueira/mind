import React, { useState } from 'react'
import { NativeBaseProvider,Link , Box, Image, WarningOutlineIcon, Center, Heading, Input, FormControl, Icon, Button, Checkbox, Text, HStack,VStack} from 'native-base'
import { StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons/'
import { cnpjMask } from '../components/cnpjMask.js'

function Cadastro() {

  const [values, setValues] = useState({ cnpj: '' })

  const inputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  return(
      <NativeBaseProvider>
      <Center 
          height="full"
          _dark={{bg:"black"}}
          _light={{bg: "white"}}
      >
          <VStack width="full" p={5}>

              
              <Box width="full">

              <Heading 
                  color="coolGray.700"
                  _dark={{color: "white"}}
                  _light={{color: "black"}}
              >
                  Cadastro
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
                      wrapperRef={"0000-0000"}
                      InputLeftElement={
                          <Icon
                          as={<MaterialIcons name="lock" />}
                          size={5}
                          ml={2}
                          color="muted.400"
                          />
                      }
                  />
              </FormControl>

              <FormControl>
                <FormControl.Label>CPF</FormControl.Label>
                <Input
                  keyboardType="numeric"
                />
              </FormControl>
                  <Button
                      mt="7"
                      colorScheme="purple"
                  >
                      Cadastrar-se
                  </Button>
              </Box>




              {/* <HStack mt={5}>
                  <Checkbox value="agree" >
                      <Text  ml={3}>
                          Concordo com a política de segurança
                      </Text>
                  </Checkbox>
              </HStack> */}

          </VStack>
      </Center>
      </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  inputCpf: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#5454ddd'
  }
})

export default Cadastro
