import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Entrar from '../views/Entrar';
import Cadastro from '../views/Cadastro';

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="Entrar"
            component={Entrar}
            options={{ title: "Entrar" }}
        />
        <AuthStack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ title: "Cadastro" }}
        />
    </AuthStack.Navigator>
);

export default AuthStackScreen;
