import React, { useState, useEffect } from 'react'
import { HStack, Avatar } from 'native-base'
import { Alert, Platform, ActivityIndicator, View, SafeAreaView } from 'react-native'
import Api from '../resources/Api'
import themes from '../themes/padrao'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { StyledButtonPrimario, StyledButtonSecundario } from '../components/Botao'
import * as ImagePicker from 'expo-image-picker';

export default ({ navigation }) => {
    const [perfil, setPerfil] = useState()
    const [perfilId, setPerfilId] = useState('')
    const [loading, setLoading] = useState(false)
    const [foto, setFoto] = React.useState(null);

    const handleSalvarClick = async () => {
        if (foto !== perfil.foto_perfil.url && perfilId) {
            let filename = foto.split('/').pop()
            let uriParts = foto.split('.')
            let fileType = uriParts[uriParts.length - 1]
            let formData = new FormData();
            formData.append('arquivo', {
                uri: foto, name: filename, type: `image/${fileType}` });
            let res = await Api.alterarImagemPerfil(perfilId, formData)
            if (res.error) {
                Platform.OS === "web"
                    ? alert(`‼️Erro: ${res.error}`)
                    : Alert.alert("‼️Erro", res.error);
            } else {
                navigation.navigate("Configuração")
            }
        } else {
            Platform.OS === "web"
                ? alert(`‼️Atenção: Preencha todos os campos`)
                : Alert.alert("‼️Atenção", "Preencha todos os campos");
        }
    }

    const consultaPerfil = async () => {
        setLoading(true)
        const perfil_id = await AsyncStorage.getItem('perfil_id')
        setPerfilId(perfil_id)
        const res = await Api.consultaPerfil(perfil_id)
        res.ok === 0
            ? Alert.alert('Não foi possível consultar o perfil logado')
            : setPerfil(res[0])
        setLoading(false)
    }

    const handleEscolherFotoClick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            setFoto(result.uri);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            consultaPerfil()
        }, [])
    )

    useEffect(() => {
        consultaPerfil()
    }, [])

    useEffect(() => {
        if (perfil && perfil.foto_perfil) {
            setFoto(perfil.foto_perfil.url)
        }
    }, [perfil])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading == true ?
                <ActivityIndicator size="large"
                    color={themes.colors.brand.primario} />
                : perfil ?
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                        }} >
                            <HStack alignSelf="center" marginY="1/5">
                                <Avatar bg="green.500" size="2xl" source={{
                                    uri: foto ? foto : "https://mind-app-bucket.s3.amazonaws.com/imagens_perfil/0ac9d2294ddd0fb44cb631a97480c120-default-user.png"
                                }}>
                                    Imagem avatar
                                </Avatar>
                            </HStack >
                            <HStack alignSelf="center" >
                                <StyledButtonSecundario
                                    icon="file-image"
                                    text="Escolher foto"
                                    onPress={handleEscolherFotoClick} />
                            </HStack>
                        </View>
                        <View style={{
                            position: "absolute",
                            bottom: "10%",
                            width: "75%"
                        }} >
                            <StyledButtonPrimario
                                icon="content-save"
                                text="Salvar"
                                onPress={handleSalvarClick} />
                        </View>
                    </View>
                    : null
            }
        </SafeAreaView >
    )
}
