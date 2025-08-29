import React, { useEffect, useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const bannerImages = [
    require("../../../assets/banner1.png"),
    require("../../../assets/banner2.png"),
    require("../../../assets/banner3.png"),
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
            <Pressable style={styles.historico}>
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

            <Pressable style={[styles.historico, styles.exames]} onPress={() => navigation.navigate("Exames")}>
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

      <View style={styles.footer}>
        <Pressable style={styles.footerItem}>
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
