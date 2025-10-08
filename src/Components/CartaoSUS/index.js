import React, { useState } from "react";
import { Modal, View, Text, Image, Pressable } from "react-native";
import styles from "./style";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { buscarConta } from "../../Controllers/usuario";

export default function CartaoSUS({ visivel, aoFechar, frenteSrc, versoSrc }) {
  const [mostrarVerso, setMostrarVerso] = useState(false);
  const [nome, setNome] = useState("");
  const [cns, setCns] = useState("");
  const route = useRoute();

  const routePacienteId = route.params?.pacienteId;

  useFocusEffect(
    useCallback(() => {
      async function carregar() {
        try {
          const dados = await buscarConta(routePacienteId);
          setNome(dados.nome);
          setCns(dados.cns);
        } catch (e) {
          console.warn("erro ao buscar os dados:", e?.message || e);
        }
      }
      carregar();
    }, [routePacienteId])
  );

  const frente = frenteSrc ?? require("../../../assets/cartao-frente.png");
  const verso = versoSrc ?? require("../../../assets/cartao-verso.png");

  const fechar = () => {
    setMostrarVerso(false);
    aoFechar?.();
  };

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={fechar}
    >
      <Pressable style={styles.modalOverlay} onPress={fechar}>
        <Pressable style={styles.modalCard} onPress={() => {}}>
          {/* Header */}
          <View style={styles.modalHeaderRow}>
            <Pressable onPress={fechar}>
              <Text style={styles.modalHeaderBtn}>VOLTAR</Text>
            </Pressable>

            <Pressable onPress={() => setMostrarVerso((v) => !v)}>
              <Text style={styles.modalHeaderBtn}>
                {mostrarVerso ? "FRENTE" : "VERSO"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.modalImageWrap}>
            <Image
              source={mostrarVerso ? verso : frente}
              resizeMode="cover"
              style={styles.susImage}
            />
          </View>
          {mostrarVerso ? 
          <View style={styles.dadosCarteirinha}>
            <Text style={styles.txtCarteirinha}>Nome: {nome}</Text>
            <Text style={styles.txtCarteirinha}>Nº Carteirinha: {cns}</Text>
          </View>
          :
           <View></View>}
          

        </Pressable>
      </Pressable>
    </Modal>
  );
}
