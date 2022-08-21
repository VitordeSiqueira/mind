import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomizeDrawer  from './src/views/CustomizeDrawer'
import exercicios from './src/views/exercicios'
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomizeDrawer {...props} /> } useLegacyImplementation
    screenOptions={{headerShown: true, drawerActiveBackgroundColor: '#6664CF', drawerActiveTintColor: '#fff'}}
    >
      <Drawer.Screen name="Perfil" component={Feed} />
      <Drawer.Screen name="Exercícios" component={exercicios} />
      <Drawer.Screen name="Recentes" component={Article} />
      <Drawer.Screen name="Amigos" component={Article} />
      <Drawer.Screen name="Configurações" component={Article} />
      <Drawer.Screen name="Ajuda" component={Article} />
      

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
