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
import Header from "../Header";
import Footer from "../Footer";
import CartaoSUS from "../CartaoSUS";

export default function Perfil() {
  const navigation = useNavigation();
  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);

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
      <Header />

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

      <Footer setModalSUSVisivel={setModalSUSVisivel} />

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.jpg")}
      />
    </View>
  );
}
