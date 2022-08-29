import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu  from '../views/Menu'
import exercicios from '../views/exercicios'
import themes from '../themes/padrao'

import {Feed, Article} from './Tabs'
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (

    <Drawer.Navigator drawerContent={props => <Menu {...props} /> } useLegacyImplementation
    screenOptions={{headerShown: true, drawerInactiveTintColor: themes.colors.white, drawerActiveBackgroundColor: themes.colors.secondary,  drawerActiveTintColor: '#909090'}}
    >
      <Drawer.Screen name="Perfil" component={Feed} />
      <Drawer.Screen name="Exercícios" component={exercicios} />
      <Drawer.Screen name="Recentes" component={Feed} />
      <Drawer.Screen name="Amigos" component={Feed} />
      <Drawer.Screen name="Configurações" component={Feed} />
      <Drawer.Screen name="Ajuda" component={Article} />

    </Drawer.Navigator>

  );
}
