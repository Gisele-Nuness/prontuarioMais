import React from "react";
import { StatusBar } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ThemeProvider, useTheme } from "./src/Theme/ThemeProvider";
import { NotificationProvider } from "./src/Context/NotificationContext"; // ✅ novo import

import Splash from "./src/pages/Splash";
import BemVindo from "./src/pages/BemVindo";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Cadastro2 from "./src/pages/Cadastro2";
import Splash2 from "./src/pages/Splash2";
import Home from "./src/pages/Home";
import Exames from "./src/pages/Exames";
import Historico from "./src/pages/Historico";
import Perfil from "./src/pages/Perfil";
import EditarPerfil from "./src/pages/EditarPerfil";
import EditarEndereco from "./src/pages/EditarEndereco";
import Alergias from "./src/pages/Alergias";
import Ajuda from "./src/pages/Ajuda";
import Medicamentos from "./src/pages/Medicamentos";

const Stack = createNativeStackNavigator();

function AppInner() {
  const { theme } = useTheme();
  const navTheme = theme.name === "dark" ? DarkTheme : DefaultTheme;

  return (
    <>
      <StatusBar hidden />
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          initialRouteName="Medicamentos"
          screenOptions={{ headerShown: false }}
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
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
          <Stack.Screen name="EditarEndereco" component={EditarEndereco} />
          <Stack.Screen name="Alergias" component={Alergias} />
          <Stack.Screen name="Ajuda" component={Ajuda} />
          <Stack.Screen name="Medicamentos" component={Medicamentos} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppInner />
      </NotificationProvider>
    </ThemeProvider>
  );
}
