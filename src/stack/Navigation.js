import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../views/Menu";
import Exercicios from "../views/exercicios";
import themes from "../themes/padrao";
import { Entrar } from "../views/Entrar";

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
      <Drawer.Screen name="Perfil" component={Exercicios} />
      <Drawer.Screen name="Exercicios" component={Exercicios} />
      <Drawer.Screen name="Recentes" component={Exercicios} />
      <Drawer.Screen name="Amigos" component={Exercicios} />
      <Drawer.Screen name="Configurações" component={Exercicios} />
      <Drawer.Screen name="Entrar" component={Entrar} />
    </Drawer.Navigator>
  );
}