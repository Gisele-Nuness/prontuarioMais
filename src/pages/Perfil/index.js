import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();

  const itensPerfil = [
    {
      id: "1",
      title: "Perfil",
      text: "Visualize e edite seus dados pessoais",
    },
    {
      id: "2",
      title: "Sair",
      text: "Sair do aplicativo",
    },
  ];

  const sair = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Dados limpos com sucesso!");
      navigation.navigate("Splash");
    } catch (error) {
      console.error("Erro ao limpar os dados:", error);
    }
  };

  const Cards = ({ card, onPress }) => (
    <Pressable style={styles.historico} onPress={onPress}>
      <View style={styles.textos}>
        <Text style={styles.titleLegend}>{card.title}</Text>
        <Text style={styles.legendText}>{card.text}</Text>
      </View>
    </Pressable>
  );

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
        <View style={styles.cards}>
          <FlatList
            data={itensPerfil}
            keyExtractor={(card) => card.id}
            renderItem={({ item }) => (
              <Cards
                card={item}
                onPress={() => {
                  if (item.title === "Sair") {
                    sair();
                  }
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={styles.footerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../../assets/home.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Início</Text>
        </Pressable>
        <Pressable style={styles.footerItem}>
          <Image
            source={require("../../../assets/coracao-home.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Cartão SUS</Text>
        </Pressable>
        <Pressable style={styles.footerItem}>
          <Image
            source={require("../../../assets/icon-perfil.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Perfil</Text>
        </Pressable>
      </View>
    </View>
  );
}
