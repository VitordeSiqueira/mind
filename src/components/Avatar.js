import * as React from 'react';
import { Avatar, HStack, Center, NativeBaseProvider, Text, View } from 'native-base';

export const AvatarPerfil = ({ props, onPress }) => {
    return (
        <NativeBaseProvider>
            <HStack justifyContent="center">
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: 'space-evenly'
                }}>
                    <View>
                        <Avatar Avatar alignSelf="center" bg="green.500" size={props.tamanhoAvatar} source={{
                            uri: props.url
                        }}>
                            Imagem avatar
                        </Avatar>
                    </View>
                    <View style={{
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: props.corFonte, letterSpacing: 1, fontSize: props.tamanhoFonte }}>{props.nomePerfil}</Text>
                        {props.amigos !== null ?
                            <Text onPress={onPress}>{props.amigos} Amigos</Text>
                            : null
                        }
                    </View>
                </View>
            </HStack >
        </NativeBaseProvider >
    )
}

export const AvatarAmigo = ({ props, onPress }) => {
    return (
        <NativeBaseProvider>
            <HStack justifyContent="center">
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: 'space-evenly'
                }}>
                    <View>
                        <Avatar Avatar alignSelf="center" bg="green.500" size={props.tamanhoAvatar} source={{
                            uri: props.url
                        }}>
                            Imagem avatar
                        </Avatar>
                        <Text style={{ color: props.corFonte, letterSpacing: 1, fontSize: props.tamanhoFonte }}>{props.nomePerfil}</Text>
                    </View>
                </View>
            </HStack >
        </NativeBaseProvider >
    )
}
