import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Menu from "../views/Menu";
import themes from "../themes/padrao";
import PreLoad from '../views/PreLoad'
import Entrar from "../views/Entrar";
import Cadastro from '../views/Cadastro'
import Exercicios from "../views/exercicios";
import VideoScreen from '../views/VideoScreen'
import ExecAudio from '../components/Audio'
import Perfil from '../views/Perfil'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <Menu {...props} />}
            screenOptions={{
                headerShown: true,
                InactiveTintColor: themes.colors.brand.white,
                ActiveBackgroundColor: themes.colors.brand.secondary,
                ActiveTintColor: "#909090",
            }}
            backBehavior={"history"}
            initialRouteName="Perfil"
        >
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Exercicios" component={Exercicios} />
            <Drawer.Screen name="Audio" component={Perfil} />
            <Drawer.Screen name="Amigos" component={Perfil} />
            <Drawer.Screen name="Video" component={Perfil} />

        </Drawer.Navigator>
    );
}