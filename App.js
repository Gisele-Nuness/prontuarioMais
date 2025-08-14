import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/pages/Splash";
import BemVindo from "./src/pages/BemVindo";
// import Login from './src/pages/Login';
// import Cadastro from './src/pages/Cadastro';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BemVindo"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BemVindo" component={BemVindo} />

        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Cadastro" component={Cadastro} />         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
