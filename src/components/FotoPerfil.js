import * as React from 'react';
import { Image } from 'react-native';


const FotoPerfil =({foto}) => {
    return (
        // Aqui vai vim a foto do banco de dados
        <Image source={foto}  style={{margin:20, height:80, width:80, borderRadius:40, marginBottom:10}}/>

    )
}

export default FotoPerfil