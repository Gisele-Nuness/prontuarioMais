import { Text, View, Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import React, { useEffect } from "react";

export default function BemVindo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image animation="pulse" iterationCount="infinite"
          source={require("../../../assets/coracao.png")}
          style={styles.imgCoracao}
        />
        <Text style={styles.txt1}>O app particular de saúde do cidadão brasileiro</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.txt2}>Bem vindo ao seu histórico médico particular</Text>

        <Pressable style={styles.btn}>
          <Text style={styles.txtBtn}>
            Entrar
          </Text>
        </Pressable>

        <Pressable style={styles.btn}>
          <Text style={styles.txtBtn}>
            Cadastrar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
