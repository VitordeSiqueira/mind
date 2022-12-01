import { createDrawerNavigator } from "@react-navigation/drawer"
import Menu from "../views/Menu"
import Exercicios from "../views/Exercicios"
import Video from '../views/Video'
import Audio from '../views/Audio'
import Perfil from '../views/Perfil'
import Amigos from '../views/Amigos'
import ExerciciosRecentes from "../views/ExerciciosRecentes"
import AlterarCadastro from "../views/AlterarCadastro"
import Configuracao from "../views/Configuracao"
import Ajuda from "../views/Ajuda"
import AlterarImagemPerfil from "../views/AlterarImagemPerfil"

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
            <Drawer.Screen name="Video" component={Video} />
            <Drawer.Screen name="Configuração" component={Configuracao} />
            <Drawer.Screen name="Alterar Cadastro" component={AlterarCadastro} />
            <Drawer.Screen name="Alterar Imagem Perfil" component={AlterarImagemPerfil} />
            <Drawer.Screen name="Ajuda" component={Ajuda} />
        </Drawer.Navigator>
    )
}