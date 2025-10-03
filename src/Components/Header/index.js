import React, { useState, useCallback } from "react";
import { View, Image, Pressable, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import makeStyles from "./style";
import { useRoute, useFocusEffect  } from "@react-navigation/native";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { buscarConta } from "../../Controllers/usuario";

export default function Header() {
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState("")
  const styles = useThemedStyles(makeStyles);
  const route = useRoute();

  const routePacienteId = route.params?.pacienteId;

  useFocusEffect(
    useCallback(() => {
      async function carregar() {
        try {
          const dados = await buscarConta(routePacienteId);
          setNome(dados.nome);
          setImagem(dados.imagem);
        } catch (e) {
          setModal(true);
          setModalMessage("Erro ao carregar dados do usuário.");
        }
      }
      carregar();
    }, [])
  );

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
        <Text style={styles.nome}>{nome}</Text>
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
