import React, { useState } from "react";
import { Modal, View, Text, Image, Pressable } from "react-native";
import styles from "./style";

export default function CartaoSUS({
  visivel,
  aoFechar,
  frenteSrc,
  versoSrc,
}) {
  const [mostrarVerso, setMostrarVerso] = useState(false);

  const frente = frenteSrc ?? require("../../../assets/cartao-frente.png");
  const verso  = versoSrc  ?? require("../../../assets/cartao-verso.jpg"); 

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

            <Pressable onPress={() => setMostrarVerso(v => !v)}>
              <Text style={styles.modalHeaderBtn}>
                {mostrarVerso ? "FRENTE" : "VERSO"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.modalImageWrap}>
            <Image
              source={mostrarVerso ? verso : frente}
              resizeMode="contain"
              style={styles.susImage}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
