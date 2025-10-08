import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CartaoSUS from "../../Components/CartaoSUS";
import { View, Text, Pressable, Image, FlatList, Animated } from "react-native";
import makeStyles from "./style";
import React, { useState } from "react";
import { useThemedStyles } from "../../Theme/useThemedStyles";
import { useNotifications } from "../../Context/NotificationContext";

export default function Ajuda() {
  const [modalSUSVisivel, setModalSUSVisivel] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const styles = useThemedStyles(makeStyles);
  const { notificacoes } = useNotifications();

  const perguntas = [
    {
      id: "1",
      title: "Como eu vizualizo o meu prontuário?",
      obs: "Para vizualizar o seu prontuário, clique no menu 'Histórico' na tela inicial do aplicativo.",
    },
    {
      id: "2",
      title: "Como eu altero minha senha?",
      obs: "Para alterar sua senha, clique em Perfil, no canto inferior direito, depois em visualizar e editar dados pessoais, role a tela até o final e clique em alterar senha.",
    },
    {
      id: "3",
      title: "Como eu vejo meu cartão do SUS?",
      obs: "Para vizualizar o seu cartão do sus, clique no menu 'Cartão SUS' na parte inferior da tela do aplicativo.",
    },
    {
      id: "4",
      title: "Como eu vejo meus exames?",
      obs: "Para vizualizar os seus exames, clique no menu 'Exames' na tela inicial do aplicativo.",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const CardPergunta = ({ pergunta }) => {
    const isExpanded = expandedId === pergunta.id;

    return (
      <Pressable style={styles.historico} onPress={() => toggleExpand(pergunta.id)}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Image
            source={require("../../../assets/triangulo.png")}
            style={[
              styles.iconTriangulo,
              { transform: [{ rotate: isExpanded ? "0deg" : "270deg" }] },
            ]}
          />
          <View style={styles.textos}>
            <Text style={styles.titleLegend}>{pergunta.title}</Text>
            {isExpanded && (
              <Text style={styles.legendText}>{pergunta.obs}</Text>
            )}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Header notificacoes={notificacoes}/>
      <View style={styles.main}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>Central de Ajuda</Text>
          <Image
            source={require("../../../assets/icon-interrogacao.png")}
            style={styles.iconInterrogacao}
          />
        </View>

        <View style={styles.containerSubTitulo}>
          <Text style={styles.subTitulo}>Perguntas Frequentes (FAQ)</Text>
        </View>

        <FlatList
          data={perguntas}
          keyExtractor={(pergunta) => pergunta.id}
          renderItem={({ item }) => <CardPergunta pergunta={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
        />
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
