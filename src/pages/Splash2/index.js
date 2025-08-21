import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import React, { useEffect } from "react";

export default function Splash() {
  const navigation = useNavigation();

useEffect(() => {
  const timer = setTimeout(() => {
    navigation.navigate("Home");
  }, 4000);

  return () => clearTimeout(timer);
}, [navigation]);


  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceInDown">
        <Image
          source={require("../../../assets/carregando.gif")}
          style={styles.img}
        />
      </Animatable.View>

      <StatusBar style="auto" />
    </View>
  );
}
