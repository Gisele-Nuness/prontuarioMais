import React, { useEffect, useState } from "react";
import { View, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";

export default function Header() {
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    const carregarImagem = async () => {
      const dados = await AsyncStorage.getItem("dadosUsuario");
      if (dados) {
        const usuario = JSON.parse(dados);
        if (usuario.imagem) setImagem(usuario.imagem);
      }
    };
    carregarImagem();
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.containerPerfil}>
        <Image
          source={
            imagem
              ? { uri: imagem }
              : require("../../../assets/usuario-de-perfil.png")
          }
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
  );
}
