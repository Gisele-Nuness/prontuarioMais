import React, { useState, useCallback } from "react";
import { View, Image, Pressable, Text, Modal, ScrollView } from "react-native";
import makeStyles from "./style";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { buscarConta } from "../../Controllers/usuario";
import { useNavigation } from "@react-navigation/native";

export default function Header({ notificacoes = [] }) {
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState("");
  const styles = useThemedStyles(makeStyles);
  const route = useRoute();
  const navigation = useNavigation();
  const [modalNotificacoes, setModalNotificacoes] = useState(false);

  const routePacienteId = route.params?.pacienteId;

  useFocusEffect(
    useCallback(() => {
      async function carregar() {
        try {
          const dados = await buscarConta(routePacienteId);
          setNome(dados.nome);
          setImagem(dados.imagem);
        } catch (e) {
          console.warn("Header/buscarConta falhou:", e?.message || e);
        }
      }
      carregar();
    }, [routePacienteId])
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
        <Pressable onPress={() => setModalNotificacoes(true)}>
          <Image
            source={require("../../../assets/notificacao.png")}
            style={styles.icons}
          />
          {notificacoes.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificacoes.length}</Text>
            </View>
          )}
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Ajuda")}>
          <Image
            source={require("../../../assets/ponto-de-interrogacao.png")}
            style={styles.icons}
          />
        </Pressable>
      </View>

      <Modal
        visible={modalNotificacoes}
        transparent
        animationType="slide"
        onRequestClose={() => setModalNotificacoes(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalConteudo}>
            <Text style={styles.modalTitulo}>Lembretes de Medicamentos</Text>

            <ScrollView style={{ maxHeight: 300 }}>
              {notificacoes.length === 0 ? (
                <Text style={{ textAlign: "center", color: "#555" }}>
                  Nenhum lembrete agendado
                </Text>
              ) : (
                notificacoes.map((n, i) => (
                  <View key={i} style={styles.notificacaoItem}>
                    <Text style={{ fontWeight: "bold" }}>{n.nome}</Text>
                    <Text>{n.horario}</Text>
                  </View>
                ))
              )}
            </ScrollView>

            <Pressable
              style={styles.btnFechar}
              onPress={() => setModalNotificacoes(false)}
            >
              <Text style={styles.btnFecharTexto}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
