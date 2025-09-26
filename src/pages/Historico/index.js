import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import makeStyles from './style';
import { useThemedStyles } from '../../Theme/useThemedStyles';
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";

export default function Historico() {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const navigation = useNavigation();
  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);
  const styles = useThemedStyles(makeStyles);

  const itensHistorico = [
    {
      id: "1",
      title: "Consulta Ginecologia",
      dateISO: "2025-04-09T11:30:00-03:00",
      weekday: "Sexta-feira",
    },
    {
      id: "2",
      title: "Consulta Cardiologia",
      dateISO: "2025-04-02T10:30:00-03:00",
      weekday: "Sexta-feira",
    },
    {
      id: "3",
      title: "Consulta Ginecologia",
      dateISO: "2025-03-31T09:30:00-03:00",
      weekday: "Sábado",
    },
    {
      id: "4",
      title: "Usg mamas",
      dateISO: "2025-02-24T11:30:00-03:00",
      weekday: "Segunda-feira",
    },
    {
      id: "5",
      title: "Eletrocardiograma",
      dateISO: "2025-01-29T11:30:00-03:00",
      weekday: "Sexta-feira",
    },
    {
      id: "6",
      title: "Consulta Clínico Geral",
      dateISO: "2024-11-05T09:00:00-03:00",
      weekday: "Terça-feira",
    },
    {
      id: "7",
      title: "Consulta Cardiologia",
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

  const CartaoHistorico = ({ exame, onPress }) => (
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

  const historicosFiltrados = useMemo(() => {
    const termoNormalizado = textoPesquisa.trim().toLowerCase();

    if (!termoNormalizado) return itensHistorico;

    return itensHistorico.filter((historico) =>
      historico.title.toLowerCase().includes(termoNormalizado)
    );
  }, [textoPesquisa]);

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
            placeholder="Buscar"
            placeholderTextColor="#2A2A2A99"
            value={textoPesquisa}
            onChangeText={setTextoPesquisa}
            returnKeyType="search"
          />
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../../assets/filtro.png")}
              style={styles.iconBuscar}
            />
          </Pressable>
        </View>

        <View style={styles.cards}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.titleText}>HISTÓRICO</Text>
          </View>

          <FlatList
            data={historicosFiltrados}
            keyExtractor={(historico) => historico.id}
            renderItem={({ item }) => (
              <CartaoHistorico
                exame={item}
                onPress={() => {
                  /* navegação */
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Footer setModalSUSVisivel={setModalSUSVisivel} susSelected={modalSUSVisivel} />

      <CartaoSUS
        visivel={modalSUSVisivel}
        aoFechar={() => setModalSUSVisivel(false)}
        frenteSrc={require("../../../assets/cartao-frente.png")}
        versoSrc={require("../../../assets/cartao-verso.jpg")}
      />
    </View>
  );
}
