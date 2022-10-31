import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../views/Menu";
import Exercicios from "../views/exercicios";
import themes from "../themes/padrao";
import { Entrar } from "../views/Entrar";
import  Cadastro  from '../views/Cadastro'
import VideoScreen from '../views/VideoScreen'
import ExecAudio from '../components/Audio'
import Perfil from '../views/Perfil'
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      screenOptions={{
        headerShown: true,
        InactiveTintColor: themes.colors.white,
        ActiveBackgroundColor: themes.colors.secondary,
        ActiveTintColor: "#909090",
      }}
    >
      <Drawer.Screen name="Exercicios2" component={Exercicios} />
      <Drawer.Screen name="Exercicios" component={Exercicios} />
      <Drawer.Screen name="Audio" component={ExecAudio} />
      <Drawer.Screen name="Amigos" component={Exercicios} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Entrar" component={Entrar} />
      <Drawer.Screen name="Video" component={VideoScreen} />
      <Drawer.Screen name="Perfil" component={Perfil} />

    </Drawer.Navigator>
  );
}