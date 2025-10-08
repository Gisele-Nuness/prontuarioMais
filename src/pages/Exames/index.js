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

export default function Exames() {
  const { notificacoes } = useNotifications();
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const navigation = useNavigation();
  const styles = useThemedStyles(makeStyles);
  const { colors, dark } = useTheme();
  const placeholderColor =
    colors?.placeholder ?? (dark ? "rgba(255,255,255,0.6)" : "#2A2A2A99");

  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);

  const itensExames = [
    {
      id: "1",
      title: "Hemograma",
      dateISO: "2025-04-09T11:30:00-03:00",
      weekday: "Sexta-feira",
    },
    {
      id: "2",
      title: "Alergeno (geral)",
      dateISO: "2025-04-02T10:30:00-03:00",
      weekday: "Sexta-feira",
    },
    {
      id: "3",
      title: "Beta HCG",
      dateISO: "2025-03-31T09:30:00-03:00",
      weekday: "Sábado",
    },
    {
      id: "4",
      title: "Urina - Tipo 1",
      dateISO: "2025-02-24T11:30:00-03:00",
      weekday: "Segunda-feira",
    },
    {
      id: "5",
      title: "Vitamina B12",
      dateISO: "2025-01-29T11:30:00-03:00",
      weekday: "Sexta-feira",
    },
    {
      id: "6",
      title: "Colesterol total",
      dateISO: "2024-11-05T09:00:00-03:00",
      weekday: "Terça-feira",
    },
    {
      id: "7",
      title: "Vitamina B1",
      dateISO: "2024-09-03T12:30:00-03:00",
      weekday: "Terça-feira",
    },
    {
      id: "8",
      title: "Check-up geral",
      dateISO: "2024-05-10T11:30:00-03:00",
      weekday: "Sexta-feira",
    },
  ];

  function formatarHora(dateISO) {
    const data = new Date(dateISO);
    const horas = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    return `${horas}:${minutos}`;
  }

  const CartaoExame = ({ exame, onPress }) => (
    <Pressable style={styles.historico} onPress={onPress}>
      <View style={styles.textos}>
        <Text style={styles.titleLegend}>{exame.title}</Text>
        <Text style={styles.legendText}>
          {exame.weekday}, {new Date(exame.dateISO).toLocaleDateString("pt-BR")}{" "}
          às {formatarHora(exame.dateISO)}
        </Text>
      </View>
    </Pressable>
  );

  const examesFiltrados = useMemo(() => {
    const termoNormalizado = textoPesquisa.trim().toLowerCase();

    if (!termoNormalizado) return itensExames;

    return itensExames.filter((exame) =>
      exame.title.toLowerCase().includes(termoNormalizado)
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
            placeholder="Buscar exames"
            placeholderTextColor={placeholderColor}
            value={textoPesquisa}
            onChangeText={setTextoPesquisa}
            returnKeyType="search"
          />
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../../assets/exames.png")}
              style={styles.iconBuscar}
            />
          </Pressable>
        </View>

        <View style={styles.cards}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.titleText}>EXAMES</Text>
          </View>

          <FlatList
            data={examesFiltrados}
            keyExtractor={(exame) => exame.id}
            renderItem={({ item }) => (
              <CartaoExame exame={item} onPress={() => {}} />
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
