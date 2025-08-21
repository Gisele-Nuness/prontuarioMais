import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/pages/Splash";
import BemVindo from "./src/pages/BemVindo";
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Cadastro2 from './src/pages/Cadastro2';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
