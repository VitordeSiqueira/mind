import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Menu from "../views/Menu";
import Exercicios from "../views/Exercicios";
import VideoScreen from '../views/VideoScreen'
import ExecAudio from '../components/Audio'
import Perfil from '../views/Perfil'
import Amigos from '../views/Amigos'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <Menu {...props} />}
            screenOptions={{
                headerShown: true
            }}
            backBehavior={"history"}
            initialRouteName="Perfil"
        >
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Exercicios" component={Exercicios} />
            <Drawer.Screen name="Audio" component={ExecAudio} />
            <Drawer.Screen name="Amigos" component={Amigos} />
            <Drawer.Screen name="Video" component={VideoScreen} />

        </Drawer.Navigator>
    );
}