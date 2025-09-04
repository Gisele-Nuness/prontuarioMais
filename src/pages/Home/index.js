import React, { useEffect, useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import CartaoSUS from "../CartaoSUS";
import Header from "../Header";
import Footer from "../Footer";

export default function Home() {
  const navigation = useNavigation();

  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);

  const bannerImages = [
    require("../../../assets/banner1.png"),
    require("../../../assets/campanha-dengue.jpg"),
    require("../../../assets/campanha-setembro-amarelo.png"),
  ];
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBannerIndex((i) => (i + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.main}>
        <View style={styles.searchWrapper}>
          <Image
            source={require("../../../assets/pesquisar.png")}
            style={styles.iconBuscar}
          />
          <TextInput
            style={styles.buscar}
            placeholder="Pesquisar"
            placeholderTextColor="#2A2A2A99"
          />
        </View>

        <View style={styles.cards}>
          <View style={styles.cardsRow}>
            <Pressable
              style={styles.historico}
              onPress={() => navigation.navigate("Historico")}
            >
              <View style={styles.textos}>
                <Text style={styles.legendText}>Visualizar</Text>
                <Text style={styles.titleText}>HISTÓRICO</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../../../assets/coracao-azul.png")}
                  style={styles.iconCards}
                />
              </View>
            </Pressable>

            <Pressable
              style={[styles.historico, styles.exames]}
              onPress={() => navigation.navigate("Exames")}
            >
              <View style={styles.textos}>
                <Text style={styles.legendText}>Visualizar</Text>
                <Text style={styles.titleText}>EXAMES</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../../../assets/mais.png")}
                  style={styles.iconCards}
                />
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.banner}>
          <Image
            source={bannerImages[bannerIndex]}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.cardsBottom}>
          <Pressable style={styles.cardSmall}>
            <View style={styles.textos}>
              <Text style={styles.legendText2}>Meus</Text>
              <Text style={styles.titleText2}>MEDICAMENTOS</Text>
            </View>
            <View style={styles.img}>
              <Image
                source={require("../../../assets/remedio.png")}
                style={styles.iconCardSmall}
              />
            </View>
          </Pressable>

          <Pressable style={[styles.cardSmall, styles.cardSmallRight]}>
            <View style={styles.textos}>
              <Text style={styles.legendText}>Minhas</Text>
              <Text style={styles.titleText}>ALERGIAS</Text>
            </View>
            <View style={styles.img}>
              <Image
                source={require("../../../assets/verme.png")}
                style={styles.iconCardSmall}
              />
            </View>
          </Pressable>
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
