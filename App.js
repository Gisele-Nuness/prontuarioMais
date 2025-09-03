import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/pages/Splash";
import BemVindo from "./src/pages/BemVindo";
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Cadastro2 from './src/pages/Cadastro2';
import Splash2 from "./src/pages/Splash2";
import Home from "./src/pages/Home";
import Exames from "./src/pages/Exames";
import Historico from "./src/pages/Historico";
import Perfil from "./src/pages/Perfil";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exames" component={Exames} />
        <Stack.Screen name="Historico" component={Historico} />
        <Stack.Screen name="Perfil" component={Perfil} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
