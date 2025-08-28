import { Text, View, Image, Pressable, Button } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import { Modal } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerPerfil}>
          <Image
            source={require("../../../assets/usuario-de-perfil.png")}
            style={styles.iconPerfil}
          />
        </View>

        <View style={styles.containerIcons}>
          <Image
            source={require("../../../assets/notificacao.png")}
            style={styles.icons}
          />

          <Image
            source={require("../../../assets/ponto-de-interrogacao.png")}
            style={styles.icons}
          />
        </View>
      </View>

      <View style={styles.main}>
        <Image
          source={require("../../../assets/pesquisar.png")}
          style={styles.iconBuscar}
        />
        <TextInput style={styles.buscar} />

        <View style={styles.cards}>
          <View style={styles.historico}>
            <View>
              <Text>Visualizar</Text>
              <Text>Histórico</Text>
            </View>

            <Image
              source={require("../../../assets/coracao-azul.png")}
              style={styles.iconCards}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
