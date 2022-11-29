import { createDrawerNavigator } from "@react-navigation/drawer"
import Menu from "../views/Menu"
import Exercicios from "../views/Exercicios"
import VideoPlayer from '../views/Video'
import Audio from '../views/Audio'
import Perfil from '../views/Perfil'
import Amigos from '../views/Amigos'
import ExerciciosRecentes from "../views/ExerciciosRecentes"

const Drawer = createDrawerNavigator()

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
            <Drawer.Screen name="Recentes" component={ExerciciosRecentes} />
            <Drawer.Screen name="Amigos" component={Amigos} />
            <Drawer.Screen name="Audio" component={Audio} />
            <Drawer.Screen name="Video" component={VideoPlayer} />
        </Drawer.Navigator>
    )
}