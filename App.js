import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './src/stack/DrawerNavigator';
import {
    NativeBaseProvider
} from "native-base";
import { AuthContext } from "./src/resources/Context";
import PreLoad from "./src/views/PreLoad";
import { Inter_900Black, Inter_700Bold, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as Font from 'expo-font';
import AuthStackScreen from "./src/stack/AuthNavigator";

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator screenOptions={{
        headerShown: false
    }}>
        {userToken ? (
            <RootStack.Screen
                name="App"
                component={DrawerNavigator}
                options={{
                    animationEnabled: false
                }}
            />
        ) : (
            <RootStack.Screen
                name="Auth"
                component={AuthStackScreen}
                options={{
                    animationEnabled: false
                }}
            />
        )}
    </RootStack.Navigator>
);

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => {
        return {
            entrar: (token) => {
                setIsLoading(false);
                setUserToken(token)
            },
            cadastro: () => {
                setIsLoading(false);
                setUserToken(token);
            },
            sair: () => {
                setUserToken(null);
            }
        };
    }, []);

    React.useEffect(() => {
        async function prepare() {
            await Font.loadAsync({ Inter_900Black, Inter_700Bold, Inter_400Regular, Inter_500Medium });

            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
        prepare()
    }, [])

    if (isLoading) {
        return <PreLoad />;
    }
    return (
        <NativeBaseProvider>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    <RootStackScreen userToken={userToken} />
                </NavigationContainer>
            </AuthContext.Provider>
        </NativeBaseProvider>
    );
}
