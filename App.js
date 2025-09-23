import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ThemeProvider, useTheme } from "./src/Theme/ThemeProvider"; // << novo
// Suas telas
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

const Stack = createNativeStackNavigator();

function AppInner() {
  const { theme } = useTheme();
  const navTheme = theme.name === "dark" ? DarkTheme : DefaultTheme;

  return (
    <>
      <StatusBar
        barStyle={theme.name === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          initialRouteName="EditarPerfil"
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
