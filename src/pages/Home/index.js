import React, { useEffect, useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import makeStyles from "./style";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { useNavigation } from "@react-navigation/native";
import CartaoSUS from "../../Components/CartaoSUS";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Home() {
  const navigation = useNavigation();
  const styles = useThemedStyles(makeStyles);

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
        <View style={styles.bannerPaciente}>
          <Image
            source={require("../../../assets/container-paciente.png")}
            style={styles.bannerPacienteImage}
          />
        </View>

        <View style={styles.banner}>
          <Image
            source={bannerImages[bannerIndex]}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.cards}>
          
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
              style={styles.historico}
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

            <Pressable
              style={styles.historico}
              onPress={() => navigation.navigate("Medicamentos")}
            >
              <View style={styles.textos}>
                <Text style={styles.legendText}>Meus</Text>
                <Text style={styles.titleText}>Medicamentos</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../../../assets/remedio.png")}
                  style={styles.iconCardSmall}
                />
              </View>
            </Pressable>

            <Pressable
              style={styles.historico}
              onPress={() => navigation.navigate("Alergias")}
            >
              <View style={styles.textos}>
                <Text style={styles.legendText}>Minhas</Text>
                <Text style={styles.titleText}>Alergias</Text>
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

      <Footer
        setModalSUSVisivel={setModalSUSVisivel}
        susSelected={modalSUSVisivel}
      />

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.jpg")}
      />
    </View>
  );
}
