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
import { useNavigation, useTheme } from "@react-navigation/native";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";
import { useNotifications } from "../../Context/NotificationContext";

export default function Alergias() {
  const { notificacoes } = useNotifications();
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const navigation = useNavigation();
  const styles = useThemedStyles(makeStyles);
  const { colors, dark } = useTheme();
  const placeholderColor =
    colors?.placeholder ?? (dark ? "rgba(255,255,255,0.6)" : "#2A2A2A99");

  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);

  const itensAlergias = [
    {
      id: "1",
      name: "Alergia a Amendoim",
      severity: "Alta",
      type: "Alimentar",
    },
    {
      id: "2",
      name: "Alergia a Camarão",
      severity: "Média",
      type: "Alimentar",
    },
    {
      id: "3",
      name: "Rinite Alérgica (Pólen)",
      severity: "Baixa",
      type: "Respiratória",
    },
    {
      id: "4",
      name: "Alergia à Poeira",
      severity: "Média",
      type: "Respiratória",
    },
    {
      id: "5",
      name: "Alergia a Penicilina",
      severity: "Alta",
      type: "Medicamentosa",
    },
    { id: "6", name: "Alergia a Látex", severity: "Média", type: "Contato" },
    {
      id: "7",
      name: "Intolerância à Lactose",
      severity: "Baixa",
      type: "Alimentar",
    },
  ];

  const CartaoAlergia = ({ alergia, onPress }) => (
    <Pressable style={styles.historico} onPress={onPress}>
      <View
        style={[
          styles.severityIndicator,
          alergia.severity === "Alta" && styles.severityHigh,
          alergia.severity === "Média" && styles.severityMedium,
          alergia.severity === "Baixa" && styles.severityLow,
        ]}
      />
      <View style={styles.textos}>
        <Text style={styles.titleLegend}>{alergia.name}</Text>
        <Text style={styles.legendText}>
          Tipo: {alergia.type}, Severidade: {alergia.severity}
        </Text>
      </View>
    </Pressable>
  );

  const alergiasFiltradas = useMemo(() => {
    const termoNormalizado = textoPesquisa.trim().toLowerCase();

    if (!termoNormalizado) return itensAlergias;

    return itensAlergias.filter(
      (alergia) =>
        alergia.name.toLowerCase().includes(termoNormalizado) ||
        alergia.type.toLowerCase().includes(termoNormalizado) ||
        alergia.severity.toLowerCase().includes(termoNormalizado)
    );
  }, [textoPesquisa]);

  return (
    <View style={styles.container}>
      <Header notificacoes={notificacoes}/>

      <View style={styles.main}>
        <View style={styles.searchWrapper}>
          <Image
            source={require("../../../assets/pesquisar.png")}
            style={styles.iconBuscar}
          />
          <TextInput
            style={styles.buscar}
            placeholder="Buscar alergias"
            placeholderTextColor={placeholderColor}
            value={textoPesquisa}
            onChangeText={setTextoPesquisa}
            returnKeyType="search"
          />
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../../assets/alergias.png")}
              style={styles.iconBuscar}
            />
          </Pressable>
        </View>

        <View style={styles.cards}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.titleText}>Minhas Alergias</Text>
          </View>

          <FlatList
            data={alergiasFiltradas}
            keyExtractor={(alergia) => alergia.id}
            renderItem={({ item }) => (
              <CartaoAlergia alergia={item} onPress={() => {}} />
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
        versoSrc={require("../../../assets/cartao-verso.jpg")}
      />
    </View>
  );
}
