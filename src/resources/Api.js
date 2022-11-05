import AsyncStorage from '@react-native-async-storage/async-storage'

const BASE_API = "https://mind-back.onrender.com"
export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/perfil/token`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access-token': token
            }
        })
        const json = await req.json()
        return json
    },
    entrar: async (email, senha) => {
        const req = await fetch(`${BASE_API}/perfil/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        })
        const json = await req.json()
        return json
    },
    sair: async () => {
        await AsyncStorage.removeItem('token')
        return null
    },
    cadastro: async (nome, email, senha) => {
        const req = await fetch(`${BASE_API}/perfil`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        })
        const json = await req.json()
        return json
    }
}