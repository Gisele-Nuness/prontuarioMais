import { Text, View, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerHora}>
          <Text style={styles.hora}>14:44</Text>
        </View>

        <View style={styles.containerIcons}>
          <Image
            source={require("../../../assets/sinal-de-rede.png")}
            style={styles.icons}
          />

          <Image
            source={require("../../../assets/sinal-wifi.png")}
            style={styles.icons}
          />

          <Image
            source={require("../../../assets/barra-de-bateria.png")}
            style={styles.icons}
          />
        </View>
      </View>

      <View style={styles.main}>
        <Pressable style={styles.btnVoltar}>
          <Text style={styles.txtBtnVoltar}>Voltar</Text>
        </Pressable>

        <Image
          source={require("../../../assets/azul-logo.png")}
          style={styles.icons}
        />

        <Text style={styles.txt2}>
          Bem vindo ao seu histórico médico particular
        </Text>

        <Pressable style={styles.btn}>
          <Text style={styles.txtBtn}>Entrar</Text>
        </Pressable>

        <Pressable style={styles.btnEsqueci}>
          <Text style={styles.txtBtnEsqueci}>Esqueci a senha</Text>
        </Pressable>
      </View>
    </View>
  );
}
