import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import makeStyles from "./style";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";
import { useTheme } from "../../Theme/ThemeProvider";
import { useNotifications } from "../../Context/NotificationContext";

export default function Perfil() {
  const navigation = useNavigation();
  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);
  const { theme, mode, toggleMode } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { notificacoes } = useNotifications();

  const itensPerfil = [
    {
      id: "1",
      title: "Perfil",
      text: "Visualize e edite seus dados pessoais",
      icon: require("../../../assets/icon-perfil.png"),
    },
        {
      id: "2",
      title: "Endereço",
      text: "Alterar endereço cadastrado",
      icon: require("../../../assets/endereco.png"),
    },
    {
      id: "3",
      title: "Sair",
      text: "Sair do aplicativo",
      icon: require("../../../assets/sair.png"),
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
      <Image source={card.icon} style={styles.cardIcon} resizeMode="contain" />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Header notificacoes={notificacoes}/>

      <View style={styles.main}>
        <View style={[styles.historico, { marginBottom: 10 }]}>
          <View style={styles.textos}>
            <Text style={styles.titleLegend}>Tema</Text>
            <Text style={styles.legendText}>Alterar tema</Text>
          </View>

          <Pressable onPress={toggleMode} style={styles.themeBtn} hitSlop={12}>
            <Image
              source={require("../../../assets/sun.png")}
              style={styles.sunIcon}
              resizeMode="contain"
            />
            <Image
              source={require("../../../assets/moon.png")}
              style={styles.moonIcon}
              resizeMode="contain"
            />
          </Pressable>
        </View>
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
                  if (item.title === "Perfil") {
                    navigation.navigate("EditarPerfil");
                  }
                  if (item.title === "Endereço") {
                    navigation.navigate("EditarEndereco");
                  }
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Footer
        setModalSUSVisivel={setModalSUSVisivel}
        susSelected={modalSUSVisivel}
      />

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.png")}
      />
    </View>
  );
}
